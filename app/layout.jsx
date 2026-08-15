import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CorporateFooter from "@/components/CorporateFooter";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { createClient } from '@/utils/supabase/server';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thecorporatehub.in"),
  title: "Corporate Hub",
  description: "Corporate Hub Services - Legal, Tax, Compliance & Business Registration Solutions",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default async function RootLayout({ children }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
        <Navbar user={user} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}

