import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";
import { JsonLd } from "../components/JsonLd";
import { faqs } from "../../content/faq";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "FAQ — AI Governance Gateway Questions & Answers",
  description:
    "Frequently asked questions about the regX AI governance gateway: product capability, compliance, technical details, and getting started.",
  keywords: [
    "AI governance FAQ",
    "AI compliance questions",
    "AI gateway FAQ",
    "deterministic AI FAQ",
    "AI trust questions",
  ],
  openGraph: {
    url: `${siteUrl}/faq`,
    title: "FAQ — AI Governance Gateway | regX AI",
    description:
      "Answers to common questions about AI governance, compliance, and the regX AI gateway.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — AI Governance Gateway | regX AI",
    description:
      "Answers to common questions about AI governance, compliance, and the regX AI gateway.",
  },
  alternates: { canonical: `${siteUrl}/faq` },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.en.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ" },
        ]}
      />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
