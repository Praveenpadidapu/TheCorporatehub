"use client";

import React, { useState } from "react";
import { FiSend, FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { createClient } from "@/utils/supabase/client";
import "./SeoContactModal.css";

export default function SeoContactModalTrigger({ cityName, serviceName, citySlug, serviceSlug }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: `Inquiry for ${serviceName} in ${cityName}`
  });

  const handleSubmit = async (e) => {
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
      const landingPage = typeof window !== "undefined" ? window.location.pathname : `/locations/${citySlug}/${serviceSlug}`;
      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();

      const supabase = createClient();
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: serviceName,
          subject: `${serviceName} Consultation (${cityName})`,
          message: formData.message,
          landing_page: landingPage,
          utm_source: searchParams.get("utm_source") || "organic_local_seo",
          utm_medium: searchParams.get("utm_medium") || "local_search",
          utm_campaign: searchParams.get("utm_campaign") || `${citySlug}_${serviceSlug}`
        });

      if (error) {
        setErrorMessage(error.message || "Failed to submit inquiry.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error("Inquiry error:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const [hasTrackedLead, setHasTrackedLead] = useState(false);

  React.useEffect(() => {
    if (isSuccess && !hasTrackedLead) {
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq('track', 'Lead', {
          content_name: `${serviceName} (${cityName})`,
        });
        setHasTrackedLead(true);
      }
    }
  }, [isSuccess, hasTrackedLead, serviceName, cityName]);

  return (
    <>
      <button className="seo-cta-btn" onClick={() => setIsOpen(true)}>
        <FiSend /> Request Free Consultation
      </button>

      {isOpen && (
        <div className="seo-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="seo-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="seo-modal-close" onClick={() => setIsOpen(false)}>
              <FiX />
            </button>

            {isSuccess ? (
              <div className="seo-modal-success">
                <FiCheckCircle className="seo-modal-success-icon" />
                <h3>Consultation Request Received!</h3>
                <p>
                  Thank you for reaching out regarding <strong>{serviceName}</strong> in <strong>{cityName}</strong>. Our expert legal team will call you shortly.
                </p>
                <button
                  className="seo-cta-btn"
                  onClick={() => {
                    setIsSuccess(false);
                    setIsOpen(false);
                  }}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="seo-modal-form">
                <h3>Request Consultation in {cityName}</h3>
                <p className="seo-modal-subtitle">
                  Fill in your contact details to speak with our {serviceName} specialists in {cityName}.
                </p>

                {errorMessage && (
                  <div className="seo-modal-error">
                    <FiAlertCircle /> {errorMessage}
                  </div>
                )}

                <div className="seo-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div className="seo-form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="seo-form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="seo-form-group">
                  <label>Requirement Note</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="seo-cta-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
