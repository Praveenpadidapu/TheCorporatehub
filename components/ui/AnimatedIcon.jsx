"use client";

import React, { useEffect, useState } from "react";

export function AnimatedIcon({ src, fallback, size = 52, primaryColor = "#ffffff", secondaryColor = "#ff6000" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const isLordIconRegistered = () => 
      typeof window !== "undefined" && 
      window.customElements && 
      window.customElements.get("lord-icon");

    if (isLordIconRegistered()) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 0);
    } else {
      const checkTimer = setInterval(() => {
        if (isLordIconRegistered()) {
          setIsLoaded(true);
          clearInterval(checkTimer);
        }
      }, 100);
      return () => clearInterval(checkTimer);
    }
  }, []);

  if (!isLoaded && fallback) {
    return <span style={{ fontSize: `${size * 0.7}px`, color: primaryColor, display: "flex", alignItems: "center", justifyContent: "center" }}>{fallback}</span>;
  }

  return (
    <lord-icon
      src={src}
      trigger="hover"
      colors={`primary:${primaryColor},secondary:${secondaryColor}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    ></lord-icon>
  );
}
