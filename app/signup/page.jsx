"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";
import { signup } from "@/app/auth/actions";
import "../login/login.css";

function SignupForm() {
  const searchParams = useSearchParams();
  const serverErrorMessage = searchParams ? searchParams.get("message") : null;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    if (!name.trim()) {
      e.preventDefault();
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!email.trim()) {
      e.preventDefault();
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      e.preventDefault();
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      e.preventDefault();
      setErrorMessage("Passwords do not match. Please re-enter matching passwords.");
      return;
    }
    setErrorMessage("");
  };

  const displayError = errorMessage || serverErrorMessage;

  return (
    <div className="auth-card">
      <h1 className="auth-title">CREATE ACCOUNT</h1>
      <p className="auth-subtitle">Join Corporate Hub today</p>

      {displayError && (
        <div className="auth-error-message" role="alert">
          <FiAlertCircle />
          <span>{displayError}</span>
        </div>
      )}

      <form action={signup} onSubmit={handleSubmit} className="auth-form">
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <button type="submit" className="auth-button">Sign Up</button>
      </form>

      <p className="auth-redirect">
        Already have an account? <Link href="/login">Log in</Link>
      </p>
    </div>
  );
}

export default function Signup() {
  return (
    <div className="auth-container">
      <Link href="/" className="back-to-home">
        <FiArrowLeft size={16} /> Back to Home
      </Link>

      <Suspense fallback={
        <div className="auth-card">
          <h1 className="auth-title">CREATE ACCOUNT</h1>
          <p className="auth-subtitle">Loading...</p>
        </div>
      }>
        <SignupForm />
      </Suspense>
    </div>
  );
}
