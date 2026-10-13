"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMenu, FiX, FiArrowRight, FiPhone } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Track scroll state for refined shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Suppress navbar on dedicated auth screens
  if (pathname === "/login" || pathname === "/signup" || pathname === "/register") {
    return null;
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services/business-registration" },
    { label: "Locations", href: "/locations" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    if (href === "/about") return pathname === "/about" || pathname === "/about-us";
    if (href.startsWith("/services")) return pathname.startsWith("/services");
    if (href === "/locations") return pathname.startsWith("/locations");
    return pathname === href;
  };

  return (
    <header className={`corporate-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="corporate-navbar-container">
        {/* Brand Logo & Tagline */}
        <div className="navbar-brand-group">
          <Link href="/" className="navbar-brand-link" aria-label="The Corporate Hub Home">
            <Image
              src={logoImg}
              alt="The Corporate Hub Logo"
              width={46}
              height={46}
              priority
              className="navbar-brand-icon"
            />
            <div className="navbar-brand-text-block">
              <span className="navbar-brand-name">The Corporate Hub</span>
              <span className="navbar-brand-tagline">CA • CS • CMA Advisory</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-menu" aria-label="Primary Navigation">
          <ul className="nav-menu-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-menu-link ${isActiveLink(link.href) ? "active" : ""}`}
                >
                  <span>{link.label}</span>
                  {isActiveLink(link.href) && <span className="active-dot" aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions: WhatsApp + Consultation Button */}
        <div className="navbar-desktop-actions">
          <a
            href="https://wa.me/918866901544"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-whatsapp-btn"
            aria-label="Direct WhatsApp Consultation"
          >
            <FaWhatsapp className="whatsapp-btn-icon" aria-hidden="true" />
            <span className="whatsapp-btn-text">WhatsApp</span>
          </a>

          <Link href="/contact" className="navbar-consult-btn" aria-label="Consult Our Specialists">
            <span>Consult Specialists</span>
            <FiArrowRight className="btn-arrow-icon" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-brand">
                <Image src={logoImg} alt="Corporate Hub" width={38} height={38} />
                <span className="mobile-brand-title">The Corporate Hub</span>
              </div>
              <button
                type="button"
                className="mobile-drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                <FiX size={22} />
              </button>
            </div>

            <nav className="mobile-drawer-nav" aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`mobile-nav-link ${isActiveLink(link.href) ? "active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-drawer-actions">
              <Link href="/contact" className="mobile-drawer-cta-primary">
                <span>Book Consultation</span>
                <FiArrowRight />
              </Link>

              <a
                href="https://wa.me/918866901544"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-drawer-whatsapp"
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp: +91 88669 01544</span>
              </a>

              <a href="tel:+918866901544" className="mobile-drawer-call">
                <FiPhone size={16} />
                <span>Call Direct Support</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
