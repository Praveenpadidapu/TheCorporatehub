import React from "react";
import ContactPage from "@/components/ContactPage";
import CorporateFooter from "@/components/CorporateFooter";

export const metadata = {
  title: "Contact Us | Corporate Hub",
  description: "Get in touch with Corporate Hub legal, tax, and business registration specialists. Request a consultation or inquiry today.",
};

export default function Page() {
  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <ContactPage />
      </div>
      <CorporateFooter />
    </main>
  );
}
