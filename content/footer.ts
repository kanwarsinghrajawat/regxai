import type { Locale } from "../app/components/LanguageProvider";

/* ── Language-independent exports ── */

export const siteName = "regX AI";
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
  { city: "Bengaluru", address: "Indraprastha, HSR Layout, Sector 7", region: "Karnataka", country: "India" },
  { city: "Germany", address: "", region: "", country: "Germany", comingSoon: true },
];

/* ── Translated exports ── */

export const footerTagline: Record<Locale, string> = {
  en: "Infrastructure for enforcing AI trust and deterministic decisioning.",
  de: "Infrastruktur zur Durchsetzung von KI-Vertrauen und deterministischer Entscheidungsfindung.",
  fr: "Infrastructure pour garantir la confiance dans l'IA et la prise de décision déterministe.",
  es: "Infraestructura para garantizar la confianza en la IA y la toma de decisiones determinista.",
};

export const footerPages: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: "/solution", label: "Solution" },
    { href: "/services", label: "Services" },
    { href: "/regulatory", label: "Regulatory" },
    { href: "/faq", label: "FAQ" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/contact", label: "Contact" },
  ],
  de: [
    { href: "/solution", label: "Lösung" },
    { href: "/services", label: "Dienstleistungen" },
    { href: "/regulatory", label: "Regulierung" },
    { href: "/faq", label: "FAQ" },
    { href: "/terms", label: "AGB" },
    { href: "/contact", label: "Kontakt" },
  ],
  fr: [
    { href: "/solution", label: "Solution" },
    { href: "/services", label: "Services" },
    { href: "/regulatory", label: "Réglementation" },
    { href: "/faq", label: "FAQ" },
    { href: "/terms", label: "Conditions générales" },
    { href: "/contact", label: "Contact" },
  ],
  es: [
    { href: "/solution", label: "Solución" },
    { href: "/services", label: "Servicios" },
    { href: "/regulatory", label: "Regulación" },
    { href: "/faq", label: "Preguntas frecuentes" },
    { href: "/terms", label: "Términos y condiciones" },
    { href: "/contact", label: "Contacto" },
  ],
};

export const footerNavigateLabel: Record<Locale, string> = {
  en: "Navigate",
  de: "Navigation",
  fr: "Navigation",
  es: "Navegación",
};

export const footerContactLabel: Record<Locale, string> = {
  en: "Contact",
  de: "Kontakt",
  fr: "Contact",
  es: "Contacto",
};

export const footerFollowUs: Record<Locale, string> = {
  en: "Follow us",
  de: "Folgen Sie uns",
  fr: "Suivez-nous",
  es: "Síguenos",
};

export const footerSoon: Record<Locale, string> = {
  en: "Soon",
  de: "Bald",
  fr: "Bientôt",
  es: "Próximamente",
};

export const copyright: Record<Locale, string> = {
  en: "© 2026 regX AI. All rights reserved.",
  de: "© 2026 regX AI. Alle Rechte vorbehalten.",
  fr: "© 2026 regX AI. Tous droits réservés.",
  es: "© 2026 regX AI. Todos los derechos reservados.",
};

export const builtForTagline: Record<Locale, string> = {
  en: "Built for responsible deployment of agentic AI.",
  de: "Entwickelt für den verantwortungsvollen Einsatz agentischer KI.",
  fr: "Conçu pour le déploiement responsable de l'IA agentique.",
  es: "Diseñado para el despliegue responsable de la IA agéntica.",
};
