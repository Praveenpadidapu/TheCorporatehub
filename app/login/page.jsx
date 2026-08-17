"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiArrowLeft, FiAlertCircle, FiCheckCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { login } from "@/app/auth/actions";
import { createClient } from "@/utils/supabase/client";
import "./login.css";

function LoginForm() {
  const searchParams = useSearchParams();
  const serverMessage = searchParams ? searchParams.get("message") : null;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    if (!email.trim() || !password) {
      e.preventDefault();
      setErrorMessage("Please fill in both your email address and password.");
      return;
    }
    setErrorMessage("");
  };

  const handleGoogleLogin = async () => {
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
      <h1 className="auth-title">WELCOME BACK</h1>
      <p className="auth-subtitle">Log in to your Corporate Hub account</p>

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

      <button type="button" className="google-auth-button" onClick={handleGoogleLogin}>
        <FcGoogle size={20} />
        <span>Continue with Google</span>
      </button>

      <div className="auth-divider">
        <span>or</span>
      </div>

      <form action={login} onSubmit={handleSubmit} className="auth-form">
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
          <div className="label-wrapper">
            <label htmlFor="password">Password</label>
            <Link href="/forgot-password" className="forgot-password-link">
              Forgot password?
            </Link>
          </div>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
        </div>

        <button type="submit" className="auth-button">Log In</button>
      </form>

      <p className="auth-redirect">
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default function Login() {
  return (
    <div className="auth-container">
      <Link href="/" className="back-to-home">
        <FiArrowLeft size={16} /> Back to Home
      </Link>

      <Suspense fallback={
        <div className="auth-card">
          <h1 className="auth-title">WELCOME BACK</h1>
          <p className="auth-subtitle">Loading...</p>
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}
