/**
 * Email validation test cases
 */

function levenshteinDistance(a, b) {
  const matrix = [];
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

const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com',
  'tempmail.com',
  'guerrillamail.com',
  'foo@mailinator.com'.split('@')[1],
]);

const DOMAIN_TYPOS = {
  'gmial.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'yahooo.com': 'yahoo.com',
  'hotmial.com': 'hotmail.com',
};

const POPULAR_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];
const RFC_5322_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validateEmail(email) {
  email = email.trim().toLowerCase();

  if (!RFC_5322_REGEX.test(email)) {
    return { isValid: false, error: 'Invalid format' };
  }

  const [localPart, domain] = email.split('@');

  if (localPart.length < 2) {
    return { isValid: false, error: 'Local part too short' };
  }

  const domainBase = domain.split('.')[0];
  if (localPart === domainBase) {
    return { isValid: false, error: 'Local part equals domain' };
  }

  if (localPart.length === 1 && domain.length <= 5) {
    return { isValid: false, error: 'Email too short' };
  }

  if (DOMAIN_TYPOS[domain]) {
    return { isValid: false, suggestion: `${localPart}@${DOMAIN_TYPOS[domain]}` };
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { isValid: false, error: 'Disposable domain' };
  }

  return { isValid: true };
}

// Phone validation test
function validateUSPhoneNumber(phone) {
  const digits = phone.replace(/\D/g, '');
  let cleanDigits = digits;
  if (digits.length === 11 && digits[0] === '1') {
    cleanDigits = digits.slice(1);
  }

  if (cleanDigits.length !== 10) {
    return { isValid: false, error: 'Not 10 digits' };
  }

  // Check fake patterns
  const SAME_DIGIT = /^([0-9])\1{9}$/;
  const SEQUENCE = /^0123456789$|^1234567890$|^9876543210$/;
  const REPEATING = /^(.{3})(.{3})\1\2/;
  const FICTIONAL_555 = /^5550[01]\d{2}$/;

  if (SAME_DIGIT.test(cleanDigits) || SEQUENCE.test(cleanDigits) || 
      REPEATING.test(cleanDigits) || FICTIONAL_555.test(cleanDigits)) {
    return { isValid: false, error: 'Fictional pattern' };
  }

  // Area code can't start with 0 or 1
  if (cleanDigits[0] === '0' || cleanDigits[0] === '1') {
    return { isValid: false, error: 'Invalid area code' };
  }

  // Exchange code can't start with 0 or 1
  if (cleanDigits[3] === '0' || cleanDigits[3] === '1') {
    return { isValid: false, error: 'Invalid exchange' };
  }

  // Exchange code can't be N11
  const exchangeCode = parseInt(cleanDigits.slice(3, 6), 10);
  const N11 = [211, 311, 411, 511, 611, 711, 811, 911];
  if (N11.includes(exchangeCode)) {
    return { isValid: false, error: 'N11 exchange' };
  }

  return { isValid: true, formatted: `(${cleanDigits.slice(0, 3)}) ${cleanDigits.slice(3, 6)}-${cleanDigits.slice(6)}` };
}

console.log('=== EMAIL VALIDATION TESTS ===\n');

const rejectEmails = ['test@test.com', 'asdf@asdf.com', 'a@b.c', 'foo@mailinator.com'];
console.log('Should REJECT:');
rejectEmails.forEach(email => {
  const result = validateEmail(email);
  console.log(`  ${email}: ${result.isValid ? '❌ FAIL' : '✓ OK'} ${result.error || ''}`);
});

const acceptEmails = ['john@gmail.com', 'jane@yahoo.com', 'support@company.com'];
console.log('\nShould ACCEPT:');
acceptEmails.forEach(email => {
  const result = validateEmail(email);
  console.log(`  ${email}: ${result.isValid ? '✓ OK' : '❌ FAIL'}`);
});

console.log('\n=== PHONE VALIDATION TESTS (US) ===\n');

const rejectPhones = ['1234567890', '0000000000', '5555550100', '5555555555', '9111111111', '1112223333'];
console.log('Should REJECT:');
rejectPhones.forEach(phone => {
  const result = validateUSPhoneNumber(phone);
  console.log(`  ${phone}: ${result.isValid ? '❌ FAIL' : '✓ OK'} ${result.error || ''}`);
});

const acceptPhones = ['7869338488', '(786) 933-8488', '786-933-8488', '+17869338488'];
console.log('\nShould ACCEPT:');
acceptPhones.forEach(phone => {
  const result = validateUSPhoneNumber(phone);
  console.log(`  ${phone}: ${result.isValid ? '✓ OK' : '❌ FAIL'} ${result.formatted || ''}`);
});

console.log('\n=== TESTS COMPLETE ===');
