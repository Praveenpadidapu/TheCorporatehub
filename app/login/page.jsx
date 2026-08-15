"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { login } from "@/app/auth/actions";
import { createClient } from "@/utils/supabase/client";
import "./login.css";

function LoginForm() {
  const searchParams = useSearchParams();
  const serverErrorMessage = searchParams ? searchParams.get("message") : null;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const displayError = errorMessage || serverErrorMessage;

  return (
    <div className="auth-card">
      <h1 className="auth-title">WELCOME BACK</h1>
      <p className="auth-subtitle">Log in to your Corporate Hub account</p>

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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-button">Log In</button>
      </form>

      <p className="auth-redirect">
        Don't have an account? <Link href="/signup">Sign up</Link>
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
