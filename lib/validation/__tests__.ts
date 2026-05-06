/**
 * Validation Test Cases
 * Ensures all acceptance criteria are met
 */

import { validateEmail } from './email'
import { validateUSPhoneNumber, validateInternationalPhoneNumber } from './phone'

console.log('=== EMAIL VALIDATION TESTS ===')

// SHOULD REJECT
const rejectEmails = [
  'test@test.com',
  'asdf@asdf.com',
  'a@b.c',
  'foo@mailinator.com',
  'x@test.io',
  'admin@admin.com',
]

console.log('\nShould REJECT:')
rejectEmails.forEach(email => {
  const result = validateEmail(email)
  console.log(`  ${email}: ${result.isValid ? '❌ FAILED (accepted)' : '✓ REJECTED'}`, result.error)
})

// SHOULD ACCEPT
const acceptEmails = [
  'john.doe@gmail.com',
  'jane@yahoo.com',
  'support@company.com',
  'info@example.co.uk',
  'user123@outlook.com',
]

console.log('\nShould ACCEPT:')
acceptEmails.forEach(email => {
  const result = validateEmail(email)
  console.log(`  ${email}: ${result.isValid ? '✓ ACCEPTED' : '❌ FAILED (rejected)'}`)
})

// SHOULD SUGGEST CORRECTION
const suggestEmails = [
  'john@gmial.com',
  'jane@yahooo.com',
  'user@hotmial.com',
]

console.log('\nShould SUGGEST correction:')
suggestEmails.forEach(email => {
  const result = validateEmail(email)
  console.log(`  ${email}: suggestion="${result.suggestion || 'none'}"`)
})

console.log('\n=== PHONE VALIDATION TESTS (US) ===')

// SHOULD REJECT
const rejectPhones = [
  '1234567890',  // Sequential
  '0000000000',  // All zeros
  '5555550100',  // Fictional 555-01xx
  '5555555555',  // All fives
  '9111111111',  // N11 exchange (911)
  '1112223333',  // Repeating pattern
]

console.log('\nShould REJECT:')
rejectPhones.forEach(phone => {
  const result = validateUSPhoneNumber(phone)
  console.log(`  ${phone}: ${result.isValid ? '❌ FAILED (accepted)' : '✓ REJECTED'}`, result.error)
})

// SHOULD ACCEPT
const acceptPhones = [
  '(786) 933-8488',
  '7869338488',
  '786-933-8488',
  '+17869338488',
]

console.log('\nShould ACCEPT:')
acceptPhones.forEach(phone => {
  const result = validateUSPhoneNumber(phone)
  console.log(`  ${phone}: ${result.isValid ? '✓ ACCEPTED' : '❌ FAILED (rejected)'}`, result.error)
})

console.log('\n=== TEST COMPLETE ===')
