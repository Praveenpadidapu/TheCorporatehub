"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiArrowLeft, FiAlertCircle, FiCheckCircle, FiMail } from "react-icons/fi";
import { requestPasswordReset } from "@/app/auth/actions";
import "../login/login.css";

function ForgotPasswordForm() {
  const searchParams = useSearchParams();
  const serverErrorMessage = searchParams ? searchParams.get("message") : null;
  const isSuccess = searchParams ? searchParams.get("success") === "true" : false;
  const sentEmail = searchParams ? searchParams.get("email") : "";

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    if (!email.trim()) {
      e.preventDefault();
      setErrorMessage("Please enter your registered email address.");
      return;
    }
    setErrorMessage("");
    setIsPending(true);
  };

  const displayError = errorMessage || serverErrorMessage;

  return (
    <div className="auth-card">
      <h1 className="auth-title">FORGOT PASSWORD</h1>
      <p className="auth-subtitle">
        Enter your email address and we&apos;ll send you instructions to reset your password.
      </p>

      {displayError && (
        <div className="auth-error-message" role="alert">
          <FiAlertCircle />
          <span>{displayError}</span>
        </div>
      )}

      {isSuccess ? (
        <div className="auth-success-state" style={{ textAlign: "center" }}>
          <div className="auth-success-message">
            <FiCheckCircle />
            <span>Reset link sent to <strong>{sentEmail || "your email"}</strong>!</span>
          </div>
          <p style={{ fontSize: "0.92rem", color: "#64748b", margin: "16px 0 24px", lineHeight: "1.5" }}>
            Please check your inbox (and spam folder) for the password reset email from <strong>Corporate Hub</strong>.
          </p>
          <Link href="/login" className="auth-button" style={{ textDecoration: "none" }}>
            Return to Log In
          </Link>
        </div>
      ) : (
        <form action={requestPasswordReset} onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button" disabled={isPending}>
            {isPending ? "Sending Reset Email..." : "Send Reset Link"}
          </button>
        </form>
      )}

      <p className="auth-redirect">
        Remember your password? <Link href="/login">Log in</Link>
      </p>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <div className="auth-container">
      <Link href="/login" className="back-to-home">
        <FiArrowLeft size={16} /> Back to Log In
      </Link>

      <Suspense fallback={
        <div className="auth-card">
          <h1 className="auth-title">FORGOT PASSWORD</h1>
          <p className="auth-subtitle">Loading...</p>
        </div>
      }>
        <ForgotPasswordForm />
      </Suspense>
    </div>
  );
}
