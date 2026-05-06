# Form Validation Rules Documentation

This document outlines the comprehensive validation rules implemented for the quote forms.

## Overview

The validation system includes:
1. **Email Validation** - RFC 5322, typo correction, disposable domain detection
2. **Phone Validation** - US/Canada NANP + International (libphonenumber-js)
3. **Anti-Spam Protection** - Honeypot, rate limiting, submission timing, bot detection

---

## Email Validation (`lib/validation/email.ts`)

### Rules

#### 1. RFC 5322 Format Validation
- Ensures email matches standard email format
- Pattern: `local@domain.extension`
- Local part can contain: letters, numbers, `.`, `!`, `#`, `$`, `%`, `&`, `'`, `*`, `+`, `/`, `=`, `?`, `^`, `` ` ``, `{`, `|`, `}`, `~`, `-`

#### 2. Local Part Requirements
- **Minimum length:** 2 characters
- **Blocked pattern:** Local part cannot equal domain name (e.g., `xyz@xyz.com` is rejected)

#### 3. Domain Typo Correction
Auto-detects and suggests corrections for common misspellings:
- Gmail: `gmial.com` → `gmail.com`, `gmai.com` → `gmail.com`, `gmail.co` → `gmail.com`
- Yahoo: `yahooo.com` → `yahoo.com`, `yaho.com` → `yahoo.com`
- Hotmail: `hotmial.com` → `hotmail.com`, `hotnail.com` → `hotmail.com`
- Outlook: `outlok.com` → `outlook.com`, `outloook.com` → `outlook.com`
- iCloud: `icluod.com` → `icloud.com`

When a typo is detected, users see a suggestion button: "Did you mean?" with the corrected email.

#### 4. Disposable Domain Blocking
Rejects temporary/disposable email services:
- mailinator.com, tempmail.com, guerrillamail.com, throwaway.email, 10minutemail.com
- fakeinbox.com, sharklasers.com, spam4.me, temp-mail.org, yopmail.com
- Plus 10+ others

**Rationale:** Prevents spam and ensures valid, real email addresses

#### 5. MX Record Check (Server-side, optional)
Can be implemented on server to verify the domain has valid mail servers.

### Error Messages

```
"Invalid email format"                          // RFC 5322 fail
"Local part must be at least 2 characters"      // Too short
"Local part cannot equal domain name"           // Obvious garbage
"Did you mean to use a different email provider?" // Typo detected
"Temporary/disposable email addresses not allowed" // Disposable domain
```

### Usage

```typescript
import { validateEmail, getDomainSuggestion, isDisposableDomain } from "@/lib/validation/email"

// Basic validation
const result = validateEmail("user@gmail.com")
if (!result.isValid) {
  console.error(result.error)
  if (result.suggestion) {
    console.log("Suggested:", result.suggestion)
  }
}

// Check specific properties
const isBad = isDisposableDomain("user@mailinator.com") // true
const corrected = getDomainSuggestion("user@gmial.com") // "gmail.com"
```

---

## Phone Validation (`lib/validation/phone.ts`)

### US/Canada NANP Validation

#### Rules

1. **Digit Requirements**
   - Exactly 10 digits after cleanup
   - Can start with optional "+1" or "1"
   - All non-digits are stripped

2. **Area Code (first 3 digits)**
   - Cannot start with 0 or 1
   - Valid range: 2-9

3. **Exchange Code (digits 4-6)**
   - Cannot start with 0 or 1
   - Cannot be N11: 211, 311, 411, 511, 611, 711, 811, 911
   - Valid range: 2-9 for first digit

4. **Line Number (digits 7-10)**
   - No restrictions

#### Fake/Fictional Number Detection

Blocks:
- **All same digits:** 0000000000, 1111111111, 5555555555
- **Sequential:** 0123456789, 1234567890, 9876543210
- **Repeating patterns:** 1231231234, 5555555555, 1112223333, 1234512345
- **Fictional 555:** 555-0100 to 555-0199 (FCC reserved)

#### Output Formats

```typescript
// Display format
(555) 555-1234

