export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thecorporatehub.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/auth/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
