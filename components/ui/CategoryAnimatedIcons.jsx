"use client";

import React from "react";
import "./CategoryAnimatedIcons.css";

// 1. Business Registration Icon (Continuous Pen Writing & Stamp Pulse)
export function BizRegAnimatedIcon({ size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-cat-svg"
    >
      <rect x="12" y="6" width="38" height="50" rx="6" stroke="#FFFFFF" strokeWidth="3" fill="#193563" />
      <line x1="20" y1="18" x2="42" y2="18" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="26" x2="38" y2="26" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="34" x2="32" y2="34" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

      {/* Writing Pen with Continuous Signature Movement */}
      <g className="anim-pen">
        <path d="M36 30L46 20L50 24L40 34L34 36L36 30Z" stroke="#FF6000" strokeWidth="2.5" fill="#FF6000" />
      </g>

      {/* Verified Stamp with Continuous Pulse */}
      <g className="anim-stamp">
        <circle cx="40" cy="44" r="7" stroke="#FF6000" strokeWidth="2.5" fill="#193563" />
        <path d="M37 44L39 46L43 42" stroke="#FF6000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// 2. Intellectual Property Icon (Continuous Brain Lightbulb Flashing Rays)
export function IpAnimatedIcon({ size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-cat-svg"
    >
      {/* Lightbulb & Brain Body Floating */}
      <g className="anim-brain-body">
        <path
          d="M24 16C18.4772 16 14 20.4772 14 26C14 29.5 15.8 32.5 18.5 34.2V42H29.5V34.2C32.2 32.5 34 29.5 34 26C34 20.4772 29.5228 16 24 16Z"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#193563"
        />
        <path d="M20 47H28" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 52H26" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" />
        <path d="M42 20C47.5 20 50 24 50 28C50 31.5 48 34 46 36V42H39" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Flashing Idea Rays */}
      <g className="anim-rays">
        <line x1="24" y1="6" x2="24" y2="11" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" />
        <line x1="9" y1="16" x2="13" y2="19" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" />
        <line x1="39" y1="16" x2="35" y2="19" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 3. Accounting & Taxation Icon (Continuous Bouncing Coins & Calculator Keypad)
export function TaxAnimatedIcon({ size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-cat-svg"
    >
      <rect x="10" y="8" width="42" height="48" rx="6" stroke="#FFFFFF" strokeWidth="3" fill="#193563" />
      <rect x="16" y="14" width="30" height="12" rx="3" stroke="#FF6000" strokeWidth="2.5" fill="#193563" />
      
      {/* Animated Keypad Buttons */}
      <circle cx="20" cy="34" r="3" fill="#FFFFFF" className="anim-calc-btn" />
      <circle cx="31" cy="34" r="3" fill="#FFFFFF" />
      <circle cx="42" cy="34" r="3" fill="#FF6000" className="anim-calc-btn" />
      <circle cx="20" cy="44" r="3" fill="#FFFFFF" />
      <circle cx="31" cy="44" r="3" fill="#FF6000" className="anim-calc-btn" />
      <circle cx="42" cy="44" r="3" fill="#FF6000" />

      {/* Floating Bouncing Gold Coin Badge */}
      <g className="anim-coin">
        <circle cx="46" cy="18" r="8" stroke="#FF6000" strokeWidth="2.5" fill="#FF6000" />
        <text x="46" y="22" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">$</text>
      </g>
    </svg>
  );
}

// 4. Corporate Compliance Icon (Continuous Glowing Shield & Drawing Checkmark)
export function ComplianceAnimatedIcon({ size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-cat-svg"
    >
      <g className="anim-shield">
        <path
          d="M32 6L52 14V28C52 41.5 32 54 32 54C32 54 12 41.5 12 28V14L32 6Z"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#193563"
        />
      </g>
      <path
        d="M23 28L29 34L41 22"
        stroke="#FF6000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="anim-check"
      />
    </svg>
  );
}

// 5. Business Growth Icon (Continuous Rocketing Trend Arrow & Pulsing Bar Chart)
export function GrowthAnimatedIcon({ size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-cat-svg"
    >
      <line x1="10" y1="52" x2="54" y2="52" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      
      {/* Animated Growing Bars */}
      <rect x="14" y="36" width="8" height="16" rx="2" stroke="#FFFFFF" strokeWidth="2.5" fill="#193563" className="anim-bar-1" />
      <rect x="27" y="24" width="8" height="28" rx="2" stroke="#FFFFFF" strokeWidth="2.5" fill="#193563" className="anim-bar-2" />
      <rect x="40" y="14" width="8" height="38" rx="2" stroke="#FF6000" strokeWidth="2.5" fill="#FF6000" className="anim-bar-3" />

      {/* Upward Growth Arrow */}
      <g className="anim-arrow-growth">
        <path d="M12 34L26 20L36 26L50 10" stroke="#FF6000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 10H50V20" stroke="#FF6000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// 6. Licenses & Certifications Icon (Continuous Swinging Ribbon & Spinning Star)
export function LicenseAnimatedIcon({ size = 52 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-cat-svg"
    >
      {/* Swinging Award Ribbons */}
      <g className="anim-ribbon">
        <path d="M22 36L18 54L32 46L46 54L42 36" stroke="#FF6000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="#193563" />
      </g>

      {/* Award Badge Circle & Check Mark */}
      <circle cx="32" cy="24" r="16" stroke="#FFFFFF" strokeWidth="3" fill="#193563" />
      <circle cx="32" cy="24" r="10" stroke="#FF6000" strokeWidth="2.5" />
      <path d="M27 24L30 27L37 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Spinning Gold Star Accent */}
      <g className="anim-star" style={{ transformOrigin: "32px 24px" }}>
        <circle cx="32" cy="10" r="1.5" fill="#FF6000" />
        <circle cx="46" cy="24" r="1.5" fill="#FF6000" />
      </g>
    </svg>
  );
}
