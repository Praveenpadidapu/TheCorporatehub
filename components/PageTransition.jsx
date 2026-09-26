"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./PageTransition.css";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Immediate scroll reset to top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Frame fallback for async page layout renders
      const frameId = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });

      return () => cancelAnimationFrame(frameId);
    }
  }, [pathname]);

  return (
    <div key={pathname} className="page-transition-container">
      {children}
    </div>
  );
}
