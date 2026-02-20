import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with regX AI. Discuss how we can help your organization move from AI experimentation to compliant production.",
  openGraph: {
    url: `${siteUrl}/contact`,
    title: "Contact | regX AI",
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
  return children;
}
