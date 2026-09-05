"use client";

import React from "react";
import Link from "next/link";
import { FiHome, FiGrid } from "react-icons/fi";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const popularServices = [
    { name: "Private Limited Company", href: "/services/business-registration/pvt-ltd" },
    { name: "One Person Company (OPC)", href: "/services/business-registration/opc-reg" },
    { name: "LLP Registration", href: "/services/business-registration/llp-reg" },
    { name: "Trademark Registration", href: "/services/intellectual-property/tm-reg" },
    { name: "GST Consultancy", href: "/services/accounting-taxation/gst-consultancy" },
    { name: "FSSAI License", href: "/services/licenses-certifications/fssai-lic" }
  ];

  return (
    <div className="not-found-container">
      <div className="not-found-card animate-fade-in">
        <div className="not-found-badge">404 ERROR</div>
        
        <h1 className="not-found-code">404</h1>
        
        <h2 className="not-found-title">Oops! Page Not Found</h2>
        
        <p className="not-found-desc">
          The page you are looking for might have been moved, renamed, or doesn&apos;t exist.
          Let&apos;s get you back on track to grow your business.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="btn-home-primary">
            <FiHome className="btn-icon" />
            Back to Home
          </Link>
          <Link href="/services" className="btn-services-secondary">
            <FiGrid className="btn-icon" />
            Browse All Services
          </Link>
        </div>

        <div className="not-found-suggestions">
          <span className="suggestions-label">Popular Destinations:</span>
          <div className="suggestions-chips">
            {popularServices.map((srv, idx) => (
              <Link key={idx} href={srv.href} className="chip-link">
                {srv.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
