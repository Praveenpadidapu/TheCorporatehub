import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CorporateFooter from "@/components/CorporateFooter";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { createClient } from "@/utils/supabase/server";
import PageTransition from "@/components/PageTransition";

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
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "2471438943377182";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />

        {/* Global Meta Pixel Code (Facebook Ads Tracking) */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
        <Navbar user={user} />
        <PageTransition>
          {children}
        </PageTransition>
        <ScrollToTop />
      </body>
    </html>
  );
}
