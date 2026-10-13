"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import "./CorporateFooter.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

export default function CorporateFooter() {
  return (
    <footer className="corporate-footer" aria-label="Corporate Hub Site Footer">
      {/* Top Pre-Footer Advisory Banner */}
      <div className="footer-pre-banner">
        <div className="corporate-container">
          <div className="pre-banner-content">
            <div className="pre-banner-text">
              <span className="pre-banner-badge">SINGLE-WINDOW ADVISORY</span>
              <h2 className="pre-banner-heading">
                Need Dedicated CA, CS, or CMA Guidance For Your Enterprise?
              </h2>
              <p className="pre-banner-sub">
                Connect directly with our multidisciplinary corporate advisory specialists in Ahmedabad and across India.
              </p>
            </div>
            <div className="pre-banner-actions">
              <Link href="/contact" className="pre-banner-btn-consult">
                <span>Book Consultation</span>
                <FiArrowRight />
              </Link>
              <a
                href="https://wa.me/918866901544"
                target="_blank"
                rel="noopener noreferrer"
                className="pre-banner-btn-whatsapp"
                aria-label="Direct WhatsApp Consultation"
              >
                <FaWhatsapp size={18} />
                <span>Quick WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Grid */}
      <div className="footer-main-section">
        <div className="corporate-container">
          <div className="footer-grid">
            {/* Column 1: Brand & Purpose */}
            <div className="footer-col brand-col">
              <Link href="/" className="footer-brand-link" aria-label="The Corporate Hub Home">
                <Image
                  src={logoImg}
                  alt="The Corporate Hub Logo"
                  width={48}
                  height={48}
                  className="footer-brand-logo"
                />
                <div className="footer-brand-text">
                  <span className="footer-brand-name">The Corporate Hub</span>
                  <span className="footer-brand-tag">CA • CS • CMA Advisory</span>
                </div>
              </Link>

              <p className="footer-brand-desc">
                A multidisciplinary corporate advisory practice built to support entrepreneurs, growing enterprises, and established institutions with unified corporate law, taxation, accounting, governance, and business growth solutions.
              </p>

              <div className="footer-credentials-strip">
                <span className="cred-badge">CA</span>
                <span className="cred-dot">•</span>
                <span className="cred-badge">CS</span>
                <span className="cred-dot">•</span>
                <span className="cred-badge">CMA</span>
                <span className="cred-note">Under One Roof</span>
              </div>
            </div>

            {/* Column 2: Core Practice Areas */}
            <div className="footer-col services-col">
              <h3 className="footer-heading">Practice Areas</h3>
              <ul className="footer-nav-list">
                <li><Link href="/services/business-registration">Business Registration & Setup</Link></li>
                <li><Link href="/services/intellectual-property">Trademark & IP Protection</Link></li>
                <li><Link href="/services/accounting-taxation">Accounting, Bookkeeping & Audit</Link></li>
                <li><Link href="/services/corporate-compliance">ROC & Secretarial Governance</Link></li>
                <li><Link href="/services/licenses-certifications">Business Licenses & Permits</Link></li>
                <li><Link href="/services/business-growth">Startup Advisory & Valuation</Link></li>
                <li><Link href="/services/business-growth">Funding Support & SME IPO</Link></li>
              </ul>
            </div>

            {/* Column 3: Quick Links & Legal */}
            <div className="footer-col links-col">
              <h3 className="footer-heading">Company & Legal</h3>
              <ul className="footer-nav-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/locations">Locations & Cities</Link></li>
                <li><Link href="/contact">Contact Specialists</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link href="/refund-policy">Refund & Cancellation</Link></li>
              </ul>
            </div>

            {/* Column 4: Direct Office & Contact */}
            <div className="footer-col contact-col">
              <h3 className="footer-heading">Office & Contact</h3>
              <ul className="footer-contact-details">
                <li className="contact-detail-row">
                  <FaLocationDot className="contact-icon" aria-hidden="true" />
                  <span className="contact-text">
                    D-504, Titanium City Center, 100 Feet Rd, Nr Sachin Tower, Satellite, Ahmedabad, Gujarat 380015
                  </span>
                </li>

                <li className="contact-detail-row">
                  <FaPhone className="contact-icon" aria-hidden="true" />
                  <a href="tel:+918866901544" className="contact-link">
                    +91 88669 01544
                  </a>
                </li>

                <li className="contact-detail-row">
                  <FaEnvelope className="contact-icon" aria-hidden="true" />
                  <a href="mailto:Corporatehubcs@gmail.com" className="contact-link">
                    Corporatehubcs@gmail.com
                  </a>
                </li>
              </ul>

              {/* Verified Embedded Google Map */}
              <div className="footer-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3209021223724!2d72.5232985!3d23.011986799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c0a43c23c9%3A0x6292d4ccb047ba31!2sThe%20Corporate%20Hub!5e0!3m2!1sen!2sin!4v1786635892985!5m2!1sen!2sin"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="The Corporate Hub Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Social Media */}
      <div className="footer-bottom-bar">
        <div className="corporate-container">
          <div className="footer-bottom-inner">
            <div className="footer-copyright-text">
              © 2026 The Corporate Hub. All Rights Reserved. CA • CS • CMA Multidisciplinary Practice.
            </div>

            <div className="footer-social-links">
              <a
                href="https://wa.me/918866901544"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-icon whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/TheCorporateHubIndia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/thecorporatehub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="tel:+918866901544"
                aria-label="Direct Telephone"
                className="footer-social-icon"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
