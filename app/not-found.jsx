import React from "react";
import NotFoundPage from "@/components/NotFoundPage";
import CorporateFooter from "@/components/CorporateFooter";

export const metadata = {
  title: "404 - Page Not Found | Corporate Hub",
  description: "The page you are looking for does not exist or has been moved. Explore Corporate Hub's business registration, taxation, legal compliance, and IP services.",
};

export default function NotFound() {
  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <NotFoundPage />
      </div>
      <CorporateFooter />
    </main>
  );
}
