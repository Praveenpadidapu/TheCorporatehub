"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiArrowLeft, FiAlertCircle, FiEye, FiEyeOff, FiCheck, FiX } from "react-icons/fi";
import { updatePassword } from "@/app/auth/actions";
import "../login/login.css";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const serverErrorMessage = searchParams ? searchParams.get("message") : null;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const hasConfirmValue = confirmPassword.length > 0;
  const isMatched = hasConfirmValue && password === confirmPassword;
  const isMismatched = hasConfirmValue && password !== confirmPassword;
  const isMinLength = password.length >= 6;

  const handleSubmit = (e) => {
    if (!password || password.length < 6) {
      e.preventDefault();
      setErrorMessage("New password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      e.preventDefault();
      setErrorMessage("Passwords do not match. Please re-enter matching passwords.");
      return;
    }
    setErrorMessage("");
    setIsPending(true);
  };

  const displayError = errorMessage || serverErrorMessage;

  return (
    <div className="auth-card">
      <h1 className="auth-title">RESET PASSWORD</h1>
      <p className="auth-subtitle">Create a new secure password for your account</p>

      {displayError && (
        <div className="auth-error-message" role="alert">
          <FiAlertCircle />
          <span>{displayError}</span>
        </div>
      )}

      <form action={updatePassword} onSubmit={handleSubmit} className="auth-form">
        <div className="input-group">
          <label htmlFor="password">New Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter new password"
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
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm new password"
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
          disabled={isPending || isMismatched || !isMinLength}
        >
          {isPending ? "Updating Password..." : "Update Password"}
        </button>
      </form>

      <p className="auth-redirect">
        Remember your password? <Link href="/login">Log in</Link>
      </p>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="auth-container">
      <Link href="/login" className="back-to-home">
        <FiArrowLeft size={16} /> Back to Log In
      </Link>

      <Suspense fallback={
        <div className="auth-card">
          <h1 className="auth-title">RESET PASSWORD</h1>
          <p className="auth-subtitle">Loading...</p>
        </div>
      }>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
