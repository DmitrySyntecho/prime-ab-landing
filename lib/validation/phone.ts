/**
 * Phone Validation Utilities
 * - US/Canada NANP validation
 * - International phone validation using libphonenumber-js
 * - Fake number detection
 * - E.164 formatting
 */

import { parsePhoneNumber, isValidPhoneNumber, isPossiblePhoneNumber } from "libphonenumber-js";

// Fake/fictional phone number patterns to block
const FICTIONAL_PATTERNS = {
  // Consecutive digits: 0123456789, 1234567890, 9876543210
  SEQUENCE: /^0123456789$|^1234567890$|^9876543210$/,
  // All same digit: 1111111111, 5555555555, etc.
  SAME_DIGIT: /^([0-9])\1{9}$/,
  // Pattern repeats: 1231231234, 5555555555, 1112223333, 1234512345
  REPEATING_PATTERN: /^(.{3})(.{3})\1\2/,
  // Fictional 555 range (555-0100 to 555-0199, reserved by FCC)
  // Pattern: 555-01xx where xx can be any digits (5550100-5550199)
  FICTIONAL_555: /^5550[01]\d{2}$/,
};

// NANP area codes that are invalid (start with 0 or 1)
// Exchange codes that are invalid: N11 (211, 311, 411, 511, 611, 711, 811, 911)
const N11_PATTERNS = [211, 311, 411, 511, 611, 711, 811, 911];

export interface PhoneValidationResult {
  isValid: boolean;
  formatted?: string;
  e164?: string;
  error?: string;
}

export interface PhoneValidationOptions {
  country?: string; // ISO 3166-1 alpha-2 code, e.g., "US", "CA", "MX"
  internationalOk?: boolean; // Allow international numbers
}

/**
 * Validate US/Canada NANP phone number
 * Format: (XXX) XXX-XXXX or XXX-XXX-XXXX
 */
export function validateUSPhoneNumber(phone: string): PhoneValidationResult {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, "");

  // Handle leading 1 for US/Canada
  let cleanDigits = digits;
  if (digits.length === 11 && digits[0] === "1") {
    cleanDigits = digits.slice(1);
  }

  // Must be exactly 10 digits after cleanup
  if (cleanDigits.length !== 10) {
    return {
      isValid: false,
      error: "Phone number must have exactly 10 digits",
    };
  }

  // Check for fictional/fake patterns
  if (
    FICTIONAL_PATTERNS.SAME_DIGIT.test(cleanDigits) ||
    FICTIONAL_PATTERNS.SEQUENCE.test(cleanDigits) ||
    FICTIONAL_PATTERNS.REPEATING_PATTERN.test(cleanDigits) ||
    FICTIONAL_PATTERNS.FICTIONAL_555.test(cleanDigits)
  ) {
    return {
      isValid: false,
      error: "This phone number appears to be invalid or fictional",
    };
  }

  const areaCode = parseInt(cleanDigits.slice(0, 3), 10);
  const exchangeCode = parseInt(cleanDigits.slice(3, 6), 10);

  // Area code cannot start with 0 or 1
  if (cleanDigits[0] === "0" || cleanDigits[0] === "1") {
    return {
      isValid: false,
      error: "Area code cannot start with 0 or 1",
    };
  }

  // Exchange code cannot start with 0 or 1
  if (cleanDigits[3] === "0" || cleanDigits[3] === "1") {
    return {
      isValid: false,
      error: "Exchange code cannot start with 0 or 1",
    };
  }

  // Exchange code cannot be N11 (211, 311, etc.)
  if (N11_PATTERNS.includes(exchangeCode)) {
    return {
      isValid: false,
      error: "Exchange code cannot be N11 (211, 311, etc.)",
    };
  }

  // Format as (XXX) XXX-XXXX
  const formatted = `(${cleanDigits.slice(0, 3)}) ${cleanDigits.slice(3, 6)}-${cleanDigits.slice(6)}`;
  const e164 = `+1${cleanDigits}`;

  return {
    isValid: true,
    formatted,
    e164,
  };
}

/**
 * Validate international phone number
 * Uses libphonenumber-js for comprehensive validation
 */
export function validateInternationalPhoneNumber(
  phone: string,
  countryCode?: string,
): PhoneValidationResult {
  try {
    // Parse the phone number
    const parsed = parsePhoneNumber(phone, (countryCode as any) || "US");

    if (!parsed) {
      return {
        isValid: false,
        error: "Invalid phone number format",
      };
    }

    // Additional validation
    if (!isValidPhoneNumber(parsed)) {
      return {
        isValid: false,
        error: "Phone number is not valid for the selected country",
      };
    }

    if (!isPossiblePhoneNumber(parsed)) {
      return {
        isValid: false,
        error: "Phone number format is not possible",
      };
    }

    // Get the national number (without country code)
    const nationalNumber = parsed.nationalNumber.toString();

    // Check for fake patterns (after removing country code)
    if (
      FICTIONAL_PATTERNS.SAME_DIGIT.test(nationalNumber) ||
      FICTIONAL_PATTERNS.SEQUENCE.test(nationalNumber) ||
      FICTIONAL_PATTERNS.REPEATING_PATTERN.test(nationalNumber)
    ) {
      return {
        isValid: false,
        error: "This phone number appears to be invalid or fictional",
      };
    }

    return {
      isValid: true,
      formatted: parsed.formatInternational(),
      e164: parsed.format("E.164"),
    };
  } catch {
    return {
      isValid: false,
      error: "Invalid phone number format",
    };
  }
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string, countryCode: string = "US"): string {
  if (countryCode === "US" || countryCode === "CA") {
    const result = validateUSPhoneNumber(phone);
    return result.formatted || phone;
  }

  const result = validateInternationalPhoneNumber(phone, countryCode);
  return result.formatted || phone;
}

/**
 * Get E.164 format for storage
 */
export function getE164Format(phone: string, countryCode: string = "US"): string | null {
  if (countryCode === "US" || countryCode === "CA") {
    const result = validateUSPhoneNumber(phone);
    return result.e164 || null;
  }

  const result = validateInternationalPhoneNumber(phone, countryCode);
  return result.e164 || null;
}

/**
 * Check if phone is fake/fictional
 */
export function isFictionalPhoneNumber(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  const cleanDigits = digits.length === 11 && digits[0] === "1" ? digits.slice(1) : digits;

  return (
    FICTIONAL_PATTERNS.SAME_DIGIT.test(cleanDigits) ||
    FICTIONAL_PATTERNS.SEQUENCE.test(cleanDigits) ||
    FICTIONAL_PATTERNS.REPEATING_PATTERN.test(cleanDigits) ||
    FICTIONAL_PATTERNS.FICTIONAL_555.test(cleanDigits)
  );
}
