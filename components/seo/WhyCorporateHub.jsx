import React from "react";
import { FiShield, FiAward, FiCheckCircle } from "react-icons/fi";

export default function WhyCorporateHub({ whyCorporateHub, cityName }) {
  return (
    <section className="seo-section-wrapper">
      <div className="seo-section-header">
        <span className="seo-section-tag">Why Corporate Hub</span>
        <h2 className="seo-section-title">Trusted Legal & Compliance Partner in {cityName}</h2>
      </div>

      <div className="seo-grid-3">
        <div className="seo-info-card">
          <div className="seo-card-icon">
            <FiShield />
          </div>
          <h4>100% Online & Secure</h4>
          <p>No physical visits required. Complete your filing from anywhere in {cityName} with digital signature encryption.</p>
        </div>

        <div className="seo-info-card">
          <div className="seo-card-icon">
            <FiCheckCircle />
          </div>
          <h4>Dedicated CA & Legal Specialist</h4>
          <p>Direct access to seasoned chartered accountants, company secretaries, and trademark attorneys.</p>
        </div>

        <div className="seo-info-card">
          <div className="seo-card-icon">
            <FiAward />
          </div>
          <h4>10,000+ Business Served</h4>
          <p>Proven track record of high-speed incorporation, brand registration, and tax filings across India.</p>
        </div>
      </div>
    </section>
  );
}
