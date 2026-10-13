"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * ProfileAvatar
 * Ultra-resilient avatar component for founders and team members.
 * Supports Next.js Image optimization with smooth skeleton loading,
 * and seamlessly falls back to a luxury corporate monogram card
 * if the image source is missing or fails to load.
 */
export default function ProfileAvatar({
  src,
  alt,
  name = "Professional",
  credentials = "",
  aspectRatio = "4/5",
  className = "",
  priority = false,
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Derive initials from name (e.g., "CS Dhaval Gohel" -> "DG" or "CS")
  const getInitials = (fullName) => {
    if (!fullName) return "CH";
    const parts = fullName
      .replace(/^(CS|CA|CMA|Adv\.|Dr\.)\s+/i, "")
      .trim()
      .split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0] ? parts[0].slice(0, 2).toUpperCase() : "CH";
  };

  const initials = getInitials(name);
  const showFallback = !src || hasError;

  return (
    <div
      className={`profile-avatar-container ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt || `${name} profile portrait`}
    >
      {!showFallback ? (
        <>
          {/* Skeleton loader placeholder while loading */}
          {!isLoaded && (
            <div
              className="profile-avatar-skeleton"
              aria-hidden="true"
            />
          )}

          <Image
            src={src}
            alt={alt || `${name} portrait`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            priority={priority}
            className={`profile-avatar-img ${isLoaded ? "loaded" : "loading"}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{ objectFit: "cover" }}
          />
        </>
      ) : (
        /* Executive Corporate Monogram Fallback */
        <div className="profile-avatar-fallback">
          <div className="fallback-pattern" aria-hidden="true" />
          <div className="fallback-badge-ring">
            <span className="fallback-initials">{initials}</span>
          </div>
          {credentials && (
            <span className="fallback-credential-pill">{credentials}</span>
          )}
          <span className="fallback-brand-tag">The Corporate Hub</span>
        </div>
      )}
    </div>
  );
}
