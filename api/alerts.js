/**
 * Vercel serverless proxy → Render bot /api/alerts
 * Set ALERTS_API_URL in Vercel project env to your live Render service URL.
 */
const DEFAULT_UPSTREAM = 'https://fib-trading-bot.onrender.com';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const limit = req.query.limit || '10';
  const base = (process.env.ALERTS_API_URL || DEFAULT_UPSTREAM).replace(/\/$/, '');

  try {
    const upstream = await fetch(`${base}/api/alerts?limit=${encodeURIComponent(limit)}`, {
      headers: { Accept: 'application/json' },
    });

    if (upstream.ok) {
      const data = await upstream.json();
      return res.status(200).json(Array.isArray(data) ? data : []);
    }

    console.error(`Alerts upstream ${upstream.status} from ${base}/api/alerts`);
    return res.status(200).json([]);
  } catch (error) {
    console.error('Alerts proxy error:', error);
    return res.status(200).json([]);
  }
};
