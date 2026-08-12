import "./globals.css";
import Navbar from "@/components/Navbar";
import CorporateFooter from "@/components/CorporateFooter";
import { createClient } from '@/utils/supabase/server';

export const metadata = {
  title: "Corporate Hub",
  description: "Corporate Hub Services",
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
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
        <Navbar user={user} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </body>
    </html>
  );
}

