import React, { Suspense } from "react";
import ContactPage from "@/components/ContactPage";
import CorporateFooter from "@/components/CorporateFooter";
import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "Contact Us | Corporate Hub",
  description: "Get in touch with Corporate Hub legal, tax, and business registration specialists. Request a consultation or inquiry today.",
};

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let profile = null;
  if (user) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    profile = data;
  }

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <Suspense fallback={<div style={{ padding: "40px", textAlign: "center" }}>Loading Contact Form...</div>}>
          <ContactPage user={user} profile={profile} />
        </Suspense>
      </div>
      <CorporateFooter />
    </main>
  );
}

