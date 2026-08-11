"use client";

import React from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="main-navbar">
      <div className="navbar-container">
        {/* Top Left Prominent Logo */}
        <Link href="/" className="navbar-brand" aria-label="Corporate Hub Home">
          <img src="/logo.png" alt="Corporate Hub" className="navbar-logo" />
        </Link>
      </div>
    </header>
  );
}
