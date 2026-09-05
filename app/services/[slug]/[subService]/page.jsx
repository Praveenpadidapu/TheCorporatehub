import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/service-detail/ServiceDetailPage";
import CorporateFooter from "@/components/CorporateFooter";
import { getSubServiceDetail } from "@/data/serviceDetailsData";
import { servicesData } from "@/data/servicesData";

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug, subService } = resolvedParams;

  const detail = getSubServiceDetail(subService);
  if (!detail) {
    const parentCategory = servicesData.find((s) => s.slug === slug);
    return {
      title: parentCategory ? `${parentCategory.title} | Corporate Hub` : "Service Details | Corporate Hub",
      description: "Comprehensive corporate registration, tax compliance, and legal services across India."
    };
  }

  const title = `${detail.name} | Corporate Hub`;
  const description = detail.heroIntro || detail.whatIs || "Complete corporate legal and compliance services.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website"
    }
  };
}

export default async function SubServicePage({ params }) {
  const resolvedParams = await params;
  const { slug, subService } = resolvedParams;

  let detail = getSubServiceDetail(subService);

  // Fallback lookup if id was slightly different or from servicesData
  if (!detail) {
    const parentCategory = servicesData.find((s) => s.slug === slug);
    const subList = parentCategory?.accordionData?.onClickServices?.subServices || [];
    const matchedSub = subList.find(
      (s) => s.id === subService || s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === subService
    );

    if (matchedSub) {
      detail = getSubServiceDetail(matchedSub.id);
    }
  }

  if (!detail) {
    notFound();
  }

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <ServiceDetailPage data={detail} categorySlug={slug} />
      </div>
      <CorporateFooter />
    </main>
  );
}
