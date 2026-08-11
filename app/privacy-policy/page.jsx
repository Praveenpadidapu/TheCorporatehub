import React from "react";
import LegalPage from "@/components/LegalPage";
import CorporateFooter from "@/components/CorporateFooter";

export const metadata = {
  title: "Privacy Policy | Corporate Hub",
  description: "Read the Privacy Policy of Corporate Hub. Learn how personal and business information is collected, processed, protected, and stored under Indian law.",
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <LegalPage defaultTab="privacy-policy" />
      </div>
      <CorporateFooter />
    </main>
  );
}
