import React from "react";
import SeoContactModalTrigger from "./SeoContactModalTrigger";
import { FiPhoneCall, FiCheckCircle } from "react-icons/fi";

export default function FinalCtaSection({ serviceName, cityName, citySlug, serviceSlug }) {
  return (
    <section className="seo-section-wrapper" style={{ marginTop: "60px", marginBottom: "40px" }}>
      <div
        className="seo-content-box"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          color: "#ffffff",
          textAlign: "center",
          padding: "48px 24px",
          borderRadius: "16px"
        }}
      >
        <span
          style={{
            background: "rgba(255, 96, 0, 0.2)",
            color: "#ff6000",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.5px",
            textTransform: "uppercase"
          }}
        >
          Get Started Today
        </span>

        <h2 style={{ color: "#ffffff", fontSize: "2rem", marginTop: "16px", marginBottom: "16px" }}>
          Ready for {serviceName} in {cityName}?
        </h2>

        <p style={{ color: "#94a3b8", maxWidth: "680px", margin: "0 auto 28px", fontSize: "1.05rem", lineHeight: "1.6" }}>
          Talk to our corporate legal experts & chartered accountants for personalized step-by-step guidance in {cityName}. 100% online, paperless filing with guaranteed transparent service.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
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
