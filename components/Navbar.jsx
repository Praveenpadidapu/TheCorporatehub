"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/auth/actions";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar({ user }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (pathname === "/login" || pathname === "/signup" || pathname === "/register") {
    return null;
  }

  return (
    <header className={`main-navbar ${isHome ? "is-home" : ""}`}>
      <div className="navbar-container">
        {/* Top Left Prominent Logo - Hidden on Home */}
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

        {/* Top Right Auth */}
        <div className="navbar-auth">
          {user ? (
            <div className="navbar-auth-group">
              <span className={`navbar-user-name ${isHome ? "is-home" : ""}`}>
                {user.user_metadata?.full_name || user.email}
              </span>
              <form action={logout}>
                <button type="submit" className="nav-logout-btn">Logout</button>
              </form>
            </div>
          ) : (
            <div className="navbar-auth-group">
              <Link href="/login" className="nav-login-btn">Log in</Link>
              <Link href="/signup" className="nav-register-btn">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
