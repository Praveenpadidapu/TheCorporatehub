import React from "react";
import LegalPage from "@/components/LegalPage";
import CorporateFooter from "@/components/CorporateFooter";

export const metadata = {
  title: "Refund & Cancellation Policy | Corporate Hub",
  description: "Read the Refund, Cancellation & Professional Disclaimer Policy of Corporate Hub governing professional fees, non-guarantee terms, and refund processing.",
};

export default function RefundPolicyPage() {
  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <LegalPage defaultTab="refund-policy" />
      </div>
      <CorporateFooter />
    </main>
  );
}
