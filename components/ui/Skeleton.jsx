import React from "react";
import "./Skeleton.css";

export function Skeleton({ className = "", width, height, borderRadius, style = {} }) {
  const customStyles = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(borderRadius ? { borderRadius } : {}),
    ...style,
  };

  return <div className={`skeleton-shimmer-box ${className}`} style={customStyles} />;
}

export function ServiceCardSkeleton() {
  return (
    <div className="skeleton-card-container">
      <div className="skeleton-card-header">
        <Skeleton width="48px" height="48px" borderRadius="10px" />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          <Skeleton width="60%" height="20px" borderRadius="4px" />
          <Skeleton width="40%" height="14px" borderRadius="4px" />
        </div>
      </div>
      <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <Skeleton width="100%" height="14px" borderRadius="4px" />
        <Skeleton width="90%" height="14px" borderRadius="4px" />
        <Skeleton width="75%" height="14px" borderRadius="4px" />
      </div>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Skeleton width="100px" height="32px" borderRadius="6px" />
        <Skeleton width="80px" height="16px" borderRadius="4px" />
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderBottom: "1px solid #f1f5f9" }}>
      <Skeleton width="30%" height="18px" borderRadius="4px" />
      <Skeleton width="25%" height="18px" borderRadius="4px" />
      <Skeleton width="25%" height="18px" borderRadius="4px" />
      <Skeleton width="20%" height="18px" borderRadius="4px" />
    </div>
  );
}
