"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiArrowLeft, FiAlertCircle, FiCheckCircle, FiEye, FiEyeOff, FiCheck, FiX } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { signup } from "@/app/auth/actions";
import { createClient } from "@/utils/supabase/client";
import AuthLayout from "@/components/AuthLayout";
import "../login/login.css";

function SignupForm() {
  const searchParams = useSearchParams();
  const serverMessage = searchParams ? searchParams.get("message") : null;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const hasConfirmValue = confirmPassword.length > 0;
  const isMatched = hasConfirmValue && password === confirmPassword;
  const isMismatched = hasConfirmValue && password !== confirmPassword;
  const isMinLength = password.length >= 6;

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

  const handleGoogleSignup = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setErrorMessage(error.message);
    }
  };

  const isSuccessMessage = serverMessage && (
    serverMessage.toLowerCase().includes("success") ||
    serverMessage.toLowerCase().includes("verified") ||
    serverMessage.toLowerCase().includes("updated")
  );

  const displayError = errorMessage || (!isSuccessMessage ? serverMessage : null);
  const displaySuccess = isSuccessMessage ? serverMessage : null;

  return (
    <div className="auth-card">
      <h1 className="auth-title">CREATE ACCOUNT</h1>
      <p className="auth-subtitle">Join Corporate Hub today</p>

      {displaySuccess && (
        <div className="auth-success-message" role="alert">
          <FiCheckCircle />
          <span>{displaySuccess}</span>
        </div>
      )}

      {displayError && (
        <div className="auth-error-message" role="alert">
          <FiAlertCircle />
          <span>{displayError}</span>
        </div>
      )}

      <button type="button" className="google-auth-button" onClick={handleGoogleSignup}>
        <FcGoogle size={20} />
        <span>Continue with Google</span>
      </button>

      <div className="auth-divider">
        <span>or</span>
      </div>

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
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
          {password.length > 0 && !isMinLength && (
            <div className="match-status-badge mismatched">
              <FiX size={14} /> Password must be at least 6 characters
            </div>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              className={isMatched ? "input-matched" : isMismatched ? "input-mismatched" : ""}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>

          {hasConfirmValue && (
            <div className={`match-status-badge ${isMatched ? "matched" : "mismatched"}`}>
              {isMatched ? (
                <>
                  <FiCheck size={14} /> Passwords match
                </>
              ) : (
                <>
                  <FiX size={14} /> Passwords do not match
                </>
              )}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="auth-button"
          disabled={isMismatched || (password.length > 0 && !isMinLength)}
        >
          Sign Up
        </button>
      </form>

      <p className="auth-redirect">
        Already have an account? <Link href="/login">Log in</Link>
      </p>
    </div>
  );
}

export default function Signup() {
  return (
    <AuthLayout backLink="/" backText="Back to Home">
      <Suspense fallback={
        <div className="auth-card">
          <h1 className="auth-title">CREATE ACCOUNT</h1>
          <p className="auth-subtitle">Loading...</p>
        </div>
      }>
        <SignupForm />
      </Suspense>
    </AuthLayout>
  );
}

