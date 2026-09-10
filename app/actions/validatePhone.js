"use server";

/**
 * Validates a phone number using the Numverify API + spam pattern detection.
 * Returns { valid, carrier, lineType, reason, error }
 */
export async function validatePhoneNumber(phone) {
  // Strip formatting characters, keep digits and leading +
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");

  // --- Layer 1: Pattern-based spam detection (no API call needed) ---
  const digitsOnly = cleaned.replace(/\D/g, "");
  // Get the last 10 digits (the actual local number without country code)
  const localDigits = digitsOnly.slice(-10);

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

  // --- Layer 2: Numverify API validation ---
  const apiKey = process.env.NUMVERIFY_API_KEY;

  if (!apiKey) {
    console.warn("NUMVERIFY_API_KEY is not set — skipping API validation.");
    return { valid: true, skipped: true };
  }

  try {
    // Numverify free tier is HTTP-only; paid plans support HTTPS.
    const url = new URL("http://apilayer.net/api/validate");
    url.searchParams.set("access_key", apiKey);
    url.searchParams.set("number", cleaned);
    url.searchParams.set("country_code", "IN");

    const res = await fetch(url.toString(), {
      method: "GET",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(`Numverify API returned HTTP ${res.status}`);
      return { valid: true, skipped: true, reason: "api_http_error" };
    }

    const data = await res.json();

    // Handle Numverify-level errors (e.g. invalid API key, quota exceeded)
    if (data.error) {
      console.error("Numverify API error:", data.error.info || data.error);
      return { valid: true, skipped: true, reason: "api_error" };
    }

    // If Numverify says invalid format, reject immediately
    if (data.valid !== true) {
      return { valid: false, reason: "Number format not recognized." };
    }

    // Stricter checks using Numverify response data:
    // Real Indian mobile numbers always have a carrier assigned
    if (!data.carrier || data.carrier.trim() === "") {
      return {
        valid: false,
        reason: "No carrier found for this number.",
        lineType: data.line_type || null,
      };
    }

    // All checks passed — this is a valid number with a real carrier
    return {
      valid: true,
      carrier: data.carrier,
      lineType: data.line_type,
      country: data.country_name || null,
      location: data.location || null,
    };
  } catch (err) {
    console.error("Numverify fetch failed:", err.message);
    // Network error / timeout — don't block the user
    return { valid: true, skipped: true, reason: "fetch_error" };
  }
}
