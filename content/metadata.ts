const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://regxai.com";

export const siteName = "regX AI";
export const defaultTitle =
  "regX AI | Infrastructure for enforcing AI trust and deterministic decisioning";
export const titleTemplate = "%s | regX AI";
export const defaultDescription =
  "Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle. Determines whether AI actions are responsible and compliant before agents and models deploy, act, respond, or predict.";
export const keywords = [
  "AI trust",
  "AI governance",
  "AI compliance",
  "deterministic AI",
  "AI decisioning",
  "AI risk management",
  "AI safety",
  "AI regulation",
  "enterprise AI",
  "AI infrastructure",
];
export const ogTitle = "regX AI | Infrastructure for enforcing AI trust";
export const ogDescription =
  "Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle.";
export const ogImageAlt = "regX AI - AI Trust Infrastructure";

/** Absolute URL for OG/Twitter image (required for social crawlers). */
export function getAbsoluteOgImageUrl(): string {
  return `${siteUrl}/api/og`;
}

export function getSiteUrl(): string {
  return siteUrl;
}
