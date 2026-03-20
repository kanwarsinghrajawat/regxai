import type { Locale } from "../app/components/LanguageProvider";

export const servicesHeroTitle: Record<Locale, string> = {
  en: "Our Services",
  de: "Unsere Dienstleistungen",
  fr: "Nos services",
  es: "Nuestros servicios",
};

export const servicesHeroDescription: Record<Locale, string> = {
  en: "We work with organizations at different stages of their AI journey to enable responsible development and deployment at scale.",
  de: "Wir arbeiten mit Organisationen in verschiedenen Phasen ihrer KI-Reise zusammen, um eine verantwortungsvolle Entwicklung und Bereitstellung in großem Maßstab zu ermöglichen.",
  fr: "Nous accompagnons les organisations à chaque étape de leur parcours en IA pour permettre un développement et un déploiement responsables à grande échelle.",
  es: "Trabajamos con organizaciones en diferentes etapas de su recorrido en IA para posibilitar un desarrollo y despliegue responsables a escala.",
};

export const servicesListConfig = [
  { iconKey: "users" as const },
  { iconKey: "bookOpen" as const },
  { iconKey: "barChart3" as const },
  { iconKey: "headphones" as const },
];

export const servicesListContent: Record<Locale, { title: string; description: string }[]> = {
  en: [
    { title: "Governance system implementation", description: "Integrate deterministic decisioning into existing AI workflows and production systems." },
    { title: "AI lifecycle mapping & readiness", description: "Identify where critical AI decisions occur across development, deployment, inference, and production." },
    { title: "Regulatory alignment & control design", description: "Translate regulatory expectations into enforceable, system-level ERP controls." },
    { title: "Pilot-to-production enablement", description: "Help teams move high-value AI use cases from experimentation into compliant production." },
  ],
  de: [
    { title: "Implementierung von Governance-Systemen", description: "Integration deterministischer Entscheidungsfindung in bestehende KI-Workflows und Produktionssysteme." },
    { title: "KI-Lebenszyklusanalyse & Bereitschaftsbewertung", description: "Identifizierung kritischer KI-Entscheidungspunkte in Entwicklung, Bereitstellung, Inferenz und Produktion." },
    { title: "Regulatorische Konformität & Kontrolldesign", description: "Übersetzung regulatorischer Anforderungen in durchsetzbare, systemweite ERP-Kontrollen." },
    { title: "Vom Pilotprojekt zur Produktion", description: "Unterstützung von Teams bei der Überführung hochwertiger KI-Anwendungsfälle vom Experiment in die konforme Produktion." },
  ],
  fr: [
    { title: "Mise en place de systèmes de gouvernance", description: "Intégrer la prise de décision déterministe dans les workflows IA et les systèmes de production existants." },
    { title: "Cartographie du cycle de vie IA & évaluation de maturité", description: "Identifier les points de décision critiques de l'IA à travers le développement, le déploiement, l'inférence et la production." },
    { title: "Conformité réglementaire & conception des contrôles", description: "Traduire les exigences réglementaires en contrôles ERP applicables au niveau système." },
    { title: "Du pilote à la mise en production", description: "Accompagner les équipes pour faire passer les cas d'usage IA à forte valeur de l'expérimentation à une production conforme." },
  ],
  es: [
    { title: "Implementación de sistemas de gobernanza", description: "Integrar la toma de decisiones determinista en los flujos de trabajo de IA y sistemas de producción existentes." },
    { title: "Mapeo del ciclo de vida de IA y evaluación de madurez", description: "Identificar dónde ocurren las decisiones críticas de IA en el desarrollo, despliegue, inferencia y producción." },
    { title: "Alineación regulatoria y diseño de controles", description: "Traducir las expectativas regulatorias en controles ERP aplicables a nivel de sistema." },
    { title: "Del piloto a la producción", description: "Ayudar a los equipos a llevar casos de uso de IA de alto valor desde la experimentación hasta una producción conforme." },
  ],
};

export const gettingStartedBadge: Record<Locale, string> = {
  en: "Getting Started",
  de: "Erste Schritte",
  fr: "Pour commencer",
  es: "Cómo empezar",
};

export const gettingStartedTitle: Record<Locale, string> = {
  en: "How to Get Started",
  de: "So starten Sie",
  fr: "Comment démarrer",
  es: "Cómo comenzar",
};

export const gettingStartedDescription: Record<Locale, string> = {
  en: "Getting started is intentionally simple. We work with teams to understand where AI decisions occur in their lifecycle and integrate enforcement at the right points.",
  de: "Der Einstieg ist bewusst einfach gehalten. Wir arbeiten mit Teams zusammen, um zu verstehen, wo KI-Entscheidungen in ihrem Lebenszyklus getroffen werden, und integrieren die Durchsetzung an den richtigen Stellen.",
  fr: "Démarrer est volontairement simple. Nous collaborons avec les équipes pour comprendre où les décisions d'IA interviennent dans leur cycle de vie et intégrer les mécanismes de contrôle aux bons endroits.",
  es: "Comenzar es intencionalmente sencillo. Trabajamos con los equipos para comprender dónde ocurren las decisiones de IA en su ciclo de vida e integrar los mecanismos de control en los puntos adecuados.",
};

export const gettingStartedSubtext: Record<Locale, string> = {
  en: "For teams building the next wave of responsible AI in production.",
  de: "Für Teams, die die nächste Generation verantwortungsvoller KI in der Produktion aufbauen.",
  fr: "Pour les équipes qui construisent la prochaine génération d'IA responsable en production.",
  es: "Para equipos que construyen la próxima generación de IA responsable en producción.",
};

export const getInTouchLabel: Record<Locale, string> = {
  en: "Get in Touch",
  de: "Kontakt aufnehmen",
  fr: "Nous contacter",
  es: "Contáctenos",
};
