import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about the regX AI governance gateway: product capability, compliance, technical details, and getting started.",
  openGraph: {
    url: `${siteUrl}/faq`,
    title: "FAQ | regX AI",
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
  return children;
}
