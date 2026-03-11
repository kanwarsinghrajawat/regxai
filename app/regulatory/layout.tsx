import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Regulatory — AI Compliance Across Jurisdictions",
  description:
    "Support for EU AI Act, GDPR, U.S. Federal & State Guidelines, UAE AI & Data Regulations, South Korean AI Act, India DPDP Act, and international frameworks for compliant AI deployment.",
  keywords: [
    "EU AI Act compliance",
    "GDPR AI compliance",
    "AI regulation",
    "AI regulatory compliance",
    "UAE AI regulations",
    "South Korea AI Act",
    "India DPDP Act",
    "global AI governance",
  ],
  openGraph: {
    url: `${siteUrl}/regulatory`,
    title: "Regulatory — AI Compliance Across Jurisdictions | regX AI",
    description:
      "Support for EU AI Act, GDPR, U.S. guidelines, UAE, South Korea, India, and global compliance frameworks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulatory — AI Compliance Across Jurisdictions | regX AI",
    description:
      "Support for EU AI Act, GDPR, U.S. guidelines, UAE, South Korea, India, and global compliance frameworks.",
  },
  alternates: { canonical: `${siteUrl}/regulatory` },
};

export default function RegulatoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Regulatory" },
        ]}
      />
      {children}
    </>
  );
}
