"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiClock,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiX
} from "react-icons/fi";
import { createClient } from "@/utils/supabase/client";
import "./ServiceDetailPage.css";

// City-specific local regulatory data for interactive local info section
const LOCAL_REGULATORY_INFO = {
  "all-india": {
    name: "Pan-India",
    info: "The Ministry of Corporate Affairs (MCA), Directorate General of Foreign Trade (DGFT), and Central Board of Direct Taxes (CBDT) operate unified digital national portals. All filings, digital signature authentications, and certificate allotments are processed 100% online across all 28 states and 8 union territories."
  },
  "ahmedabad": {
    name: "Ahmedabad (Gujarat)",
    info: "The Registrar of Companies (ROC) Gujarat & Dadra and Nagar Haveli is located at ROC Bhavan, Naranpura, Ahmedabad. Ahmedabad is a major industrial and financial hub encompassing GIFT City, SG Highway tech parks, and GIDC industrial corridors with streamlined digital MCA approvals."
  },
  "mumbai": {
    name: "Mumbai (Maharashtra)",
    info: "The Registrar of Companies Mumbai is situated at Everest 100, Marine Drive, Mumbai. As India's financial capital and home to BSE/NSE stock exchanges, businesses benefit from deep banking infrastructure, corporate legal ecosystems, and SEBI compliance facilitation."
  },
  "bengaluru": {
    name: "Bengaluru (Karnataka)",
    info: "The Registrar of Companies Karnataka is located at Kendriya Sadan, Koramangala, Bengaluru. Serving India's premier technology startup hub, electronic MCA filings and DPIIT Startup India recognitions are fast-tracked for tech and venture-funded entities."
  },
  "delhi": {
    name: "Delhi NCR",
    info: "The Registrar of Companies Delhi & Haryana is located at Paryavaran Bhawan, CGO Complex, New Delhi. Central government ministries, DGFT headquarters, and national appellate tribunals (NCLT/NCLAT) are directly accessible for regulatory clearances."
  },
  "pune": {
    name: "Pune (Maharashtra)",
    info: "The Registrar of Companies Pune oversees Maharashtra's secondary industrial and IT corridor at PMT Commercial Building, Swargate, Pune. Ideal for automotive engineering, manufacturing units, and tech startups."
  }
};

