import { useEffect, useState } from 'react';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';
import { sortAlertsDesc } from './alertUtils';

/**
 * Live trading_alerts feed with fallbacks so legacy docs still appear.
 * Primary: orderBy timestamp_ms (numeric, written by bot).
 * Fallback: orderBy timestamp, then unsorted client sort.
 */
export function useTradingAlerts({ maxItems = 10 } = {}) {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const col = collection(db, 'trading_alerts');
        let unsubFallback = null;

        const applyDocs = (docs) => {
            const items = docs.map((d) => ({ id: d.id, ...d.data() }));
            setAlerts(sortAlertsDesc(items).slice(0, maxItems));
            setLoading(false);
            setError(null);
        };

        const subscribeFallback = (orderedField) => {
            if (unsubFallback) unsubFallback();
            if (orderedField) {
                const q = query(col, orderBy(orderedField, 'desc'), limit(50));
                unsubFallback = onSnapshot(
                    q,
                    (snap) => applyDocs(snap.docs),
                    () => subscribeUnordered()
                );
            } else {
                subscribeUnordered();
            }
        };

        const subscribeUnordered = () => {
            if (unsubFallback) unsubFallback();
            const q = query(col, limit(50));
            unsubFallback = onSnapshot(
                q,
                (snap) => applyDocs(snap.docs),
                (err) => {
                    console.error('trading_alerts feed failed:', err);
                    setError(err.message);
                    setLoading(false);
                }
            );
        };

        const qPrimary = query(col, orderBy('timestamp_ms', 'desc'), limit(maxItems));
        const unsubPrimary = onSnapshot(
            qPrimary,
            (snap) => applyDocs(snap.docs),
            (err) => {
                console.warn('timestamp_ms query failed, trying timestamp:', err);
                const qTs = query(col, orderBy('timestamp', 'desc'), limit(maxItems));
                unsubFallback = onSnapshot(
                    qTs,
                    (snap) => applyDocs(snap.docs),
                    () => subscribeFallback(null)
                );
            }
        );

        return () => {
            unsubPrimary();
            if (unsubFallback) unsubFallback();
        };
    }, [maxItems]);

    return { alerts, loading, error };
}
