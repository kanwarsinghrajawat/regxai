import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Contact — Get in Touch with regX AI",
  description:
    "Get in touch with regX AI. Discuss how we can help your organization move from AI experimentation to compliant production with deterministic AI governance.",
  keywords: [
    "contact regX AI",
    "AI governance demo",
    "AI compliance consultation",
    "enterprise AI governance",
  ],
  openGraph: {
    url: `${siteUrl}/contact`,
    title: "Contact — Get in Touch | regX AI",
    description:
      "Get in touch with regX AI for AI trust infrastructure and deterministic decisioning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Get in Touch | regX AI",
    description:
      "Get in touch with regX AI for AI trust infrastructure and deterministic decisioning.",
  },
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
      />
      {children}
    </>
  );
}
