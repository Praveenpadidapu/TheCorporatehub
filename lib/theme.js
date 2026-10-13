/**
 * @file theme.js
 * @description Central Design Tokens & Color Palette for The Corporate Hub.
 * All core brand colors, typography, shadows, and spacing are defined here.
 * Changes made here propagate across the entire website design system.
 */

export const theme = {
  colors: {
    // Primary Brand Palette
    primary: "#0B1F3A",       // Deep navy blue (Headings, Navbar, Footer, Hero sections)
    primaryLight: "#142F54",  // Lighter navy for subtle gradients and cards
    primaryDark: "#061324",   // Darkest navy for footer base and deep contrast

    secondary: "#1D4ED8",     // Royal blue (Interactive elements, links, focus states)
    secondaryLight: "#3B82F6",// Soft royal blue

    accent: "#C9A227",        // Premium gold (Refined accents, badges, highlights, dividers)
    accentHover: "#B38E1E",   // Darker gold on hover
    accentLight: "#FAF3DD",   // Light gold background tint
    accentBorder: "#EAD69A",  // Subtle gold border

    // Backgrounds & Surfaces
    background: "#F8FAFC",    // Soft off-white page background
    surface: "#FFFFFF",       // Pure white card and container surface
    surfaceSubtle: "#F1F5F9", // Slate subtle surface
    surfaceAlt: "#EDF2F7",    // Alternate light background

    // Text & Content
    textPrimary: "#0F172A",   // Dark slate (Headings and high-contrast text)
    textSecondary: "#475569", // Slate gray (Body paragraphs and descriptions)
    textMuted: "#64748B",     // Muted slate (Footnotes, captions, dates)
    textLight: "#CBD5E1",     // Light text on dark surfaces
    textWhite: "#FFFFFF",     // Pure white on navy

    // Borders & Dividers
    border: "#E2E8F0",        // Light slate border
    borderMedium: "#CBD5E1",  // Medium slate border for hover
    borderDark: "#94A3B8",    // Dark slate border

    // Feedback & System States
    success: "#059669",       // Emerald
    successLight: "#ECFDF5",
    warning: "#F59E0B",       // Amber
    warningLight: "#FFFBEB",
    error: "#DC2626",         // Red
    errorLight: "#FEF2F2",
    info: "#0284C7",          // Sky
    infoLight: "#F0F9FF",

    // Brand Specific
    whatsapp: "#25D366",
    whatsappHover: "#1EBE5D",
  },

  typography: {
    fontSans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontDisplay:
      '"Archivo Black", "Bebas Neue", -apple-system, BlinkMacSystemFont, sans-serif',
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(11, 31, 58, 0.05)",
    base: "0 4px 6px -1px rgba(11, 31, 58, 0.07), 0 2px 4px -2px rgba(11, 31, 58, 0.05)",
    md: "0 10px 15px -3px rgba(11, 31, 58, 0.08), 0 4px 6px -4px rgba(11, 31, 58, 0.04)",
    lg: "0 20px 25px -5px rgba(11, 31, 58, 0.1), 0 8px 10px -6px rgba(11, 31, 58, 0.04)",
    hover: "0 20px 35px -10px rgba(11, 31, 58, 0.15)",
    goldGlow: "0 0 20px rgba(201, 162, 39, 0.25)",
  },

  borderRadius: {
    sm: "6px",
    md: "10px",
    lg: "14px",
    xl: "20px",
    full: "9999px",
  },
};

export default theme;
