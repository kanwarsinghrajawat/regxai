import type { Locale } from "../app/components/LanguageProvider";

type NavItem = { id: string; label: string; path: string };

export const languageLabel: Record<Locale, string> = {
  en: "Language",
  de: "Sprache",
  fr: "Langue",
  es: "Idioma",
};

export const navItems: Record<Locale, NavItem[]> = {
  en: [
    { id: "about", label: "About", path: "/" },
    { id: "solution", label: "Solution", path: "/solution" },
    { id: "services", label: "Services", path: "/services" },
    { id: "regulatory", label: "Regulatory", path: "/regulatory" },
    { id: "faq", label: "FAQ", path: "/faq" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],
  de: [
    { id: "about", label: "Über uns", path: "/" },
    { id: "solution", label: "Lösung", path: "/solution" },
    { id: "services", label: "Dienstleistungen", path: "/services" },
    { id: "regulatory", label: "Regulierung", path: "/regulatory" },
    { id: "faq", label: "FAQ", path: "/faq" },
    { id: "contact", label: "Kontakt", path: "/contact" },
  ],
  fr: [
    { id: "about", label: "À propos", path: "/" },
    { id: "solution", label: "Solution", path: "/solution" },
    { id: "services", label: "Services", path: "/services" },
    { id: "regulatory", label: "Réglementation", path: "/regulatory" },
    { id: "faq", label: "FAQ", path: "/faq" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],
  es: [
    { id: "about", label: "Sobre nosotros", path: "/" },
    { id: "solution", label: "Solución", path: "/solution" },
    { id: "services", label: "Servicios", path: "/services" },
    { id: "regulatory", label: "Regulación", path: "/regulatory" },
    { id: "faq", label: "FAQ", path: "/faq" },
    { id: "contact", label: "Contacto", path: "/contact" },
  ],
};
