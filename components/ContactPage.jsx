"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  FiHelpCircle
} from "react-icons/fi";
import { FaLocationDot, FaPhone, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "business-registration",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0); // Open first FAQ by default

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "business-registration",
      subject: "",
      message: ""
    });
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
      <div className="contact-main-wrapper">
        {/* Banner Section */}
        <div className="contact-hero-banner">

          <h1 className="contact-title">Contact Our Corporate Team</h1>

        </div>

        {/* Contact Grid: Form + Info Cards */}
        <div className="contact-grid">
          {/* Left Column: Form */}
          <div className="contact-card form-card">
            <div className="card-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we will get back to you shortly.</p>
            </div>

            {isSubmitted ? (
              <div className="success-state">
                <div className="success-icon-wrap">
                  <FiCheckCircle className="success-icon" />
                </div>
                <h3>Thank You for Reaching Out!</h3>
                <p>
                  Your message has been successfully transmitted. One of our corporate advisors
                  will contact you shortly at <strong>{formData.email}</strong>.
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
                      <FiPhone className="input-icon" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
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
                <p>Level 5, Corporate Towers, Financial District, New York, NY 10005</p>
                <span className="info-meta">Open for walk-ins & appointments</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-badge">
                <FaPhone />
              </div>
              <div className="info-details">
                <h3>Call Support</h3>
                <p>
                  <a href="tel:+18005552677" className="info-link">+1 (800) 555-CORP</a>
                  <br />
                  <a href="tel:+1234567890" className="info-link">+1 (234) 567-8900</a>
                </p>
                <span className="info-meta">Mon - Fri: 8:00 AM – 7:00 PM EST</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-badge">
                <FiMail />
              </div>
              <div className="info-details">
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:contact@corporatehub.com" className="info-link">contact@corporatehub.com</a>
                  <br />
                  <a href="mailto:support@corporatehub.com" className="info-link">support@corporatehub.com</a>
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
              <h2>Global Reach, Local Expertise</h2>
              <p>Visit our regional advisory hubs or connect with our remote consultation teams.</p>
            </div>
            <div className="office-location-pills">
              <span className="pill active">New York (HQ)</span>
              <span className="pill">London</span>
              <span className="pill">Singapore</span>
            </div>
          </div>
          <div className="map-visual">
            <div className="map-overlay">
              <div className="map-pin">
                <FaLocationDot />
                <div className="pin-tooltip">
                  <strong>Corporate Hub NY</strong>
                  <p>100 Financial Plaza, NY</p>
                </div>
              </div>
            </div>
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
    </div>
  );
}
