/**
 * In-Memory Sliding Window Rate Limiter for Next.js Server Actions & API Routes
 */

const tracker = new Map();

// Cleanup stale entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of tracker.entries()) {
      if (now > record.resetTime) {
        tracker.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

/**
 * Check if an action key exceeds limit
 * @param {string} identifier - IP or email identifier
 * @param {string} actionType - 'login' | 'signup' | 'otp' | 'contact'
 * @param {number} maxLimit - Max allowed requests
 * @param {number} windowMs - Time window in milliseconds (default 15 mins)
 * @returns {{ allowed: boolean, remaining: number, resetInSeconds: number }}
 */
export function checkRateLimit(identifier, actionType = 'default', maxLimit = 5, windowMs = 15 * 60 * 1000) {
  const key = `${actionType}:${identifier || 'anonymous'}`;
  const now = Date.now();

  const record = tracker.get(key) || { count: 0, resetTime: now + windowMs };

  // Reset count if window has passed
  if (now > record.resetTime) {
    record.count = 0;
    record.resetTime = now + windowMs;
  }

  record.count += 1;
  tracker.set(key, record);

  const remaining = Math.max(0, maxLimit - record.count);
  const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);

  return {
    allowed: record.count <= maxLimit,
    remaining,
    resetInSeconds,
  };
}
