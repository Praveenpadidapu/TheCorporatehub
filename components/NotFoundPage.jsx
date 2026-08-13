"use client";

import React from "react";
import Link from "next/link";
import "./NotFoundPage.css";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-desc">
          The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="btn-home">
            <FaArrowLeft className="btn-icon" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-contact">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
