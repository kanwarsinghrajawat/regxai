import { getSiteUrl } from "../../content/metadata";
import { contactEmail } from "../../content/footer";
import { JsonLd } from "./JsonLd";

export function StructuredData() {
  const siteUrl = getSiteUrl();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "regX AI",
    description:
      "Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ["https://x.com/regX_AI"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: contactEmail,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Indraprastha, HSR Layout, Sector 7",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
    },
    knowsAbout: [
      "AI Governance",
      "AI Compliance",
      "AI Trust Infrastructure",
      "Deterministic Decisioning",
      "EU AI Act",
      "GDPR",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "regX AI",
    url: siteUrl,
    description:
      "Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle",
    publisher: {
      "@type": "Organization",
      name: "regX AI",
      url: siteUrl,
    },
    inLanguage: "en-US",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "regX AI Governance Gateway",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Deterministic AI governance gateway that evaluates AI actions in real-time to enforce compliance before execution.",
    url: siteUrl,
    provider: {
      "@type": "Organization",
      name: "regX AI",
    },
    featureList: [
      "Real-time AI action evaluation",
      "Deterministic decisioning",
      "Immutable audit trails",
      "EU AI Act compliance",
      "GDPR compliance",
      "API-based integration",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/OnlineOnly",
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={softwareSchema} />
    </>
  );
}
