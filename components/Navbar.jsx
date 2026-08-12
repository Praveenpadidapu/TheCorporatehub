"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/auth/actions";
import "./Navbar.css";

export default function Navbar({ user }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="main-navbar" style={{ background: isHome ? 'transparent' : '#ffffff', borderBottom: isHome ? 'none' : '1px solid #e5e7eb', position: isHome ? 'absolute' : 'sticky', width: '100%' }}>
      <div className="navbar-container" style={{ justifyContent: 'space-between' }}>
        {/* Top Left Prominent Logo - Hidden on Home since Hero has it */}
        <div style={{ opacity: isHome ? 0 : 1, pointerEvents: isHome ? 'none' : 'auto' }}>
          <Link href="/" className="navbar-brand" aria-label="Corporate Hub Home">
            <span className="navbar-brand-text">Corporate Hub</span>
          </Link>
        </div>

        {/* Top Right Auth */}
        <div className="navbar-auth">
          {user ? (
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: isHome ? 'white' : '#64748b', fontWeight: '500' }}>
                {user.user_metadata?.full_name || user.email}
              </span>
              <form action={logout}>
                <button type="submit" className="nav-logout-btn" style={{ color: isHome ? 'white' : 'inherit' }}>Logout</button>
              </form>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Link href="/login" className="nav-login-btn" style={{ color: isHome ? 'white' : 'inherit' }}>Login</Link>
              <Link href="/register" className="nav-register-btn" style={{ background: isHome ? 'white' : '#2563eb', color: isHome ? '#193563' : 'white', padding: '8px 16px', borderRadius: '6px', fontWeight: '500', textDecoration: 'none' }}>Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
