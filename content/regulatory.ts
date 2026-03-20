import type { Locale } from "../app/components/LanguageProvider";

export const regulatoryComplianceLabel: Record<Locale, string> = {
  en: "Compliance",
  de: "Compliance",
  fr: "Conformité",
  es: "Cumplimiento",
};

export const regulatoryStepLabel: Record<Locale, string> = {
  en: "Step",
  de: "Schritt",
  fr: "Étape",
  es: "Paso",
};

export const regulatoryHeroTitle: Record<Locale, string> = {
  en: "Regulatory Scope",
  de: "Regulatorischer Geltungsbereich",
  fr: "Portée réglementaire",
  es: "Alcance regulatorio",
};

export const regulatoryHeroDescription: Record<Locale, string> = {
  en: "AI regulation is evolving globally, with enforcement already underway across major markets. Our system is designed to support organizations operating across jurisdictions, with an initial focus on the most impactful and actively enforced frameworks today: ",
  de: "Die KI-Regulierung entwickelt sich weltweit weiter, wobei die Durchsetzung in wichtigen Märkten bereits läuft. Unser System ist darauf ausgelegt, Organisationen zu unterstützen, die über verschiedene Rechtsordnungen hinweg tätig sind, mit einem anfänglichen Fokus auf die wirkungsvollsten und derzeit aktiv durchgesetzten Rahmenwerke: ",
  fr: "La réglementation de l\u2019IA évolue à l\u2019échelle mondiale, avec une mise en application déjà en cours sur les principaux marchés. Notre système est conçu pour accompagner les organisations opérant dans différentes juridictions, en se concentrant initialement sur les cadres les plus influents et activement appliqués aujourd\u2019hui : ",
  es: "La regulación de la IA está evolucionando a nivel mundial, con una aplicación ya en marcha en los principales mercados. Nuestro sistema está diseñado para apoyar a las organizaciones que operan en múltiples jurisdicciones, con un enfoque inicial en los marcos más impactantes y activamente aplicados en la actualidad: ",
};

export const frameworksListConfig = [
  { iconKey: "lock" as const },
  { iconKey: "shield" as const },
  { iconKey: "checkCircle" as const },
  { iconKey: "checkCircle" as const },
  { iconKey: "checkCircle" as const },
  { iconKey: "checkCircle" as const },
  { iconKey: "checkCircle" as const },
];

export const frameworksListContent: Record<
  Locale,
  { name: string; description: string }[]
