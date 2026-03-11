export const siteName = "regX AI";

export const footerTagline =
  "Infrastructure for enforcing AI trust and deterministic decisioning.";

export const footerPages: { href: string; label: string }[] = [
  { href: "/solution", label: "Solution" },
  { href: "/services", label: "Services" },
  { href: "/regulatory", label: "Regulatory" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact" },
];

export const contactEmail = "business@regxai.com";

export const twitterUrl = "https://x.com/regX_AI";

export interface OfficeLocation {
  city: string;
  address: string;
  region: string;
  country: string;
  comingSoon?: boolean;
}

export const offices: OfficeLocation[] = [
  {
    city: "Bengaluru",
    address: "Indraprastha, HSR Layout, Sector 7",
    region: "Karnataka",
    country: "India",
  },
  {
    city: "Germany",
    address: "",
    region: "",
    country: "Germany",
    comingSoon: true,
  },
];

export const copyright = "© 2026 regX AI. All rights reserved.";

export const builtForTagline = "Built for responsible deployment of agentic AI.";
