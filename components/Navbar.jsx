"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  // Hide Navbar on homepage only
  if (pathname === "/") {
    return null;
  }

  return (
    <header className="main-navbar">
      <div className="navbar-container">
        {/* Top Left Prominent Logo */}
        <Link href="/" className="navbar-brand" aria-label="Corporate Hub Home">
          <span className="navbar-brand-text">Corporate Hub</span>
        </Link>
      </div>
    </header>
  );
}
