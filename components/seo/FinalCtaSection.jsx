import React from "react";
import SeoContactModalTrigger from "./SeoContactModalTrigger";

export default function FinalCtaSection({ serviceName, cityName, citySlug, serviceSlug }) {
  return (
    <section className="seo-section-wrapper" style={{ marginTop: "40px", marginBottom: "40px" }}>
      <div
        className="seo-content-box"
        style={{
          background: "#ffffff",
          color: "#0f172a",
          textAlign: "center",
          padding: "40px 24px",
          borderRadius: "4px",
          border: "1.5px solid #112344"
        }}
      >
        <span className="seo-section-tag">
          Get Started Today
        </span>

        <h2 style={{ color: "#193563", fontSize: "1.85rem", fontWeight: 800, marginTop: "12px", marginBottom: "14px" }}>
          Ready for {serviceName} in {cityName}?
        </h2>

        <p style={{ color: "#475569", maxWidth: "680px", margin: "0 auto 24px", fontSize: "1rem", lineHeight: "1.6" }}>
          Talk to our corporate legal experts & chartered accountants for personalized step-by-step guidance in {cityName}. 100% online, paperless filing with guaranteed transparent service.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", maxWidth: "340px", margin: "0 auto" }}>
          <SeoContactModalTrigger
            cityName={cityName}
            serviceName={serviceName}
            citySlug={citySlug}
            serviceSlug={serviceSlug}
          />
        </div>
      </div>
    </section>
  );
}
