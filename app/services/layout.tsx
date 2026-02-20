import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Services",
  description:
    "We work with organizations at different stages of their AI journey to enable responsible development and deployment at scale. Governance, regulatory alignment, and pilot-to-production enablement.",
  openGraph: {
    url: `${siteUrl}/services`,
    title: "Services | regX AI",
    description:
      "Governance system implementation, AI lifecycle mapping, regulatory alignment, and pilot-to-production enablement for responsible AI.",
  },
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
