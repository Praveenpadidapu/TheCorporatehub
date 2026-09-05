import React from "react";
import { FiCheckCircle, FiUsers, FiHelpCircle, FiFileText } from "react-icons/fi";

export default function ServiceOverview({
  serviceName,
  cityName,
  whatIsService,
  whoShouldChoose,
  keyBenefits,
  eligibility,
  whyChooseService
}) {
  const mainExplanation = whatIsService || whyChooseService;

  if (!mainExplanation && !whoShouldChoose && !keyBenefits && !eligibility) return null;

  return (
    <div className="seo-overview-wrapper">
      {/* 3. What Is the Service? */}
      {mainExplanation && (
        <section className="seo-section-wrapper">
          <div className="seo-section-header">
            <span className="seo-section-tag">Service Overview</span>
            <h2 className="seo-section-title">What is {serviceName} in {cityName}?</h2>
          </div>
          <div className="seo-content-box">
            <p style={{ lineHeight: "1.7", color: "#334155", whiteSpace: "pre-line" }}>{mainExplanation}</p>
          </div>
        </section>
      )}

      {/* 4. Who Should Choose This? */}
      {whoShouldChoose && (
        <section className="seo-section-wrapper">
          <div className="seo-section-header">
            <span className="seo-section-tag">Target Audience</span>
            <h2 className="seo-section-title">Who Should Choose {serviceName}?</h2>
          </div>
          <div className="seo-content-box" style={{ borderLeft: "4px solid #3b82f6" }}>
            <p style={{ lineHeight: "1.7", color: "#334155", whiteSpace: "pre-line" }}>{whoShouldChoose}</p>
          </div>
        </section>
      )}

      {/* 5. Key Benefits */}
      {keyBenefits && (
        <section className="seo-section-wrapper">
          <div className="seo-section-header">
            <span className="seo-section-tag">Advantages</span>
            <h2 className="seo-section-title">Key Benefits of {serviceName} in {cityName}</h2>
          </div>
          <div className="seo-content-box" style={{ borderLeft: "4px solid #10b981" }}>
            <p style={{ lineHeight: "1.7", color: "#334155", whiteSpace: "pre-line" }}>{keyBenefits}</p>
          </div>
        </section>
      )}

      {/* 6. Eligibility / Requirements */}
      {eligibility && (
        <section className="seo-section-wrapper">
          <div className="seo-section-header">
            <span className="seo-section-tag">Prerequisites</span>
            <h2 className="seo-section-title">Eligibility & Basic Requirements in {cityName}</h2>
          </div>
          <div className="seo-content-box" style={{ borderLeft: "4px solid #f59e0b" }}>
            <p style={{ lineHeight: "1.7", color: "#334155", whiteSpace: "pre-line" }}>{eligibility}</p>
          </div>
        </section>
      )}
    </div>
  );
}
