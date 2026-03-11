import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { JsonLd } from "../components/JsonLd";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Services — AI Governance Implementation & Compliance",
  description:
    "Governance system implementation, AI lifecycle mapping, regulatory alignment, and pilot-to-production enablement for responsible AI deployment at scale.",
  keywords: [
    "AI governance implementation",
    "AI lifecycle mapping",
    "regulatory alignment",
    "AI compliance services",
    "pilot to production AI",
    "enterprise AI services",
  ],
  openGraph: {
    url: `${siteUrl}/services`,
    title: "Services — AI Governance & Compliance | regX AI",
    description:
      "Governance implementation, lifecycle mapping, regulatory alignment, and pilot-to-production enablement for responsible AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — AI Governance & Compliance | regX AI",
    description:
      "Governance implementation, lifecycle mapping, regulatory alignment, and pilot-to-production enablement for responsible AI.",
  },
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Governance and Compliance",
    provider: {
      "@type": "Organization",
      name: "regX AI",
      url: siteUrl,
    },
    description:
      "End-to-end AI governance services including system implementation, lifecycle mapping, regulatory alignment, and pilot-to-production enablement.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Governance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Governance System Implementation",
            description:
              "Integrate deterministic decisioning into existing AI workflows and production systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Lifecycle Mapping & Readiness",
            description:
              "Identify where critical AI decisions occur across development, deployment, inference, and production.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Regulatory Alignment & Control Design",
            description:
              "Translate regulatory expectations into enforceable, system-level ERP controls.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pilot-to-Production Enablement",
            description:
              "Help teams move high-value AI use cases from experimentation into compliant production.",
          },
        },
      ],
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services" },
        ]}
      />
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
