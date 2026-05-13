/**
 * Anti-Spam Utilities
 * - Rate limiting by IP
 * - Honeypot field detection
 * - Submission timing checks
 * - reCAPTCHA v3 / hCaptcha integration
 */

export interface AntiSpamConfig {
  maxSubmissionsPerHour?: number; // Default: 5
  maxSubmissionsPerDay?: number; // Default: 20
  minSubmissionTimeSeconds?: number; // Default: 3
  recaptchaEnabled?: boolean;
  honeypotFieldName?: string; // Default: "website"
}

export interface AntiSpamResult {
  isSpam: boolean;
  reason?: string;
}

// In-memory store for rate limiting (in production, use Redis)
// Key: IP address, Value: { hourCount, dayCount, timestamps }
const rateLimitStore = new Map<
  string,
  {
    hourCount: number;
    dayCount: number;
    hourStart: number;
    dayStart: number;
  }
>();

/**
 * Check honeypot field
 * Bots fill hidden fields, humans don't
 */
export function checkHoneypot(honeypotValue: string | undefined, fieldName: string = "website"): AntiSpamResult {
  if (honeypotValue && honeypotValue.trim().length > 0) {
    console.warn("[v0] Honeypot triggered:", { fieldName, value: honeypotValue });
    return {
      isSpam: true,
      reason: "Spam detection triggered",
    };
  }

  return { isSpam: false };
}

/**
 * Check submission timing
 * Bots submit too quickly, humans take at least 3+ seconds
 */
export function checkSubmissionTiming(
  startTimeMs: number,
  minTimeSeconds: number = 3,
): AntiSpamResult {
  const elapsedSeconds = (Date.now() - startTimeMs) / 1000;

  if (elapsedSeconds < minTimeSeconds) {
    console.warn("[v0] Submission too fast:", { elapsedSeconds, minTimeSeconds });
    return {
      isSpam: true,
      reason: "Submission was too fast. Please take your time.",
    };
  }

  return { isSpam: false };
}

/**
 * Rate limit check by IP
 * Default: 5 per hour, 20 per day
 */
export function checkRateLimit(
  ipAddress: string,
  maxPerHour: number = 5,
  maxPerDay: number = 20,
): AntiSpamResult {
  const now = Date.now();
  const hourInMs = 60 * 60 * 1000;
  const dayInMs = 24 * 60 * 60 * 1000;

  let record = rateLimitStore.get(ipAddress);

  if (!record) {
    rateLimitStore.set(ipAddress, {
      hourCount: 1,
      dayCount: 1,
      hourStart: now,
      dayStart: now,
    });
    return { isSpam: false };
  }

  // Check if hour window has passed
  if (now - record.hourStart > hourInMs) {
    record.hourCount = 0;
    record.hourStart = now;
  }

  // Check if day window has passed
  if (now - record.dayStart > dayInMs) {
    record.dayCount = 0;
    record.dayStart = now;
  }

  // Increment counts
  record.hourCount++;
  record.dayCount++;

  // Check limits
  if (record.hourCount > maxPerHour) {
    console.warn("[v0] Rate limit exceeded (hourly):", { ip: ipAddress, count: record.hourCount });
    return {
      isSpam: true,
      reason: "Too many submissions. Please try again later.",
    };
  }

  if (record.dayCount > maxPerDay) {
    console.warn("[v0] Rate limit exceeded (daily):", { ip: ipAddress, count: record.dayCount });
    return {
      isSpam: true,
      reason: "Daily submission limit reached. Please try again tomorrow.",
    };
  }

  return { isSpam: false };
}

/**
 * Verify reCAPTCHA v3 token (server-side)
 * This should be called from a server action or API route
 */
export async function verifyRecaptchaV3(
  token: string,
  secretKey: string,
  requiredScore: number = 0.5,
): Promise<AntiSpamResult> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = (await response.json()) as {
      success: boolean;
      score: number;
      action: string;
      error_codes?: string[];
    };

    if (!data.success) {
      console.warn("[v0] reCAPTCHA verification failed:", data.error_codes);
      return {
        isSpam: true,
        reason: "Bot verification failed",
      };
    }

    if (data.score < requiredScore) {
      console.warn("[v0] reCAPTCHA score too low:", { score: data.score, required: requiredScore });
      return {
        isSpam: true,
        reason: "Suspected bot activity",
      };
    }

    return { isSpam: false };
  } catch (error) {
    console.error("[v0] reCAPTCHA verification error:", error);
    return {
      isSpam: false, // Don't block on error, let through
    };
  }
}

/**
 * Verify hCaptcha token (server-side)
 * This should be called from a server action or API route
 */
export async function verifyHCaptcha(token: string, secretKey: string): Promise<AntiSpamResult> {
  try {
    const response = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = (await response.json()) as {
      success: boolean;
      error_codes?: string[];
    };

    if (!data.success) {
      console.warn("[v0] hCaptcha verification failed:", data.error_codes);
      return {
        isSpam: true,
        reason: "Verification failed",
      };
    }

    return { isSpam: false };
  } catch (error) {
    console.error("[v0] hCaptcha verification error:", error);
    return {
      isSpam: false, // Don't block on error
    };
  }
}

/**
 * Combined anti-spam check
 */
export function performAntiSpamCheck(
  options: {
    honeypotValue?: string;
    submissionStartTimeMs?: number;
    ipAddress?: string;
    config?: AntiSpamConfig;
  } = {},
): AntiSpamResult {
  const config = options.config || {};

  // Check honeypot
  const honeypotCheck = checkHoneypot(options.honeypotValue, config.honeypotFieldName || "website");
  if (honeypotCheck.isSpam) return honeypotCheck;

  // Check submission timing
  if (options.submissionStartTimeMs) {
    const timingCheck = checkSubmissionTiming(options.submissionStartTimeMs, config.minSubmissionTimeSeconds || 3);
    if (timingCheck.isSpam) return timingCheck;
  }

  // Check rate limiting
  if (options.ipAddress) {
    const rateLimitCheck = checkRateLimit(
      options.ipAddress,
      config.maxSubmissionsPerHour || 5,
      config.maxSubmissionsPerDay || 20,
    );
    if (rateLimitCheck.isSpam) return rateLimitCheck;
  }

  return { isSpam: false };
}

/**
 * Clear rate limit for an IP (useful for testing)
 */
export function clearRateLimit(ipAddress: string): void {
  rateLimitStore.delete(ipAddress);
}

/**
 * Get current rate limit status for an IP
 */
export function getRateLimitStatus(ipAddress: string) {
  return rateLimitStore.get(ipAddress) || null;
}
