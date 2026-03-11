import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";
import { BreadcrumbJsonLd } from "../components/BreadcrumbJsonLd";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using regX AI services. Please read these terms carefully before using our AI governance gateway and related services.",
  openGraph: {
    url: `${siteUrl}/terms`,
    title: "Terms and Conditions | regX AI",
    description:
      "Legal terms governing the use of regX AI services and the AI governance gateway.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions | regX AI",
    description:
      "Legal terms governing the use of regX AI services and the AI governance gateway.",
  },
  alternates: { canonical: `${siteUrl}/terms` },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Terms and Conditions" },
        ]}
      />
      {children}
    </>
  );
}
