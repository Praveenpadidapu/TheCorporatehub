"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import { FaWhatsapp } from "react-icons/fa6";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup" || pathname === "/register") {
    return null;
  }

  const isHome = pathname === "/";

  return (
    <header className="main-navbar">
      <div className="navbar-container">
        {/* Top Left Prominent Logo */}
        <div className="navbar-brand-wrapper">
          <Link href="/" className="navbar-brand" aria-label="The Corporate Hub Home">
            <Image
              src={logoImg}
              alt="The Corporate Hub Logo"
              width={50}
              height={50}
              priority
              className="navbar-brand-icon"
            />
            <span className="navbar-brand-text">The Corporate Hub</span>
          </Link>
        </div>

        {/* Top Right Action: On homepage -> About Us button; On other pages -> About Us link + WhatsApp button */}
        <div className="navbar-actions">
          {isHome ? (
            <Link href="/about" className="nav-about-btn" aria-label="About Us">
              <span>About Us</span>
            </Link>
          ) : (
            <div className="nav-actions-group">
              <Link
                href="/about"
                className={`nav-about-link ${pathname === "/about" || pathname === "/about-us" ? "active" : ""}`}
                aria-label="About Us"
              >
                About Us
              </Link>
              <a
                href="https://wa.me/918866901544"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-whatsapp-btn"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="whatsapp-icon" />
                <span>WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
