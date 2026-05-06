/**
 * Email Validation Utilities
 * - RFC 5322 regex validation
 * - Block obvious garbage emails
 * - Typo correction suggestions
 * - Disposable domain detection
 */

// List of common disposable/temporary email domains
// Update quarterly: https://github.com/disposable/disposable-email-domains
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "guerrillamail.com",
  "throwaway.email",
  "10minutemail.com",
  "fakeinbox.com",
  "sharklasers.com",
  "spam4.me",
  "temp-mail.org",
  "yopmail.com",
  "maildrop.cc",
  "mytrashmail.com",
  "trashmail.com",
  "testmail.io",
  "tempmail.io",
  "dispostable.com",
  "mailnesia.com",
  "nada.link",
  "trash-mail.com",
  "email.ml",
]);

// Common domain typos and corrections
const DOMAIN_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gnail.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmai.co": "gmail.com",

  "yahooo.com": "yahoo.com",
  "yaho.com": "yahoo.com",
  "yahho.com": "yahoo.com",

  "hotmial.com": "hotmail.com",
  "hotnail.com": "hotmail.com",
  "hotmai.com": "hotmail.com",

  "outlok.com": "outlook.com",
  "outloook.com": "outlook.com",

  "icluod.com": "icloud.com",
};

// RFC 5322 simplified regex (practical validation)
const RFC_5322_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export interface EmailValidationResult {
  isValid: boolean;
  error?: string;
  suggestion?: string;
}

/**
 * Validate email address
 */
export function validateEmail(email: string): EmailValidationResult {
  email = email.trim().toLowerCase();

  // 1. Basic RFC 5322 validation
  if (!RFC_5322_REGEX.test(email)) {
    return {
      isValid: false,
      error: "Invalid email format",
    };
  }

  const [localPart, domain] = email.split("@");

  // 2. Local part must be at least 2 characters
  if (localPart.length < 2) {
    return {
      isValid: false,
      error: "Local part must be at least 2 characters",
    };
  }

  // 3. Block obvious garbage (local part = domain)
  if (localPart === domain.replace(/\.[a-z]{2,}$/, "")) {
    return {
      isValid: false,
      error: "Local part cannot equal domain name",
    };
  }

  // 4. Check for typos in domain
  if (DOMAIN_TYPOS[domain]) {
    return {
      isValid: false,
      error: "Did you mean to use a different email provider?",
      suggestion: `${localPart}@${DOMAIN_TYPOS[domain]}`,
    };
  }

  // 5. Block disposable/temporary domains
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      isValid: false,
      error: "Temporary/disposable email addresses are not allowed",
    };
  }

  return { isValid: true };
}

/**
 * Check if domain is disposable
 */
export function isDisposableDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? DISPOSABLE_DOMAINS.has(domain) : false;
}

/**
 * Get domain typo suggestion
 */
export function getDomainSuggestion(email: string): string | null {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain && DOMAIN_TYPOS[domain] ? DOMAIN_TYPOS[domain] : null;
}
