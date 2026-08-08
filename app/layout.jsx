import "./globals.css";
import CorporateFooter from "@/components/CorporateFooter";

export const metadata = {
  title: "Corporate Hub",
  description: "Corporate Hub Services",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}

