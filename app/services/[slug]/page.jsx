import React from "react";
import ServiceAccordion from "@/components/ServiceAccordion";
import CorporateFooter from "@/components/CorporateFooter";
import { servicesData } from "@/data/servicesData";

// Dynamic metadata generation for SEO best practices
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData.find((s) => s.slug === slug);
  const title = service ? `${service.title} | Corporate Hub` : "Service Details | Corporate Hub";
  const description = service ? service.shortDescription : "Detailed info and services accordion.";

  return {
    title,
    description,
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <ServiceAccordion currentSlug={slug} />
      </div>
      <CorporateFooter />
    </main>
  );
}

