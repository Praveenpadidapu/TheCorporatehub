"use server";

import { headers } from "next/headers";
import { createAdminClient } from "@/utils/supabase/admin";

export async function submitContactForm(formData) {
  try {
    // In Next.js 15, headers() returns a promise. In Next.js 14, it returns an object.
    // Using await works safely for both versions.
    const headersList = await headers();
    
    // Vercel / standard forwarded headers
    let ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";

    // Convert comma separated list to first IP if multiple
    const clientIp = ip.split(",")[0].trim();

    if (clientIp === "unknown") {
      console.warn("Could not determine client IP address.");
    } else {
      const supabase = createAdminClient();

      // Check last 1 minute
      const oneMinuteAgo = new Date(Date.now() - 60 * 1000).toISOString();
      const { data: recentSubmissions, error: minError } = await supabase
        .from("contact_submissions")
        .select("id")
        .eq("ip_address", clientIp)
        .gte("created_at", oneMinuteAgo);

      if (minError) throw minError;
      
      if (recentSubmissions && recentSubmissions.length > 0) {
        return { error: "Please wait 1 minute before submitting another message." };
      }

      // Check last 24 hours
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const { data: dailySubmissions, error: dailyError } = await supabase
        .from("contact_submissions")
        .select("id")
        .eq("ip_address", clientIp)
        .gte("created_at", twentyFourHoursAgo);

      if (dailyError) throw dailyError;

      if (dailySubmissions && dailySubmissions.length >= 5) {
        return { error: "You have reached the maximum number of submissions for today (5). Please try again tomorrow." };
      }
    }

    // Insert record
    const supabaseAdmin = createAdminClient();
    const { error: insertError } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        subject: formData.subject,
        message: formData.message,
        ip_address: clientIp
      });

    if (insertError) {
      console.error("Supabase insert error:", insertError.message);
      return { error: "Failed to submit your message. Please try again." };
    }

    return { success: true };

  } catch (err) {
    console.error("Action error:", err);
    return { error: "Something went wrong while sending your message. Please try again." };
  }
}