> = {
  en: [
    {
      name: "EU AI Act",
      description:
        "Full compliance with EU AI Act requirements including risk classification, documentation, and transparency obligations.",
    },
    {
      name: "GDPR",
      description:
        "Privacy by design with comprehensive data handling, user consent, and data subject rights management.",
    },
    {
      name: "U.S. Federal & State Guidelines",
      description: "Sector-specific and guidance-driven enforcement.",
    },
    {
      name: "UAE AI & Data Regulations",
      description:
        "National AI governance, data-protection laws (e.g., PDPL), and sectoral oversight shaping compliant AI deployment in the Middle East.",
    },
    {
      name: "South Korean AI Act (SKAIA)",
      description:
        "South Korea's AI governance framework shaping responsible deployment and sector expectations.",
    },
    {
      name: "India DPDP Act",
      description: "Data-protection law impacting AI data usage.",
    },
    {
      name: "Framework Convention on AI",
      description:
        "International treaty aligning AI with human-rights principles.",
    },
  ],
  de: [
    {
      name: "EU AI Act",
      description:
        "Vollständige Einhaltung der Anforderungen des EU AI Act, einschließlich Risikoklassifizierung, Dokumentation und Transparenzpflichten.",
    },
    {
      name: "GDPR",
      description:
        "Datenschutz durch Technikgestaltung mit umfassender Datenverarbeitung, Einwilligungsverwaltung und Verwaltung der Betroffenenrechte.",
    },
    {
      name: "U.S. Federal & State Guidelines",
      description:
        "Sektorspezifische und richtlinienbasierte Durchsetzung.",
    },
    {
      name: "UAE AI & Data Regulations",
      description:
        "Nationale KI-Governance, Datenschutzgesetze (z.\u00a0B. PDPL) und sektorale Aufsicht für regelkonforme KI-Bereitstellung im Nahen Osten.",
    },
    {
      name: "South Korean AI Act (SKAIA)",
      description:
        "Südkoreas KI-Governance-Rahmenwerk für verantwortungsvolle Bereitstellung und Branchenerwartungen.",
    },
    {
      name: "India DPDP Act",
      description:
        "Datenschutzgesetz mit Auswirkungen auf die KI-Datennutzung.",
    },
    {
      name: "Framework Convention on AI",
      description:
        "Internationales Abkommen zur Ausrichtung von KI an Menschenrechtsprinzipien.",
    },
  ],
  fr: [
    {
      name: "EU AI Act",
      description:
        "Conformité complète aux exigences du EU AI Act, y compris la classification des risques, la documentation et les obligations de transparence.",
    },
    {
      name: "GDPR",
      description:
        "Protection des données dès la conception avec gestion complète des données, du consentement et des droits des personnes concernées.",
    },
    {
      name: "U.S. Federal & State Guidelines",
      description:
        "Application sectorielle et fondée sur des orientations.",
    },
    {
      name: "UAE AI & Data Regulations",
      description:
        "Gouvernance nationale de l\u2019IA, lois sur la protection des données (par ex. PDPL) et surveillance sectorielle pour un déploiement conforme de l\u2019IA au Moyen-Orient.",
    },
    {
      name: "South Korean AI Act (SKAIA)",
      description:
        "Cadre de gouvernance de l\u2019IA en Corée du Sud pour un déploiement responsable et les attentes du secteur.",
    },
    {
      name: "India DPDP Act",
      description:
        "Loi sur la protection des données ayant un impact sur l\u2019utilisation des données par l\u2019IA.",
    },
    {
      name: "Framework Convention on AI",
      description:
        "Traité international alignant l\u2019IA sur les principes des droits de l\u2019homme.",
    },
  ],
  es: [
    {
      name: "EU AI Act",
      description:
        "Cumplimiento total de los requisitos del EU AI Act, incluyendo clasificación de riesgos, documentación y obligaciones de transparencia.",
    },
    {
      name: "GDPR",
      description:
        "Privacidad desde el diseño con gestión integral del tratamiento de datos, consentimiento del usuario y derechos de los interesados.",
    },
    {
      name: "U.S. Federal & State Guidelines",
      description:
        "Aplicación sectorial y basada en directrices.",
    },
    {
      name: "UAE AI & Data Regulations",
      description:
        "Gobernanza nacional de la IA, leyes de protección de datos (p. ej., PDPL) y supervisión sectorial para un despliegue conforme de la IA en Oriente Medio.",
    },
    {
      name: "South Korean AI Act (SKAIA)",
      description:
        "Marco de gobernanza de la IA de Corea del Sur para un despliegue responsable y expectativas del sector.",
    },
    {
      name: "India DPDP Act",
      description:
        "Ley de protección de datos que impacta el uso de datos por la IA.",
    },
    {
      name: "Framework Convention on AI",
      description:
        "Tratado internacional que alinea la IA con los principios de derechos humanos.",
    },
  ],
};

export const globalCoverageTitle: Record<Locale, string> = {
  en: "Global Regulatory Coverage",
  de: "Globale regulatorische Abdeckung",
  fr: "Couverture réglementaire mondiale",
  es: "Cobertura regulatoria global",
};

export const globalCoverageDescription: Record<Locale, string> = {
  en: "The system is built to evolve as regulations mature and new frameworks come into force across key jurisdictions including Europe, the United States, India, Singapore, Japan, and other global markets, and is designed to apply across all categories of AI products and use cases. In addition, the system aligns with widely adopted international frameworks and emerging national policies, including voluntary governance models and global standards that influence regulatory expectations.",
  de: "Das System ist darauf ausgelegt, sich mit der Reifung von Vorschriften und dem Inkrafttreten neuer Rahmenwerke in wichtigen Rechtsordnungen wie Europa, den Vereinigten Staaten, Indien, Singapur, Japan und anderen globalen Märkten weiterzuentwickeln und auf alle Kategorien von KI-Produkten und Anwendungsfällen anwendbar zu sein. Darüber hinaus orientiert sich das System an weit verbreiteten internationalen Rahmenwerken und aufkommenden nationalen Richtlinien, einschließlich freiwilliger Governance-Modelle und globaler Standards, die regulatorische Erwartungen beeinflussen.",
  fr: "Le système est conçu pour évoluer à mesure que les réglementations mûrissent et que de nouveaux cadres entrent en vigueur dans les juridictions clés, notamment l\u2019Europe, les États-Unis, l\u2019Inde, Singapour, le Japon et d\u2019autres marchés mondiaux, et est prévu pour s\u2019appliquer à toutes les catégories de produits et cas d\u2019utilisation de l\u2019IA. De plus, le système s\u2019aligne sur les cadres internationaux largement adoptés et les politiques nationales émergentes, y compris les modèles de gouvernance volontaires et les normes mondiales qui influencent les attentes réglementaires.",
  es: "El sistema está construido para evolucionar a medida que las regulaciones maduran y nuevos marcos entran en vigor en jurisdicciones clave como Europa, Estados Unidos, India, Singapur, Japón y otros mercados globales, y está diseñado para aplicarse a todas las categorías de productos de IA y casos de uso. Además, el sistema se alinea con marcos internacionales ampliamente adoptados y políticas nacionales emergentes, incluyendo modelos de gobernanza voluntarios y estándares globales que influyen en las expectativas regulatorias.",
};

