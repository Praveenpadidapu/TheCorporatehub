import React from "react";
import LegalPage from "@/components/LegalPage";
import CorporateFooter from "@/components/CorporateFooter";

export const metadata = {
  title: "Terms & Conditions | Corporate Hub",
  description: "Read the Terms & Conditions of Corporate Hub governing website access, client responsibilities, advisory scope, fee structure, and legal jurisdiction.",
};

export default function TermsAndConditionsPage() {
  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <LegalPage defaultTab="terms-and-conditions" />
      </div>
      <CorporateFooter />
    </main>
  );
}
