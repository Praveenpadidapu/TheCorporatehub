"use client";

import React from "react";
import Link from "next/link";
import "./CorporateFooter.css";
import { FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaHeart } from "react-icons/fa6";

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
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services/business-registration">Business Regsitraion</Link></li>
              <li><Link href="/services/intellectual-property">Intellectual Property </Link></li>
              <li><Link href="/services/accounting-taxation">Accounting And Taxation</Link></li>
              <li><Link href="/services/corporate-compliance">Corporate Compliance</Link></li>
              <li><Link href="/services/business-growth">Business Growth</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="navbar-col legal-col">
            <h3 className="col-heading">Legal</h3>
            <ul className="nav-links-list">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Corporate Protection Policy</Link></li>
            </ul>
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
            MADE WITH <FaHeart className="heart-icon" /> BY <strong>AntiLabs</strong>
          </div>

          <div className="bottom-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#location" aria-label="Location" className="social-icon">
              <FaLocationDot />
            </a>
            <a href="tel:+1234567890" aria-label="Phone" className="social-icon">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