// Storage format (E.164)
+15555551234
```

### International Phone Validation

Uses **libphonenumber-js** for comprehensive validation:
- Supports 200+ countries/regions
- Validates number format for specific country
- Checks digit count ranges per country
- Handles country codes (e.g., +44, +33, +1)

#### Usage

```typescript
import { validateUSPhoneNumber, validateInternationalPhoneNumber, formatPhoneNumber, getE164Format } from "@/lib/validation/phone"

// US validation
const usResult = validateUSPhoneNumber("(555) 555-1234")
if (usResult.isValid) {
  console.log(usResult.formatted)  // "(555) 555-1234"
  console.log(usResult.e164)       // "+15555551234"
}

// International validation
const intResult = validateInternationalPhoneNumber("+33123456789", "FR")
if (intResult.isValid) {
  console.log(intResult.formatted) // "+33 1 23 45 67 89"
  console.log(intResult.e164)      // "+33123456789"
}

// Fake number detection
import { isFictionalPhoneNumber } from "@/lib/validation/phone"
isFictionalPhoneNumber("555-1234")    // true
isFictionalPhoneNumber("555-0100")    // true
isFictionalPhoneNumber("555-0200")    // false
```

### Error Messages

```
"Phone number must have exactly 10 digits"                    // Wrong length
"Area code cannot start with 0 or 1"                         // Invalid area code
"Exchange code cannot start with 0 or 1"                     // Invalid exchange
"Exchange code cannot be N11 (211, 311, etc.)"               // N11 pattern
"This phone number appears to be invalid or fictional"       // Fake pattern
"Phone number is not valid for the selected country"         // International fail
"Phone number format is not possible"                        // Invalid format
```

---

## Anti-Spam Protection (`lib/validation/anti-spam.ts`)

### 1. Honeypot Field

**Purpose:** Catch automated bots that fill all fields

**Implementation:**
- Hidden HTML input field (typically `website` or `company_website`)
- Display: `display: none` or off-screen
- Bots auto-fill; humans don't see/fill it
- If filled, silently reject submission

```typescript
import { checkHoneypot } from "@/lib/validation/anti-spam"

const result = checkHoneypot(honeypotValue)
if (result.isSpam) {
  // Silently reject or log for analysis
  return
}
```

### 2. Submission Timing Check

**Purpose:** Block instant form submissions (humans take time to fill forms)

**Rules:**
- Minimum 3 seconds from form display to submission
- Detects bot patterns that fill & submit instantly

**Error Message:**
```
"Submission was too fast. Please take your time."
```

```typescript
import { checkSubmissionTiming } from "@/lib/validation/anti-spam"

const result = checkSubmissionTiming(formStartTimeMs, 3)
if (result.isSpam) {
  console.warn(result.reason)
}
```

### 3. Rate Limiting (By IP Address)

**Purpose:** Prevent spam floods from single IP

**Default Limits:**
- **5 submissions per hour**
- **20 submissions per day**

**Storage:** In-memory store (production: use Redis)

**Reset:** Automatic after time window expires

```typescript
import { checkRateLimit, getRateLimitStatus, clearRateLimit } from "@/lib/validation/anti-spam"

// Check rate limit
const result = checkRateLimit(clientIpAddress, 5, 20)
if (result.isSpam) {
  console.warn("Rate limited:", result.reason)
}

// Get current status
const status = getRateLimitStatus(ipAddress)
console.log(status?.hourCount, status?.dayCount)

// Clear for testing
clearRateLimit(ipAddress)
```

### 4. reCAPTCHA v3 Integration (Optional)

**Purpose:** Detect bot behavior based on user interaction patterns

**Score:** 0.0 (likely bot) to 1.0 (likely human)
- Default threshold: 0.5
- Configurable per form

```typescript
import { verifyRecaptchaV3 } from "@/lib/validation/anti-spam"

