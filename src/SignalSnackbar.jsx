import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

const SYMBOL_LABELS = {
    'GBPJPY=X': 'GBP/JPY', 'XAUUSD=X': 'XAU/USD', 'USDCAD=X': 'USD/CAD',
    'BTC-USD': 'BTC/USD', 'EURUSD=X': 'EUR/USD', 'GBPUSD=X': 'GBP/USD', 'USDJPY=X': 'USD/JPY',
};

const SignalSnackbar = () => {
    const [signal, setSignal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'trading_alerts'), orderBy('timestamp', 'desc'), limit(1));
        const unsub = onSnapshot(q, (snap) => {
            setSignal(snap.docs[0] ? { id: snap.docs[0].id, ...snap.docs[0].data() } : null);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    const isBuy = signal?.type === 'BUY';

    return (
        <div className="w-full bg-gray-950 border-b border-white/5 px-4 py-2">
            <div className="container mx-auto flex items-center justify-center gap-3 text-sm">
                {loading ? (
                    <div className="flex items-center gap-2 text-gray-500">
                        <div className="w-3 h-3 border border-gray-500 border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs">Connecting to signal feed...</span>
                    </div>
                ) : signal ? (
                    <>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            LATEST SIGNAL
                        </span>
                        <span className="text-gray-600">·</span>
                        <span className={`font-bold text-xs px-2 py-0.5 rounded ${isBuy ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {signal.type}
                        </span>
                        <span className="text-white font-semibold text-xs">{SYMBOL_LABELS[signal.symbol] || signal.symbol}</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-400 font-mono text-xs">{Number(signal.price).toFixed(4)}</span>
                        <span className="text-gray-600">·</span>
                        <span className={`text-xs ${signal.confidence === 'HIGH' ? 'text-yellow-400' : 'text-blue-400'}`}>
                            {signal.confidence}
                        </span>
                        <a href="#signals" className="ml-2 text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition">
                            View all →
                        </a>
                    </>
                ) : (
                    <span className="flex items-center gap-2 text-gray-500 text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                        No signals yet — bot is monitoring markets
                    </span>
                )}
            </div>
        </div>
    );
};

export default SignalSnackbar;