export const complianceUpdatesTitle: Record<Locale, string> = {
  en: "Regular Compliance Updates",
  de: "Regelmäßige Compliance-Updates",
  fr: "Mises à jour régulières de conformité",
  es: "Actualizaciones regulares de cumplimiento",
};

export const complianceUpdatesDescription: Record<Locale, string> = {
  en: "We continuously monitor regulatory developments and automatically enhance our services and offerings.",
  de: "Wir überwachen kontinuierlich regulatorische Entwicklungen und verbessern automatisch unsere Dienstleistungen und Angebote.",
  fr: "Nous surveillons en permanence les évolutions réglementaires et améliorons automatiquement nos services et offres.",
  es: "Monitoreamos continuamente los desarrollos regulatorios y mejoramos automáticamente nuestros servicios y ofertas.",
};

export const keyComplianceFeaturesTitle: Record<Locale, string> = {
  en: "Key Compliance Features",
  de: "Wichtige Compliance-Funktionen",
  fr: "Fonctionnalités clés de conformité",
  es: "Características clave de cumplimiento",
};

export const keyComplianceFeaturesList: Record<
  Locale,
  { title: string; description: string }[]
> = {
  en: [
    {
      title: "Immutable Audit Trails",
      description:
        "Every decision recorded with full traceability for regulatory inquiries",
    },
    {
      title: "Data Governance",
      description:
        "Automated data lineage tracking and documentation",
    },
    {
      title: "Algorithmic Transparency",
      description: "Explainability features for all AI decisions",
    },
    {
      title: "Bias Monitoring",
      description:
        "Continuous monitoring for fairness and discrimination",
    },
    {
      title: "Consent Management",
      description:
        "Comprehensive consent tracking and management",
    },
    {
      title: "Incident Response",
      description: "Automated incident logging and escalation",
    },
  ],
  de: [
    {
      title: "Unveränderliche Prüfpfade",
      description:
        "Jede Entscheidung wird mit vollständiger Rückverfolgbarkeit für regulatorische Anfragen dokumentiert",
    },
    {
      title: "Daten-Governance",
      description:
        "Automatisierte Nachverfolgung der Datenherkunft und Dokumentation",
    },
    {
      title: "Algorithmische Transparenz",
      description:
        "Erklärungsfunktionen für alle KI-Entscheidungen",
    },
    {
      title: "Bias-Überwachung",
      description:
        "Kontinuierliche Überwachung auf Fairness und Diskriminierung",
    },
    {
      title: "Einwilligungsverwaltung",
      description:
        "Umfassende Nachverfolgung und Verwaltung von Einwilligungen",
    },
    {
      title: "Vorfallreaktion",
      description:
        "Automatisierte Vorfallprotokollierung und Eskalation",
    },
  ],
  fr: [
    {
      title: "Pistes d\u2019audit immuables",
      description:
        "Chaque décision enregistrée avec une traçabilité complète pour les enquêtes réglementaires",
    },
    {
      title: "Gouvernance des données",
      description:
        "Suivi automatisé de la lignée des données et documentation",
    },
    {
      title: "Transparence algorithmique",
      description:
        "Fonctionnalités d\u2019explicabilité pour toutes les décisions de l\u2019IA",
    },
    {
      title: "Surveillance des biais",
      description:
        "Surveillance continue de l\u2019équité et de la discrimination",
    },
    {
      title: "Gestion du consentement",
      description:
        "Suivi et gestion complets du consentement",
    },
    {
      title: "Réponse aux incidents",
      description:
        "Journalisation et escalade automatisées des incidents",
    },
  ],
  es: [
    {
      title: "Registros de auditoría inmutables",
      description:
        "Cada decisión registrada con trazabilidad completa para consultas regulatorias",
    },
    {
      title: "Gobernanza de datos",
      description:
        "Seguimiento automatizado del linaje de datos y documentación",
    },
    {
      title: "Transparencia algorítmica",
      description:
        "Funciones de explicabilidad para todas las decisiones de IA",
    },
    {
      title: "Monitoreo de sesgos",
      description:
        "Monitoreo continuo de equidad y discriminación",
    },
    {
      title: "Gestión del consentimiento",
      description:
        "Seguimiento y gestión integral del consentimiento",
    },
    {
      title: "Respuesta a incidentes",
      description:
        "Registro y escalamiento automatizado de incidentes",
    },
  ],
};
