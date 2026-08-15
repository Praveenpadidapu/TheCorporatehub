"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiArrowLeft, FiAlertCircle, FiCheckCircle, FiShield, FiRefreshCw } from "react-icons/fi";
import { verifyOtp, resendOtp } from "@/app/auth/actions";
import "../login/login.css";

function VerifyOtpForm() {
  const searchParams = useSearchParams();
  const email = searchParams ? searchParams.get("email") || "" : "";
  const type = searchParams ? searchParams.get("type") || "signup" : "signup";
  const serverErrorMessage = searchParams ? searchParams.get("message") : null;
  const serverSuccessMessage = searchParams ? searchParams.get("success") : null;

  const OTP_LENGTH = 8;
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(60);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Cooldown countdown timer for Resend OTP button
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleChange = (index, value) => {
    const cleanValue = value.replace(/[^0-9]/g, "");
    if (!cleanValue && value !== "") return;

    const newDigits = [...digits];
    newDigits[index] = cleanValue.slice(-1);
    setDigits(newDigits);
    setErrorMessage("");

    // Auto-focus next input box
    if (cleanValue && index < OTP_LENGTH - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, OTP_LENGTH);
    if (!pasteData) return;

    const newDigits = Array(OTP_LENGTH).fill("");
    for (let i = 0; i < pasteData.length; i++) {
      newDigits[i] = pasteData[i];
    }
    setDigits(newDigits);
    setErrorMessage("");

    const nextIndex = Math.min(pasteData.length, OTP_LENGTH - 1);
    inputRefs[nextIndex].current?.focus();
  };

  const handleSubmit = (e) => {
    const fullCode = digits.join("").trim();
    if (fullCode.length < 6) {
      e.preventDefault();
      setErrorMessage("Please enter your 6 to 8 digit verification code.");
      return;
    }
    setIsPending(true);
  };

  const displayError = errorMessage || serverErrorMessage;
  const fullOtpCode = digits.join("").trim();

  return (
    <div className="auth-card">
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <div style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: "#ebf8ff",
          color: "#0284c7",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem"
        }}>
          <FiShield />
        </div>
      </div>

      <h1 className="auth-title">ENTER OTP CODE</h1>
      <p className="auth-subtitle">
        We sent a verification code to<br />
        <strong style={{ color: "#193563" }}>{email || "your registered email"}</strong>
      </p>

      {displayError && (
        <div className="auth-error-message" role="alert">
          <FiAlertCircle />
          <span>{displayError}</span>
        </div>
      )}

      {serverSuccessMessage && (
        <div className="auth-success-message" role="alert">
          <FiCheckCircle />
          <span>{serverSuccessMessage}</span>
        </div>
      )}

      <form action={verifyOtp} onSubmit={handleSubmit} className="auth-form">
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="type" value={type} />
        <input type="hidden" name="token" value={fullOtpCode} />

        <div className="otp-inputs-flex" onPaste={handlePaste}>
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              className={`otp-box ${digit ? "filled" : ""}`}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              autoFocus={index === 0}
            />
          ))}
        </div>

        <button
          type="submit"
          className="auth-button"
          disabled={isPending || fullOtpCode.length < 6}
        >
          {isPending ? "Verifying OTP..." : "Verify & Continue"}
        </button>
      </form>

      {/* Resend Code Section */}
      <form action={resendOtp} className="otp-resend-container">
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="type" value={type} />

        <span>Didn&apos;t receive the code?</span>
        <button
          type="submit"
          className="resend-btn"
          disabled={resendCooldown > 0}
          onClick={() => setResendCooldown(60)}
        >
          {resendCooldown > 0 ? (
            `Resend in ${resendCooldown}s`
          ) : (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <FiRefreshCw size={12} /> Resend OTP
            </span>
          )}
        </button>
      </form>

      <p className="auth-redirect">
        Wrong email? <Link href="/login">Back to Log In</Link>
      </p>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <div className="auth-container">
      <Link href="/login" className="back-to-home">
        <FiArrowLeft size={16} /> Back to Log In
      </Link>

      <Suspense fallback={
        <div className="auth-card">
          <h1 className="auth-title">ENTER OTP CODE</h1>
          <p className="auth-subtitle">Loading...</p>
        </div>
      }>
        <VerifyOtpForm />
      </Suspense>
    </div>
  );
}
