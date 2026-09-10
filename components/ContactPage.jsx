"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { submitContactForm } from "@/app/actions/contact";
import { validatePhoneNumber } from "@/app/actions/validatePhone";
import "./ContactPage.css";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiUser,
  FiMessageSquare,
  FiFileText,
  FiSend,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiAlertCircle
} from "react-icons/fi";
import { FaLocationDot, FaPhone, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";

import { Skeleton } from "@/components/ui/Skeleton";
import { useSearchParams } from "next/navigation";

export default function ContactPage({ user: initialUser, profile: initialProfile }) {
  const searchParams = useSearchParams();
  const serviceParam = searchParams ? searchParams.get("service") : null;
  const subjectParam = searchParams ? searchParams.get("subject") : null;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const [clientUser, setClientUser] = useState(initialUser || null);
  const [clientProfile, setClientProfile] = useState(initialProfile || null);

  const currentUser = initialUser || clientUser;
  const currentProfile = initialProfile || clientProfile;

  const defaultName = currentProfile?.name || currentUser?.user_metadata?.full_name || currentUser?.user_metadata?.name || "";
  const defaultEmail = currentProfile?.email || currentUser?.email || "";
  const defaultPhone = currentProfile?.phone_number || currentUser?.user_metadata?.phone_number || currentUser?.phone || "";

  const [formData, setFormData] = useState({
    fullName: defaultName,
    email: defaultEmail,
    phone: defaultPhone,
    service: serviceParam || "business-registration",
    subject: subjectParam || "",
    message: ""
  });

  const [prevSync, setPrevSync] = useState({
    serviceParam,
    subjectParam,
    defaultName,
    defaultEmail,
    defaultPhone
  });

  // Adjust state during render when props or searchParams update
  if (
    prevSync.serviceParam !== serviceParam ||
    prevSync.subjectParam !== subjectParam ||
    prevSync.defaultName !== defaultName ||
    prevSync.defaultEmail !== defaultEmail ||
    prevSync.defaultPhone !== defaultPhone
  ) {
    setPrevSync({ serviceParam, subjectParam, defaultName, defaultEmail, defaultPhone });
    setFormData((prev) => ({
      ...prev,
      fullName: prev.fullName || defaultName,
      email: prev.email || defaultEmail,
      phone: prev.phone || defaultPhone,
      service: serviceParam || prev.service,
      subject: subjectParam || prev.subject,
    }));
  }

  // Client-side lookup if server user was not provided
  React.useEffect(() => {
    async function fetchUserOnClient() {
      if (!initialUser) {
        try {
          const supabase = createClient();
          const { data: { user: u } } = await supabase.auth.getUser();
          if (u) {
            setClientUser(u);
            const { data: p } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', u.id)
              .single();
            if (p) setClientProfile(p);
          }
        } catch (err) {
          console.error("Error fetching user on client:", err);
        }
      }
    }
    fetchUserOnClient();
  }, [initialUser]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [openFaq, setOpenFaq] = useState(0); // Open first FAQ by default

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  // Validates an Indian phone number: must be 10 digits starting with 6-9,
  // optionally prefixed with +91 or 0.
  const isValidPhone = (phone) => {
    if (!phone || !phone.trim()) return false; // phone is mandatory
    const digits = phone.replace(/[\s\-\(\)]/g, ""); // strip formatting chars
    // Match: optional +91 or 0 prefix, then 10 digits starting with 6-9
    return /^(?:\+91|0)?[6-9]\d{9}$/.test(digits);
  };

  const handlePhoneChange = (e) => {
    // Allow only digits, +, spaces, hyphens, and parentheses
    const raw = e.target.value.replace(/[^\d\+\s\-\(\)]/g, "");
    setFormData((prev) => ({ ...prev, phone: raw }));
    if (errorMessage) setErrorMessage("");
    // Clear phone error as user types
    if (phoneError) {
      if (isValidPhone(raw)) setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side rate limiting protection
    const submissionKey = `contact_submissions_${formData.email || 'anon'}`;
    const rawTimes = localStorage.getItem(submissionKey);
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    const timestamps = rawTimes ? JSON.parse(rawTimes).filter((t) => now - t < windowMs) : [];

    if (timestamps.length >= 4) {
      const oldestTime = timestamps[0];
      const resetInMins = Math.ceil((windowMs - (now - oldestTime)) / (60 * 1000));
      setErrorMessage(`Rate limit reached: Maximum 4 inquiries allowed per 15 minutes. Please try again in ${resetInMins} minute(s).`);
      return;
    }

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!formData.phone || !formData.phone.trim()) {
      setPhoneError("Please enter your phone number.");
      return;
    }
    if (!isValidPhone(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit phone number (e.g. +91 88669 01544).");
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Please enter a subject for your inquiry.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message details.");
      return;
    }

    setIsSubmitting(true);

    // Verify phone number via Numverify API + pattern detection (server-side)
    try {
      const phoneResult = await validatePhoneNumber(formData.phone);
      if (!phoneResult.valid) {
        const reason = phoneResult.reason || "This phone number could not be verified.";
        setPhoneError(`${reason} Please enter a valid, active mobile number.`);
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.error("Phone validation error:", err);
      // Don't block submission if the API itself fails
    }

    try {
      const landingPage = typeof window !== "undefined" ? window.location.pathname : "/contact";
      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();

      const supabase = createClient();
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          subject: formData.subject,
          message: formData.message,
          landing_page: landingPage,
          utm_source: searchParams.get("utm_source") || "website_direct",
          utm_medium: searchParams.get("utm_medium") || "organic",
          utm_campaign: searchParams.get("utm_campaign") || null,
        });

      if (error) {
        console.error('Supabase insert error:', error.message);
        setErrorMessage(error.message || "Failed to submit your message. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Record successful submission timestamp for rate limiter
      timestamps.push(now);
      localStorage.setItem(submissionKey, JSON.stringify(timestamps));

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to save submission:', err);
      setErrorMessage("Something went wrong while sending your message. Please try again.");
      setIsSubmitting(false);
    }
  };

  const [hasTrackedLead, setHasTrackedLead] = useState(false);

  useEffect(() => {
    if (isSubmitted && !hasTrackedLead) {
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq('track', 'Lead', {
          content_name: formData.service || formData.subject || 'General Contact Inquiry',
        });
        setHasTrackedLead(true);
      }
    }
  }, [isSubmitted, hasTrackedLead, formData.service, formData.subject]);

  const handleReset = () => {
    setFormData({
      fullName: defaultName,
      email: defaultEmail,
      phone: defaultPhone,
      service: "business-registration",
      subject: "",
      message: ""
    });
    setHasTrackedLead(false);
    setIsSubmitted(false);
  };

  const faqs = [
    {
      q: "How fast will a consultant respond after submitting the form?",
      a: "Our corporate specialists review all inquiries within 2 hours during normal business hours (Mon-Fri, 9am - 6pm EST). Submissions received outside business hours will be addressed first thing the next business day."
    },
    {
      q: "Do you offer free initial business consultations?",
      a: "Yes! We offer a complimentary 15-minute preliminary consultation to evaluate your business requirements, entity options, tax structure, and legal roadmap."
    },
    {
      q: "What documents should I prepare before contacting?",
      a: "For general inquiries, no prior documents are required. For company registration or tax compliance, having government-issued ID proofs, proposed company names, and current address proofs handy will speed up the process."
    },
    {
      q: "Can Corporate Hub assist with international or multi-state filings?",
      a: "Absolultely. We assist startups and established enterprises across multiple domestic jurisdictions as well as foreign subsidiary setups and trademark registrations."
    }
  ];

  return (
    <div className="contact-page-container">
      {/* Top Header Navigation */}
      <div className="contact-header-nav">
        <Link href="/" className="back-link">
          <FiArrowLeft /> Back to Homepage
        </Link>

      </div>

      {/* Main Wrapper */}
      {isLoading ? (
        <div className="contact-main-wrapper">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            <Skeleton width="35%" height="38px" borderRadius="8px" />
            <Skeleton width="55%" height="20px" borderRadius="6px" />
          </div>
          <div className="contact-grid">
            <div className="contact-card form-card">
              <Skeleton width="100%" height="420px" borderRadius="12px" />
            </div>
            <div className="contact-info-column" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Skeleton width="100%" height="190px" borderRadius="12px" />
              <Skeleton width="100%" height="190px" borderRadius="12px" />
            </div>
          </div>
        </div>
      ) : (
        <div className="contact-main-wrapper animate-fade-in-up">
          <div className="contact-hero-banner">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">Get in touch with our legal, tax, and compliance specialists.</p>
          </div>

          {/* Contact Grid: Form + Info Cards */}
          <div className="contact-grid">
          {/* Left Column: Form */}
          <div className="contact-card form-card">
            <div className="card-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we will get back to you shortly.</p>
            </div>

            {errorMessage && (
              <div className="contact-error-banner" role="alert">
                <FiAlertCircle className="error-icon" />
                <span>{errorMessage}</span>
              </div>
            )}

            {isSubmitted ? (
              <div className="success-state">
                <div className="success-icon-wrap">
                  <FiCheckCircle className="success-icon" />
                </div>
                <h3>Thank You for Reaching Out!</h3>
                <p>
                  Your message has been successfully transmitted. One of our corporate advisors
                  will contact you shortly at <strong>{formData.email}</strong>
                  {formData.phone ? <> and <strong>{formData.phone}</strong></> : ""}.
                </p>
                <button type="button" onClick={handleReset} className="submit-btn reset-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">
                      <FiUser className="input-icon" /> Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail className="input-icon" /> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FiPhone className="input-icon" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 88669 01544"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      maxLength={15}
                      className={phoneError ? "input-error" : ""}
                    />
                    {phoneError && (
                      <span className="field-error-text">
                        <FiAlertCircle style={{ marginRight: 4, flexShrink: 0 }} />
                        {phoneError}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      <IoDocumentOutline className="input-icon" /> Service Area
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="business-registration">Business Registration</option>
                      <option value="intellectual-property">Intellectual Property</option>
                      <option value="accounting-taxation">Accounting & Taxation</option>
                      <option value="corporate-compliance">Corporate Compliance</option>
                      <option value="business-growth">Business Growth</option>
                      <option value="licenses-certifications">Licenses & Certifications</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FiMessageSquare className="input-icon" /> Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="How can we help your business?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiFileText className="input-icon" /> Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Provide details about your query or company requirement..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? "loading" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="btn-icon" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info Cards & Support Details */}
          <div className="info-cards-column">
            <div className="info-card">
              <div className="info-icon-badge">
                <FaLocationDot />
              </div>
              <div className="info-details">
                <h3>Our Headquarters</h3>
                <p>D-504, Titanium City Center, 100 Feet Rd, Nr Sachin Tower, Satellite, Ahmedabad, Gujarat 380015</p>
                <a
                  href="https://share.google/mWNIAYktRbBkanfrD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link map-direct-link"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-badge">
                <FaPhone />
              </div>
              <div className="info-details">
                <h3>Call Support</h3>
                <p>
                  <a href="tel:+918866901544" className="info-link">+91 88669 01544</a>
                </p>
                <span className="info-meta">Mon - Sat: 9:30 AM – 7:00 PM IST</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-badge">
                <FiMail />
              </div>
              <div className="info-details">
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:Corporatehubcs@gmail.com" className="info-link">Corporatehubcs@gmail.com</a>
                </p>
                <span className="info-meta">Quick response within 2 hours</span>
              </div>
            </div>


          </div>
        </div>

        {/* Location & Interactive Map Container */}
        <div className="map-container-card">
          <div className="map-header">
            <div>
              <h2>Our Office Location</h2>
              <p>Visit our corporate office in Ahmadabad or connect with our advisory team.</p>
            </div>
            <a
              href="https://share.google/mWNIAYktRbBkanfrD"
              target="_blank"
              rel="noopener noreferrer"
              className="open-maps-btn"
            >
              <FaLocationDot /> Open in Google Maps ↗
            </a>
          </div>
          <div className="map-frame-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3209021223724!2d72.5232985!3d23.011986799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c0a43c23c9%3A0x6292d4ccb047ba31!2sThe%20Corporate%20Hub!5e0!3m2!1sen!2sin!4v1786635892985!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="The Corporate Hub Google Maps Location"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq-section">
          <div className="faq-section-header">
            <FiHelpCircle className="faq-main-icon" />
            <h2>Frequently Asked Questions</h2>
            <p>Find instant answers to common questions about our contact and advisory process.</p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? "expanded" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
  );
}