export default function ServiceDetailPage({ data, categorySlug }) {
  // Accordion state: only whatIs, whoShouldChoose, and keyBenefits open by default
  const [openSections, setOpenSections] = useState({
    whatIs: true,
    whoShouldChoose: true,
    keyBenefits: true,
    eligibility: false,
    documentsRequired: false,
    process: false,
    timeline: false,
    taxCompliance: false,
    comparison: false,
    growthImpact: false,
    localInformation: false,
    whyCorporateHub: false,
    faqs: false,
    relatedServices: false
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedCity, setSelectedCity] = useState("all-india");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: `Inquiry for ${data.name}`
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const landingPage = typeof window !== "undefined" ? window.location.pathname : `/services/${categorySlug}/${data.id}`;
      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();

      const supabase = createClient();
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: data.name,
          subject: `${data.name} Consultation Inquiry`,
          message: formData.message,
          landing_page: landingPage,
          utm_source: searchParams.get("utm_source") || "service_detail_page",
          utm_medium: searchParams.get("utm_medium") || "direct_inquiry",
          utm_campaign: searchParams.get("utm_campaign") || data.id
        });

      if (error) {
        setErrorMessage(error.message || "Failed to submit inquiry.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="service-detail-container">
      <div className="service-detail-inner">
        {/* Navigation & Breadcrumbs */}
        <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
          <Link href={`/services/${categorySlug}`} className="detail-back-link">
            <FiArrowLeft /> Back to {data.categoryTitle}
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{data.name}</span>
        </nav>

        {/* 1. Main Heading & 2. Hero Introduction */}
        <header className="detail-hero-card">
          <span className="detail-category-badge">{data.categoryTitle}</span>
          <h1 className="detail-main-h1">{data.locationHeading || `${data.name} in India`}</h1>
          <p className="detail-hero-intro">{data.heroIntro}</p>

          <div className="detail-hero-actions">
            <button
              className="detail-cta-primary"
              onClick={() => setIsModalOpen(true)}
            >
              <FiSend /> Request Free Consultation
            </button>
            <Link
              href={`/contact?service=${encodeURIComponent(data.categorySlug)}&subject=${encodeURIComponent(`Inquiry for ${data.name}`)}`}
              className="detail-cta-secondary"
            >
              Talk to an Expert
            </Link>
          </div>
        </header>

        {/* 3. What Is the Service? */}
        <section className={`detail-card-section ${openSections.whatIs ? "is-expanded" : ""}`} id="what-is-service">
          <button
            type="button"
            className="detail-accordion-header"
            onClick={() => toggleSection("whatIs")}
            aria-expanded={openSections.whatIs}
          >
            <h2 className="detail-section-title">What Is {data.name}?</h2>
            <span className="detail-accordion-icon">
              {openSections.whatIs ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>
          {openSections.whatIs && (
            <div className="detail-accordion-body">
              <p className="detail-body-text">{data.whatIs}</p>
            </div>
          )}
        </section>

        {/* 4. Who Should Choose This? */}
        {data.whoShouldChoose && data.whoShouldChoose.length > 0 && (
          <section className={`detail-card-section ${openSections.whoShouldChoose ? "is-expanded" : ""}`} id="who-should-choose">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("whoShouldChoose")}
              aria-expanded={openSections.whoShouldChoose}
            >
              <h2 className="detail-section-title">Who Should Choose This?</h2>
              <span className="detail-accordion-icon">
                {openSections.whoShouldChoose ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.whoShouldChoose && (
              <div className="detail-accordion-body">
                <div className="detail-grid-cards">
                  {data.whoShouldChoose.map((item, idx) => (
                    <div key={idx} className="detail-sub-card">
                      <h3 className="detail-subcard-title">{item.title}</h3>
                      <p className="detail-subcard-text">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 5. Key Benefits */}
        {data.keyBenefits && data.keyBenefits.length > 0 && (
          <section className={`detail-card-section ${openSections.keyBenefits ? "is-expanded" : ""}`} id="key-benefits">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("keyBenefits")}
              aria-expanded={openSections.keyBenefits}
            >
              <h2 className="detail-section-title">Key Benefits & Advantages</h2>
              <span className="detail-accordion-icon">
                {openSections.keyBenefits ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.keyBenefits && (
              <div className="detail-accordion-body">
                <div className="detail-grid-cards">
                  {data.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="detail-sub-card benefit-card">
                      <div className="benefit-header">
                        <span className="benefit-check"><FiCheckCircle /></span>
                        <h3 className="detail-subcard-title">{benefit.title}</h3>
                      </div>
                      <p className="detail-subcard-text">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 6. Eligibility / Requirements */}
        {data.eligibility && data.eligibility.length > 0 && (
          <section className={`detail-card-section ${openSections.eligibility ? "is-expanded" : ""}`} id="eligibility">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("eligibility")}
              aria-expanded={openSections.eligibility}
            >
              <h2 className="detail-section-title">Eligibility & Basic Requirements</h2>
              <span className="detail-accordion-icon">
                {openSections.eligibility ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.eligibility && (
              <div className="detail-accordion-body">
                <ul className="detail-checklist">
                  {data.eligibility.map((req, idx) => (
                    <li key={idx}>
                      <span className="check-icon"><FiCheckCircle /></span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 7. Documents Required */}
        {data.documentsRequired && (
          <section className={`detail-card-section ${openSections.documentsRequired ? "is-expanded" : ""}`} id="documents-required">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("documentsRequired")}
              aria-expanded={openSections.documentsRequired}
            >
              <h2 className="detail-section-title">Documents Required</h2>
              <span className="detail-accordion-icon">
                {openSections.documentsRequired ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.documentsRequired && (
              <div className="detail-accordion-body">
                <div className="detail-docs-grid">
                  {data.documentsRequired.directors && (
                    <div className="detail-doc-group">
                      <h3 className="doc-group-title">For Directors / Partners / Applicants</h3>
                      <ul className="detail-checklist">
                        {data.documentsRequired.directors.map((doc, idx) => (
                          <li key={idx}>
                            <span className="check-icon"><FiCheckCircle /></span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {data.documentsRequired.registeredOffice && (
                    <div className="detail-doc-group">
                      <h3 className="doc-group-title">For Registered Office & Business Premises</h3>
                      <ul className="detail-checklist">
                        {data.documentsRequired.registeredOffice.map((doc, idx) => (
                          <li key={idx}>
                            <span className="check-icon"><FiCheckCircle /></span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 8. Process */}
        {data.processSteps && data.processSteps.length > 0 && (
          <section className={`detail-card-section ${openSections.process ? "is-expanded" : ""}`} id="process">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("process")}
              aria-expanded={openSections.process}
            >
              <h2 className="detail-section-title">Step-by-Step Registration Process</h2>
              <span className="detail-accordion-icon">
                {openSections.process ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.process && (
              <div className="detail-accordion-body">
                <div className="detail-process-timeline">
                  {data.processSteps.map((p, idx) => (
                    <div key={idx} className="process-timeline-item">
                      <div className="step-badge">{p.step || idx + 1}</div>
                      <div className="step-content">
                        <h3 className="step-heading">{p.title}</h3>
                        <p className="step-body">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 9. Timeline */}
        {data.timeline && (
          <section className={`detail-card-section ${openSections.timeline ? "is-expanded" : ""}`} id="timeline">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("timeline")}
              aria-expanded={openSections.timeline}
            >
              <h2 className="detail-section-title">Expected Timeline & Turnaround</h2>
              <span className="detail-accordion-icon">
                {openSections.timeline ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.timeline && (
              <div className="detail-accordion-body">
                <div className="detail-timeline-card">
                  <div className="timeline-badge-row">
                    <span className="clock-icon"><FiClock /></span>
                    <strong>Estimated Timeframe:</strong> {data.timeline.duration}
                  </div>
                  <p className="timeline-qualification">{data.timeline.qualification}</p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* 10. Tax & Compliance */}
        {data.taxCompliance && data.taxCompliance.length > 0 && (
          <section className={`detail-card-section ${openSections.taxCompliance ? "is-expanded" : ""}`} id="tax-compliance">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("taxCompliance")}
              aria-expanded={openSections.taxCompliance}
            >
              <h2 className="detail-section-title">Tax, Regulatory & Ongoing Compliance</h2>
              <span className="detail-accordion-icon">
                {openSections.taxCompliance ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.taxCompliance && (
              <div className="detail-accordion-body">
                <ul className="detail-checklist">
                  {data.taxCompliance.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-icon"><FiCheckCircle /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 11. Comparison */}
        {data.comparison && data.comparison.headers && (
          <section className={`detail-card-section ${openSections.comparison ? "is-expanded" : ""}`} id="comparison">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("comparison")}
              aria-expanded={openSections.comparison}
            >
              <h2 className="detail-section-title">{data.comparison.title || "Comparative Analysis"}</h2>
              <span className="detail-accordion-icon">
                {openSections.comparison ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.comparison && (
              <div className="detail-accordion-body">
                <div className="comparison-table-wrapper">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        {data.comparison.headers.map((h, hIdx) => (
                          <th key={hIdx}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.comparison.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={cIdx === 0 ? "table-feature-col" : ""}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )}

        {/* 12. How It Helps Your Business Grow */}
        {data.growthImpact && data.growthImpact.length > 0 && (
          <section className={`detail-card-section ${openSections.growthImpact ? "is-expanded" : ""}`} id="business-growth">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("growthImpact")}
              aria-expanded={openSections.growthImpact}
            >
              <h2 className="detail-section-title">How It Helps Your Business Grow</h2>
              <span className="detail-accordion-icon">
                {openSections.growthImpact ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.growthImpact && (
              <div className="detail-accordion-body">
                <ul className="detail-checklist">
                  {data.growthImpact.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-icon"><FiCheckCircle /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 13. Local Information */}
        <section className={`detail-card-section ${openSections.localInformation ? "is-expanded" : ""}`} id="local-information">
          <button
            type="button"
            className="detail-accordion-header"
            onClick={() => toggleSection("localInformation")}
            aria-expanded={openSections.localInformation}
          >
            <h2 className="detail-section-title">Local & Regional Information</h2>
            <span className="detail-accordion-icon">
              {openSections.localInformation ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>
          {openSections.localInformation && (
            <div className="detail-accordion-body">
              <div className="local-city-tabs">
                {Object.keys(LOCAL_REGULATORY_INFO).map((cityKey) => (
                  <button
                    key={cityKey}
                    type="button"
                    className={`city-tab-btn ${selectedCity === cityKey ? "active" : ""}`}
                    onClick={() => setSelectedCity(cityKey)}
                  >
                    {LOCAL_REGULATORY_INFO[cityKey].name}
                  </button>
                ))}
              </div>
              <div className="local-city-content">
                <p className="detail-body-text">
                  {LOCAL_REGULATORY_INFO[selectedCity].info}
                </p>
                {data.localInformation && (
                  <p className="detail-body-text" style={{ marginTop: "12px" }}>
                    {data.localInformation}
                  </p>
                )}
              </div>
            </div>
          )}
        </section>

        {/* 14. Why The Corporate Hub? */}
        {data.whyCorporateHub && data.whyCorporateHub.length > 0 && (
          <section className={`detail-card-section ${openSections.whyCorporateHub ? "is-expanded" : ""}`} id="why-corporate-hub">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("whyCorporateHub")}
              aria-expanded={openSections.whyCorporateHub}
            >
              <h2 className="detail-section-title">Why Choose The Corporate Hub?</h2>
              <span className="detail-accordion-icon">
                {openSections.whyCorporateHub ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.whyCorporateHub && (
              <div className="detail-accordion-body">
                <ul className="detail-checklist">
                  {data.whyCorporateHub.map((reason, idx) => (
                    <li key={idx}>
                      <span className="check-icon"><FiCheckCircle /></span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 15. Frequently Asked Questions */}
        {data.faqs && data.faqs.length > 0 && (
          <section className={`detail-card-section ${openSections.faqs ? "is-expanded" : ""}`} id="faqs">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("faqs")}
              aria-expanded={openSections.faqs}
            >
              <h2 className="detail-section-title">Frequently Asked Questions</h2>
              <span className="detail-accordion-icon">
                {openSections.faqs ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.faqs && (
              <div className="detail-accordion-body">
                <div className="detail-faq-list">
                  {data.faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} className={`detail-faq-item ${isOpen ? "is-open" : ""}`}>
                        <button
                          type="button"
                          className="detail-faq-question"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          <span className="faq-icon">{isOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
                        </button>
                        {isOpen && (
                          <div className="detail-faq-answer">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 16. Related Services */}
        {data.relatedServices && data.relatedServices.length > 0 && (
          <section className={`detail-card-section ${openSections.relatedServices ? "is-expanded" : ""}`} id="related-services">
            <button
              type="button"
              className="detail-accordion-header"
              onClick={() => toggleSection("relatedServices")}
              aria-expanded={openSections.relatedServices}
            >
              <h2 className="detail-section-title">Related Services You May Need</h2>
              <span className="detail-accordion-icon">
                {openSections.relatedServices ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openSections.relatedServices && (
              <div className="detail-accordion-body">
                <div className="related-services-grid">
                  {data.relatedServices.map((rel, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${rel.categorySlug}/${rel.slug}`}
                      className="related-service-card"
                    >
                      <h4>{rel.name}</h4>
                      <span className="related-view-link">View Service Details →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 17. Final Call to Action */}
        <section className="detail-final-cta">
          <h2 className="final-cta-heading">Ready to Get Started with {data.name}?</h2>
          <p className="final-cta-sub">
            Speak with our chartered accountants, company secretaries, and legal experts to get a customized consultation tailored to your business needs.
          </p>
          <div className="final-cta-buttons">
            <button
              className="detail-cta-primary large-cta"
              onClick={() => setIsModalOpen(true)}
            >
              <FiSend /> Request a Customized Consultation
            </button>
            <Link
              href={`/contact?service=${encodeURIComponent(data.categorySlug)}&subject=${encodeURIComponent(`Inquiry for ${data.name}`)}`}
              className="detail-cta-secondary large-cta"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </div>

      {/* Consultation Inquiry Modal */}
      {isModalOpen && (
        <div className="service-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="service-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <FiX />
            </button>

            {isSuccess ? (
              <div className="modal-success-state">
                <span className="success-icon"><FiCheckCircle /></span>
                <h3>Inquiry Submitted Successfully!</h3>
                <p>Thank you! Our dedicated corporate specialist will contact you shortly regarding <strong>{data.name}</strong>.</p>
                <button
                  type="button"
                  className="detail-cta-primary"
                  onClick={() => {
                    setIsSuccess(false);
                    setIsModalOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="service-modal-form">
                <h3>Request Free Consultation</h3>
                <p className="modal-form-sub">
                  Get customized guidance for <strong>{data.name}</strong>.
                </p>

                {errorMessage && (
                  <div className="modal-error-banner">{errorMessage}</div>
                )}

                <div className="modal-form-group">
                  <label htmlFor="modal-name">Full Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="modal-email">Email Address *</label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="modal-phone">Phone Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="modal-message">Inquiry Details</label>
                  <textarea
                    id="modal-message"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="detail-cta-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
