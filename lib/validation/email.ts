/**
 * Email Validation Utilities
 * - RFC 5322 regex validation
 * - Block obvious garbage emails (test@test.com, a@b.c, etc.)
 * - Typo correction suggestions using Levenshtein distance
 * - Disposable domain detection
 * - Source: https://github.com/disposable/disposable-email-domains (updated quarterly)
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
  "mailnesia.com",
  "temp-mail.io",
  "tempm.com",
  "mailtest.info",
]);

// Popular email domains for typo correction
const POPULAR_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "zoho.com",
];

// Common domain typos and corrections (exact matches)
const DOMAIN_TYPOS: Record<string, string> = {
  // Gmail variations
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gnail.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmai.co": "gmail.com",
  "gmil.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.co": "gmail.com",

  // Yahoo variations
  "yahooo.com": "yahoo.com",
  "yaho.com": "yahoo.com",
  "yahho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yahoo.co": "yahoo.com",

  // Hotmail variations
  "hotmial.com": "hotmail.com",
  "hotnail.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "hotmil.com": "hotmail.com",

  // Outlook variations
  "outlok.com": "outlook.com",
  "outloook.com": "outlook.com",
  "outlook.co": "outlook.com",
  "outloo.com": "outlook.com",

  // iCloud variations
  "icluod.com": "icloud.com",
  "icloud.co": "icloud.com",
  "iclod.com": "icloud.com",
};

/**
 * Calculate Levenshtein distance between two strings
 * Used for typo correction when exact match not found
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Find best matching domain suggestion using Levenshtein distance
 * Returns suggestion if distance <= 2 (typos are usually 1-2 character changes)
 */
function findDomainSuggestion(domain: string): string | null {
  let bestMatch: string | null = null;
  let bestDistance = 3; // Only suggest if distance <= 2

  for (const popularDomain of POPULAR_DOMAINS) {
    const distance = levenshteinDistance(domain, popularDomain);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestMatch = popularDomain;
    }
  }

  return bestMatch;
}

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
 * Checks: RFC 5322 format, garbage patterns, typos, disposable domains
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

  // 3. Block obvious garbage (local part = domain name)
  // Examples: test@test.com, asdf@asdf.com, xyz@xyz.com
  const domainBase = domain.split(".")[0];
  if (localPart === domainBase) {
    return {
      isValid: false,
      error: "This email address looks incomplete or invalid",
    };
  }

  // 4. Block very short garbage emails (a@b.c)
  if (localPart.length === 1 && domain.length <= 5) {
    return {
      isValid: false,
      error: "Email address is too short or invalid",
    };
  }

  // 5. Check for exact typos in domain
  if (DOMAIN_TYPOS[domain]) {
    return {
      isValid: false,
      error: "Did you mean to use a different email provider?",
      suggestion: `${localPart}@${DOMAIN_TYPOS[domain]}`,
    };
  }

  // 6. Check for fuzzy typos using Levenshtein distance
  const fuzzySuggestion = findDomainSuggestion(domain);
  if (fuzzySuggestion && fuzzySuggestion !== domain) {
    // Only suggest if confidence is high (distance <= 2)
    const distance = levenshteinDistance(domain, fuzzySuggestion);
    if (distance <= 2) {
      return {
        isValid: false,
        error: "Did you mean to use a different email provider?",
        suggestion: `${localPart}@${fuzzySuggestion}`,
      };
    }
  }

  // 7. Block disposable/temporary domains
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
