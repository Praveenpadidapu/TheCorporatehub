"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "./PageTransition.css";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition-container">
      {children}
    </div>
  );
}
