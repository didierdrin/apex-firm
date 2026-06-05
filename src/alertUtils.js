export const SYMBOL_LABELS = {
    'GBPJPY=X': 'GBP/JPY',
    'XAUUSD=X': 'XAU/USD',
    'USDCAD=X': 'USD/CAD',
    'BTC-USD': 'BTC/USD',
    'EURUSD=X': 'EUR/USD',
    'GBPUSD=X': 'GBP/USD',
    'USDJPY=X': 'USD/JPY',
    'AUDJPY=X': 'AUD/JPY',
    'AUDUSD=X': 'AUD/USD',
    'NZDUSD=X': 'NZD/USD',
    'USDCHF=X': 'USD/CHF',
    'EURGBP=X': 'EUR/GBP',
    'EURCAD=X': 'EUR/CAD',
    'EURJPY=X': 'EUR/JPY',
    'GBPCAD=X': 'GBP/CAD',
    'AUDCAD=X': 'AUD/CAD',
    'EURAUD=X': 'EUR/AUD',
    'XAUEUR=X': 'XAU/EUR',
    'ETH-USD': 'ETH/USD',
};

export const SESSION_LABELS = {
    asia: 'Asian Session',
    london: 'London Session',
    newyork: 'New York Session',
    off_hours: 'Off Hours',
};

/** Parse Firestore Timestamp, ISO string, epoch ms, or legacy numeric timestamp. */
export function parseAlertTimestamp(value) {
    if (value == null) return null;
    if (typeof value === 'string') {
        const d = new Date(value);
        return Number.isNaN(d.getTime()) ? null : d;
    }
    if (typeof value === 'number') {
        const ms = value < 1e12 ? value * 1000 : value;
        const d = new Date(ms);
        return Number.isNaN(d.getTime()) ? null : d;
    }
    if (typeof value.toDate === 'function') {
        return value.toDate();
    }
    if (typeof value.seconds === 'number') {
        return new Date(value.seconds * 1000 + (value.nanoseconds || 0) / 1e6);
    }
    return null;
}

export function getAlertSortTime(alert) {
    if (alert?.timestamp_ms != null) return Number(alert.timestamp_ms);
    const parsed = parseAlertTimestamp(alert?.timestamp);
    return parsed ? parsed.getTime() : 0;
}

export function sortAlertsDesc(alerts) {
    return [...alerts].sort((a, b) => getAlertSortTime(b) - getAlertSortTime(a));
}

export function isBuyType(type) {
    return type === 'BUY' || type === 'EXIT_SHORT';
}

export function formatSignalLabel(signal) {
    if (!signal) return '';
    return String(signal).replace(/_/g, ' ').replace(/\b15m\b/gi, '15m').toUpperCase();
}
