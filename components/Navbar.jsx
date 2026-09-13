"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (pathname === "/login" || pathname === "/signup" || pathname === "/register") {
    return null;
  }

  return (
    <header className={`main-navbar ${isHome ? "is-home" : ""}`}>
      <div className="navbar-container">
        {/* Top Left Prominent Logo */}
        <div className="navbar-brand-wrapper">
          <Link href="/" className="navbar-brand" aria-label="Corporate Hub Home">
            <Image
              src="/image.png"
              alt="Corporate Hub"
              width={260}
              height={60}
              priority
              className="navbar-brand-logo"
            />
          </Link>
        </div>

        {/* Top Right Action: WhatsApp button (not visible on / page) */}
        {!isHome && (
          <div className="navbar-actions">
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
    </header>
  );
}
