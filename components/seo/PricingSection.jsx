import React from "react";
import { FiDollarSign, FiClock } from "react-icons/fi";

export default function PricingSection({ pricingText, timelineText, cityName, serviceName }) {
  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Pricing & Timeline</span>
        <h2 className="seo-section-title">Investment & Delivery for {serviceName} in {cityName}</h2>
      </div>

      <div className="seo-grid-2">
        <div className="seo-info-card">
          <div className="seo-card-icon">
            <FiDollarSign />
          </div>
          <h4>Transparent Pricing</h4>
          <p>{pricingText || "Contact our team for a customized transparent fee structure."}</p>
        </div>

        <div className="seo-info-card">
          <div className="seo-card-icon">
            <FiClock />
          </div>
          <h4>Estimated Timeline</h4>
          <p>{timelineText || "5 to 7 Business Days upon document submission."}</p>
        </div>
      </div>
    </section>
  );
}
