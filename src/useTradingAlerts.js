import { useCallback, useEffect, useState } from 'react';
import { sortAlertsDesc } from './alertUtils';

const ALERTS_API_URL = (
    process.env.REACT_APP_ALERTS_API_URL || 'https://fib-trading-bot.onrender.com'
).replace(/\/$/, '');

const POLL_MS = Number(process.env.REACT_APP_ALERTS_POLL_MS || 15000);

export function getAlertsApiUrl() {
    return ALERTS_API_URL;
}

/** Poll Neon-backed alerts via bot REST API (/api/alerts). */
export function useTradingAlerts({ maxItems = 10 } = {}) {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAlerts = useCallback(async () => {
        try {
            const res = await fetch(`${ALERTS_API_URL}/api/alerts?limit=${maxItems}`, {
                cache: 'no-store',
            });
            if (!res.ok) {
                throw new Error(`Alerts API ${res.status}`);
            }
            const data = await res.json();
            const items = Array.isArray(data) ? data : [];
            setAlerts(sortAlertsDesc(items.map((row) => ({ ...row, id: row.id || row.timestamp_ms }))).slice(0, maxItems));
            setError(null);
        } catch (err) {
            console.error('trading_alerts fetch failed:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [maxItems]);

    useEffect(() => {
        fetchAlerts();
        const id = setInterval(fetchAlerts, POLL_MS);
        return () => clearInterval(id);
    }, [fetchAlerts]);

    return { alerts, loading, error, refresh: fetchAlerts };
}
