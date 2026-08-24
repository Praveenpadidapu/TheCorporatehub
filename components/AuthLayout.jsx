"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export default function AuthLayout({ children, backLink = "/", backText = "Back to Home" }) {
  return (
    <div className="auth-page-wrapper">
      <Link href={backLink} className="back-to-home">
        <FiArrowLeft size={16} /> {backText}
      </Link>

      {/* Visual Sidebar */}
      <div className="auth-visual-sidebar">
        <div className="auth-visual-overlay"></div>
        <div className="auth-visual-content">
          <Link href="/" className="auth-sidebar-logo" aria-label="Corporate Hub Home">
            <Image
              src="/image.png"
              alt="Corporate Hub"
              width={220}
              height={50}
              priority
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          
          <div className="auth-visual-main">
            <h2 className="auth-visual-title">Accelerate Your Business Journey</h2>
            <p className="auth-visual-subtitle">
              Join thousands of entrepreneurs who trust Corporate Hub for legal, tax, compliance, and growth solutions.
            </p>
            
            <div className="auth-features-list">
              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <FiCheckCircle size={20} />
                </div>
                <div className="auth-feature-text">
                  <h3>Fast-Track Registration</h3>
                  <p>Incorporate your PVT LTD, LLP, or Partnership in record time.</p>
                </div>
              </div>

              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <FiCheckCircle size={20} />
                </div>
                <div className="auth-feature-text">
                  <h3>Expert Tax & Compliance</h3>
                  <p>CA-led GST filings, accounting, and annual legal compliance.</p>
                </div>
              </div>

              <div className="auth-feature-item">
                <div className="auth-feature-icon">
                  <FiCheckCircle size={20} />
                </div>
                <div className="auth-feature-text">
                  <h3>Trademark & IP Protection</h3>
                  <p>Secure your brand name, logo, patent, and intellectual property.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="auth-visual-footer">
            <div className="auth-rating">
              <div className="stars">★★★★★</div>
              <span>Trusted by 10,000+ businesses</span>
            </div>
            <p className="auth-copyright">© {new Date().getFullYear()} Corporate Hub. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Form Content Area */}
      <div className="auth-form-container">
        <div className="auth-form-scroll-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
}
