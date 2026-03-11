import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Solution — AI Governance Gateway",
  description:
    "A deterministic AI governance gateway for real-time evaluation, deterministic decisions, and immutable records. Make AI deployment responsible and decidable.",
  keywords: [
    "AI governance gateway",
    "deterministic AI decisioning",
    "real-time AI evaluation",
    "AI compliance enforcement",
    "immutable audit trails",
    "AI trust infrastructure",
  ],
  openGraph: {
    url: `${siteUrl}/solution`,
    title: "Solution — AI Governance Gateway | regX AI",
    description:
      "Real-time evaluation, deterministic decisions, and immutable records for enterprise AI governance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solution — AI Governance Gateway | regX AI",
    description:
      "Real-time evaluation, deterministic decisions, and immutable records for enterprise AI governance.",
  },
  alternates: { canonical: `${siteUrl}/solution` },
};

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solution" },
        ]}
      />
      {children}
    </>
  );
}
