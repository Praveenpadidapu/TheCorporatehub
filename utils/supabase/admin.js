import { createClient } from "@supabase/supabase-js";

// Note: SUPABASE_SERVICE_ROLE_KEY must be in .env.local
// This client bypasses RLS and should only be used server-side in API routes or Server Actions.
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';
  return createClient(
    supabaseUrl,
    serviceKey
  );
}
