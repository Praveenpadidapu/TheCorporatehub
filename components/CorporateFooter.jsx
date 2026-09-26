"use client";

import React from "react";
import Link from "next/link";
import "./CorporateFooter.css";
import { FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaEnvelope, FaHeart } from "react-icons/fa6";

export default function CorporateNavbar() {

  return (
    <footer className="corporate-navbar-container">
      <div className="corporate-navbar-inner">
        {/* Main 4-Column Grid */}
        <div className="corporate-navbar-grid">
          {/* Column 1: Brand & Mission */}
          <div className="navbar-col brand-col">
            <Link href="/" className="brand-logo-link" aria-label="Corporate Hub Home">
              <img src="/logo.png" alt="Corporate Hub" className="footer-logo" />
            </Link>
            <p className="brand-desc">
              Every business deserves legal clarity, protection, tax compliance, and a brighter future. Together we create opportunities that transform ideas into thriving enterprises and build stronger communities.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="navbar-col links-col">
            <h3 className="col-heading">Quick Links</h3>
            <ul className="nav-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/locations">Locations & Cities</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/services/business-registration">Business Registration</Link></li>
              <li><Link href="/services/intellectual-property">Intellectual Property</Link></li>
              <li><Link href="/services/accounting-taxation">Accounting And Taxation</Link></li>
              <li><Link href="/services/corporate-compliance">Corporate Compliance</Link></li>
              <li><Link href="/services/business-growth">Business Growth</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="navbar-col legal-col">
            <h3 className="col-heading">Legal</h3>
            <ul className="nav-links-list">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy">Refund & Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="navbar-col contact-col">
            <h3 className="col-heading">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <FaLocationDot className="contact-item-icon" />
                <span className="contact-item-text">
                  D-504, Titanium City Center, 100 Feet Rd, Nr Sachin Tower, Satellite, Ahmedabad, Gujarat 380015
                </span>
              </li>
              <li className="contact-item">
                <FaPhone className="contact-item-icon" />
                <a href="tel:+918866901544" className="contact-item-link">
                  +91 88669 01544
                </a>
              </li>
              <li className="contact-item">
                <FaEnvelope className="contact-item-icon" />
                <a href="mailto:Corporatehubcs@gmail.com" className="contact-item-link">
                  Corporatehubcs@gmail.com
                </a>
              </li>
            </ul>
            <div className="footer-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3209021223724!2d72.5232985!3d23.011986799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c0a43c23c9%3A0x6292d4ccb047ba31!2sThe%20Corporate%20Hub!5e0!3m2!1sen!2sin!4v1786635892985!5m2!1sen!2sin"
                width="100%"
                height="130"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="The Corporate Hub Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="corporate-navbar-divider"></div>

        {/* Bottom Bar */}
        <div className="corporate-navbar-bottom">
          <div className="bottom-copyright">
            © 2026 Corporate Hub Services. All Rights Reserved.
          </div>

          <div className="bottom-attribution">
            MADE WITH <FaHeart className="heart-icon" /> BY <a href="https://www.antilabs.in/" target="_blank" rel="noopener noreferrer" className="attribution-link"><strong>AntiLabs</strong></a>
          </div>

          <div className="bottom-socials">
            <a href="https://www.facebook.com/TheCorporateHubIndia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/thecorporatehub" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>


            <a href="tel:+918866901544" aria-label="Phone" className="social-icon">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