// Call from server action
const result = await verifyRecaptchaV3(token, secretKey, 0.5)
if (result.isSpam) {
  return { error: "Verification failed" }
}
```

### 5. hCaptcha Integration (Optional, Privacy-Focused)

**Purpose:** Privacy-respecting bot detection (no Google tracking)

```typescript
import { verifyHCaptcha } from "@/lib/validation/anti-spam"

const result = await verifyHCaptcha(token, secretKey)
if (result.isSpam) {
  return { error: "Verification failed" }
}
```

### Combined Anti-Spam Check

```typescript
import { performAntiSpamCheck } from "@/lib/validation/anti-spam"

const result = performAntiSpamCheck({
  honeypotValue: formData.website,
  submissionStartTimeMs: startTime,
  ipAddress: clientIp,
  config: {
    maxSubmissionsPerHour: 5,
    maxSubmissionsPerDay: 20,
    minSubmissionTimeSeconds: 3,
  }
})

if (result.isSpam) {
  console.warn("Spam detected:", result.reason)
  return
}
```

---

## Acceptance Criteria (Testing)

### Emails to REJECT ✗
```
test@test.com                           // local part = domain
asdf@asdf.com                          // local part = domain
a@b.c                                  // local part < 2 chars
foo@mailinator.com                     // disposable domain
user@gmial.com                         // should suggest gmail.com
```

### Emails to ACCEPT ✓
```
jane@company.com                       // valid
john.doe@example.com                   // dots allowed
user+tag@domain.com                    // plus addressing
```

### Phone Numbers to REJECT ✗
```
1234567890                             // sequential digits
0000000000                             // all same digit
5555550100                             // fictional 555-01xx
5555555555                             // all 5s
9111111111                             // starts with 9 (invalid area code), all 1s
1112223333                             // repeating pattern 111-222-3333
(011) 234-5678                         // area code starts with 0
(555) 011-1234                         // exchange starts with 0
(555) 911-1234                         // exchange is N11
```

### Phone Numbers to ACCEPT ✓
```
(555) 234-5678                         // valid format
555-234-5678                           // dashes
5552345678                             // no formatting
+1 (555) 234-5678                      // with country code
+33123456789                           // international
```

---

## Implementation in Components

### Quote Form
- Email validation on Step 5
- Phone validation on Step 4 (US + WhatsApp)
- Email typo suggestions with clickable button
- Inline error messages with red highlighting
- Timing check before final submission

### Service Quote Form
- Validates phone/email on confirmation step
- Inline error display
- Timing check before submission
- Supports customizable questions

---

## Database Storage

### Email
- Store as-is, lowercase
- Max 100 characters

### Phone
- Store in **E.164 format** for consistency
- Example: `+15555551234`
- Enables international querying and SMS integration

### Honeypot
- Hidden field, don't store
- Log rejections for analysis

---

## Best Practices

1. **Always validate server-side** — Client-side validation is for UX, not security
2. **Use E.164 for storage** — Enables portability and international support
3. **Show helpful suggestions** — Typo correction improves conversion rates
4. **Rate limit by IP** — Use production Redis, not in-memory
5. **Log spam attempts** — Helps detect patterns and improve rules
6. **Use honeypot sparingly** — More than one field flags bots
7. **Timing checks are subtle** — 3 seconds is reasonable for forms
8. **Consider GDPR/privacy** — Use hCaptcha instead of reCAPTCHA in EU

---

## Related Files

- Email validation: `/lib/validation/email.ts`
- Phone validation: `/lib/validation/phone.ts`
- Anti-spam: `/lib/validation/anti-spam.ts`
- Quote form: `/components/quote-form.tsx`
- Service form: `/components/service-quote-form.tsx`
