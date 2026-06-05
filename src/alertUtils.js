export const SYMBOL_LABELS = {
    'EURUSD=X': 'EUR/USD', 'GBPJPY=X': 'GBP/JPY', 'AUDJPY=X': 'AUD/JPY',
    'XAUUSD=X': 'XAU/USD', 'USDCAD=X': 'USD/CAD', 'GBPUSD=X': 'GBP/USD',
    'EURJPY=X': 'EUR/JPY', 'USDJPY=X': 'USD/JPY', 'AUDUSD=X': 'AUD/USD',
    'NZDUSD=X': 'NZD/USD', 'USDCHF=X': 'USD/CHF', 'EURGBP=X': 'EUR/GBP',
    'EURCAD=X': 'EUR/CAD', 'GBPCAD=X': 'GBP/CAD', 'AUDCAD=X': 'AUD/CAD',
    'EURAUD=X': 'EUR/AUD', 'EURCHF=X': 'EUR/CHF', 'EURNZD=X': 'EUR/NZD',
    'GBPCHF=X': 'GBP/CHF', 'GBPAUD=X': 'GBP/AUD', 'GBPNZD=X': 'GBP/NZD',
    'AUDCHF=X': 'AUD/CHF', 'AUDNZD=X': 'AUD/NZD', 'CADJPY=X': 'CAD/JPY',
    'CHFJPY=X': 'CHF/JPY', 'NZDJPY=X': 'NZD/JPY', 'NZDCAD=X': 'NZD/CAD',
    'NZDCHF=X': 'NZD/CHF', 'CADCHF=X': 'CAD/CHF', 'XAUEUR=X': 'XAU/EUR',
    'XAUGBP=X': 'XAU/GBP', 'XAUJPY=X': 'XAU/JPY', 'XAGUSD=X': 'XAG/USD',
    'USDMXN=X': 'USD/MXN', 'USDZAR=X': 'USD/ZAR', 'USDTRY=X': 'USD/TRY',
    'USDSEK=X': 'USD/SEK', 'USDNOK=X': 'USD/NOK', 'USDDKK=X': 'USD/DKK',
    'USDPLN=X': 'USD/PLN', 'USDSGD=X': 'USD/SGD', 'USDHKD=X': 'USD/HKD',
    'USDCNH=X': 'USD/CNH',
    'BTC-USD': 'BTC/USD', 'ETH-USD': 'ETH/USD', 'SOL-USD': 'SOL/USD',
    'BNB-USD': 'BNB/USD', 'XRP-USD': 'XRP/USD', 'ADA-USD': 'ADA/USD',
    'DOGE-USD': 'DOGE/USD', 'DOT-USD': 'DOT/USD', 'AVAX-USD': 'AVAX/USD',
    'LINK-USD': 'LINK/USD', 'LTC-USD': 'LTC/USD', 'BCH-USD': 'BCH/USD',
    'MATIC-USD': 'MATIC/USD', 'UNI-USD': 'UNI/USD', 'ATOM-USD': 'ATOM/USD',
    'XLM-USD': 'XLM/USD', 'SHIB-USD': 'SHIB/USD', 'TRX-USD': 'TRX/USD',
    '^GSPC': 'S&P 500', '^DJI': 'Dow Jones', '^IXIC': 'Nasdaq', '^RUT': 'Russell 2000',
    '^VIX': 'VIX', '^FTSE': 'FTSE 100', '^GDAXI': 'DAX', '^FCHI': 'CAC 40',
    '^N225': 'Nikkei 225', '^HSI': 'Hang Seng', '^STOXX50E': 'Euro Stoxx 50',
    'GC=F': 'Gold Futures', 'SI=F': 'Silver Futures', 'CL=F': 'WTI Oil',
    'BZ=F': 'Brent Oil', 'NG=F': 'Natural Gas', 'HG=F': 'Copper',
    'ZC=F': 'Corn', 'ZW=F': 'Wheat',
    'AAPL': 'Apple', 'MSFT': 'Microsoft', 'GOOGL': 'Alphabet', 'GOOG': 'Alphabet C',
    'AMZN': 'Amazon', 'META': 'Meta', 'NVDA': 'NVIDIA', 'TSLA': 'Tesla',
    'AMD': 'AMD', 'INTC': 'Intel', 'NFLX': 'Netflix', 'CRM': 'Salesforce',
    'ORCL': 'Oracle', 'IBM': 'IBM', 'JPM': 'JPMorgan', 'BAC': 'Bank of America',
    'WFC': 'Wells Fargo', 'GS': 'Goldman Sachs', 'V': 'Visa', 'MA': 'Mastercard',
    'JNJ': 'J&J', 'UNH': 'UnitedHealth', 'PFE': 'Pfizer', 'XOM': 'Exxon',
    'CVX': 'Chevron', 'WMT': 'Walmart', 'HD': 'Home Depot', 'DIS': 'Disney',
    'KO': 'Coca-Cola', 'PEP': 'PepsiCo', 'NKE': 'Nike', 'BA': 'Boeing',
    'COIN': 'Coinbase', 'MSTR': 'MicroStrategy',
    'SPY': 'S&P 500 ETF', 'QQQ': 'Nasdaq ETF', 'DIA': 'Dow ETF', 'IWM': 'Russell ETF',
    'XLF': 'Financials ETF', 'XLE': 'Energy ETF', 'XLK': 'Tech ETF',
    'GLD': 'Gold ETF', 'SLV': 'Silver ETF', 'USO': 'Oil ETF',
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
