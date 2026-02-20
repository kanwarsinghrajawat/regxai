import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Regulatory",
  description:
    "AI regulation is evolving globally. Our system supports EU AI Act, GDPR, U.S. guidelines, UAE AI & Data Regulations, and other key frameworks for compliant AI deployment.",
  openGraph: {
    url: `${siteUrl}/regulatory`,
    title: "Regulatory | regX AI",
    description:
      "Support for EU AI Act, GDPR, U.S. Federal & State Guidelines, UAE AI & Data Regulations, and global compliance frameworks.",
  },
  alternates: { canonical: `${siteUrl}/regulatory` },
};

export default function RegulatoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
