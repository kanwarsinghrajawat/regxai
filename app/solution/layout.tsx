import type { Metadata } from "next";
import { getSiteUrl } from "../../content/metadata";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Solution",
  description:
    "We provide a system that makes AI deployment responsible and decidable. Real-time evaluation, deterministic decisions, and immutable records for enterprise AI governance.",
  openGraph: {
    url: `${siteUrl}/solution`,
    title: "Solution | regX AI",
    description:
      "We provide a system that makes AI deployment responsible and decidable. Real-time evaluation, deterministic decisions, and immutable records.",
  },
  alternates: { canonical: `${siteUrl}/solution` },
};

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
