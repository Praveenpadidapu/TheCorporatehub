"use server";

/**
 * Validates an Indian phone number using basic constraints:
 * - Must be exactly 10 digits (after stripping optional +91 or 0 prefix)
 * - Must start with 6-9
 * - Rejects common spam/fake patterns (all-same, sequential, alternating, etc.)
 *
 * Returns { valid, reason }
 */
export async function validatePhoneNumber(phone) {
  // Strip formatting characters, keep digits and leading +
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");

  // Extract digits only
  const digitsOnly = cleaned.replace(/\D/g, "");

  // Determine the 10-digit local number
  // Supports: +91XXXXXXXXXX, 91XXXXXXXXXX, 0XXXXXXXXXX, XXXXXXXXXX
  let localDigits;
  if (digitsOnly.length === 12 && digitsOnly.startsWith("91")) {
    localDigits = digitsOnly.slice(2);
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith("0")) {
    localDigits = digitsOnly.slice(1);
  } else if (digitsOnly.length === 10) {
    localDigits = digitsOnly;
  } else {
    return {
      valid: false,
      reason: "Phone number must be exactly 10 digits.",
    };
  }

  // Must start with 6, 7, 8, or 9 (valid Indian mobile prefixes)
  if (!/^[6-9]/.test(localDigits)) {
    return {
      valid: false,
      reason: "Indian mobile numbers must start with 6, 7, 8, or 9.",
    };
  }

  // --- Spam / fake pattern detection ---

  // Block all-same digits: 9999999999, 8888888888, etc.
  if (/^(\d)\1{9}$/.test(localDigits)) {
    return { valid: false, reason: "Repeated digit pattern detected." };
  }

  // Block sequential ascending: 6789012345, 7890123456, etc.
  const ascending = "01234567890123456789";
  const descending = "98765432109876543210";
  if (ascending.includes(localDigits) || descending.includes(localDigits)) {
    return { valid: false, reason: "Sequential number pattern detected." };
  }

  // Block simple alternating patterns: 7272727272, 9898989898, etc.
  if (/^(\d{1,2})\1{4,}$/.test(localDigits)) {
    return { valid: false, reason: "Alternating/repeating pattern detected." };
  }

  // Block numbers with same digit appearing 7+ times (e.g. 9999999123)
  const digitCounts = {};
  for (const d of localDigits) {
    digitCounts[d] = (digitCounts[d] || 0) + 1;
  }
  if (Object.values(digitCounts).some((count) => count >= 7)) {
    return { valid: false, reason: "Too many repeated digits." };
  }

  // All checks passed
  return { valid: true };
}
