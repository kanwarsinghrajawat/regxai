import type { Locale } from "../app/components/LanguageProvider";

// ── Problem Section ──────────────────────────────────────────────────────────

export const problemTitle: Record<Locale, string> = {
  en: "The Problem",
  de: "Das Problem",
  fr: "Le problème",
  es: "El problema",
};

export const problemStatsConfig = [
  { value: 84, suffix: "%" },
  { value: 82, suffix: "%" },
  { value: 65, suffix: "%" },
  { value: 56, suffix: "%" },
];

export const problemStatsLabels: Record<Locale, string[]> = {
  en: [
    "of organizations expect mandatory AI audits soon—yet most lack audit-ready controls, logs, and reproducible evidence. Start now: versioned code and data, evaluation notebooks, decision logs, and an evidence map.",
    "of teams lack clear accountability for the end-to-end AI product lifecycle, from design to deployment.",
    "of consumers have already lost trust in a company due to AI misuse or poor automated customer experiences.",
    "of organizations have no formal governance framework for generative AI risks (bias, hallucinations, IP leakage).",
  ],
  de: [
    "der Organisationen rechnen in Kürze mit verpflichtenden KI-Audits – doch den meisten fehlen auditfähige Kontrollen, Protokolle und reproduzierbare Nachweise. Handeln Sie jetzt: versionierter Code und Daten, Evaluierungs-Notebooks, Entscheidungsprotokolle und eine Nachweisübersicht.",
    "der Teams haben keine klare Verantwortlichkeit für den gesamten KI-Produktlebenszyklus – vom Entwurf bis zur Inbetriebnahme.",
    "der Verbraucher haben bereits das Vertrauen in ein Unternehmen verloren – aufgrund von KI-Missbrauch oder mangelhaften automatisierten Kundenerlebnissen.",
    "der Organisationen verfügen über kein formales Governance-Framework für generative KI-Risiken (Voreingenommenheit, Halluzinationen, Abfluss geistigen Eigentums).",
  ],
  fr: [
    "des organisations s'attendent à des audits IA obligatoires dans un avenir proche – pourtant la plupart ne disposent pas de contrôles auditables, de journaux ni de preuves reproductibles. Agissez dès maintenant : code et données versionnés, carnets d'évaluation, journaux de décisions et cartographie des preuves.",
    "des équipes n'ont pas de responsabilité clairement définie sur l'ensemble du cycle de vie du produit IA, de la conception au déploiement.",
    "des consommateurs ont déjà perdu confiance en une entreprise en raison d'un usage abusif de l'IA ou d'expériences client automatisées médiocres.",
    "des organisations ne disposent d'aucun cadre de gouvernance formalisé pour les risques liés à l'IA générative (biais, hallucinations, fuites de propriété intellectuelle).",
  ],
  es: [
    "de las organizaciones prevén auditorías de IA obligatorias a corto plazo, pero la mayoría carece de controles auditables, registros y evidencia reproducible. Actúe ahora: código y datos versionados, cuadernos de evaluación, registros de decisiones y un mapa de evidencias.",
    "de los equipos carecen de una responsabilidad clara sobre el ciclo de vida completo del producto de IA, desde el diseño hasta el despliegue.",
    "de los consumidores ya han perdido la confianza en una empresa debido al uso indebido de la IA o a experiencias automatizadas deficientes.",
    "de las organizaciones no cuentan con un marco de gobernanza formal para los riesgos de la IA generativa (sesgos, alucinaciones, filtraciones de propiedad intelectual).",
  ],
};

// ── Our Solution Section ─────────────────────────────────────────────────────

export const ourSolutionTitle: Record<Locale, string> = {
  en: "Our Solution",
  de: "Unsere Lösung",
  fr: "Notre solution",
  es: "Nuestra solución",
};

export const ourSolutionDescription: Record<Locale, string> = {
  en: "We provide a system that makes AI deployment responsible and decidable. Instead of relying on post-hoc reviews or manual checklists, our approach enables organizations to determine - at the moment of execution - whether an AI action is permitted to proceed.",
  de: "Wir bieten ein System, das den KI-Einsatz verantwortungsvoll und entscheidbar macht. Anstatt sich auf nachträgliche Prüfungen oder manuelle Checklisten zu verlassen, ermöglicht unser Ansatz Organisationen, im Moment der Ausführung zu bestimmen, ob eine KI-Aktion fortgesetzt werden darf.",
  fr: "Nous fournissons un système qui rend le déploiement de l'IA responsable et déterminable. Au lieu de s'appuyer sur des revues a posteriori ou des listes de contrôle manuelles, notre approche permet aux organisations de déterminer, au moment même de l'exécution, si une action IA est autorisée à se poursuivre.",
  es: "Ofrecemos un sistema que hace que el despliegue de IA sea responsable y decidible. En lugar de depender de revisiones posteriores o listas de verificación manuales, nuestro enfoque permite a las organizaciones determinar, en el momento de la ejecución, si una acción de IA tiene permiso para continuar.",
};

// ── How It Works Section ─────────────────────────────────────────────────────

export const howItWorksTitle: Record<Locale, string> = {
  en: "How It Works",
  de: "So funktioniert es",
  fr: "Comment ça fonctionne",
  es: "Cómo funciona",
};

export const howItWorksSteps: Record<Locale, { description: string }[]> = {
  en: [
    { description: "Our system integrates into existing enterprise AI workflows and evaluates actions before they occur. At each critical stage of the AI lifecycle, it determines whether an action can proceed, should be blocked, or requires explicit ownership, human on the loop." },
    { description: "All decisions are deterministic by design, require no access to customer data, and are enforced in real time - enabling governance without slowing development or production outcomes." },
    { description: "Every decision is recorded as a tamper-evident reference, creating an immutable trail of evidence that can be relied upon for internal review, audit, and regulatory inquiries." },
  ],
  de: [
    { description: "Unser System integriert sich in bestehende KI-Workflows im Unternehmen und bewertet Aktionen, bevor sie ausgeführt werden. In jeder kritischen Phase des KI-Lebenszyklus wird entschieden, ob eine Aktion fortgesetzt werden kann, blockiert werden soll oder eine explizite Verantwortungsübernahme erfordert – der Mensch bleibt in der Schleife." },
    { description: "Alle Entscheidungen sind konstruktionsbedingt deterministisch, erfordern keinen Zugriff auf Kundendaten und werden in Echtzeit durchgesetzt – so wird Governance ermöglicht, ohne Entwicklung oder Produktionsergebnisse zu verlangsamen." },
    { description: "Jede Entscheidung wird als manipulationssichere Referenz aufgezeichnet und bildet eine unveränderliche Beweiskette, auf die sich interne Prüfungen, Audits und regulatorische Anfragen stützen können." },
  ],
  fr: [
    { description: "Notre système s'intègre aux flux de travail IA existants de l'entreprise et évalue les actions avant leur exécution. À chaque étape critique du cycle de vie de l'IA, il détermine si une action peut se poursuivre, doit être bloquée ou nécessite une prise de responsabilité explicite, avec l'humain dans la boucle." },
    { description: "Toutes les décisions sont déterministes par conception, ne nécessitent aucun accès aux données clients et sont appliquées en temps réel – permettant une gouvernance sans ralentir le développement ni les résultats en production." },
    { description: "Chaque décision est enregistrée sous forme de référence infalsifiable, créant une piste de preuves immuable sur laquelle s'appuyer pour les revues internes, les audits et les demandes réglementaires." },
  ],
  es: [
    { description: "Nuestro sistema se integra en los flujos de trabajo de IA empresariales existentes y evalúa las acciones antes de que se ejecuten. En cada etapa crítica del ciclo de vida de la IA, determina si una acción puede continuar, debe bloquearse o requiere una asignación explícita de responsabilidad, con el humano en el circuito." },
    { description: "Todas las decisiones son deterministas por diseño, no requieren acceso a datos de clientes y se aplican en tiempo real, lo que permite la gobernanza sin ralentizar el desarrollo ni los resultados en producción." },
    { description: "Cada decisión se registra como una referencia a prueba de manipulaciones, creando un rastro inmutable de evidencia que sirve de base para revisiones internas, auditorías y consultas regulatorias." },
  ],
};

// ── System Architecture Flow ─────────────────────────────────────────────────

export const systemArchitectureTitle: Record<Locale, string> = {
  en: "System Architecture Flow",
  de: "Systemarchitektur-Ablauf",
  fr: "Architecture du système",
  es: "Flujo de arquitectura del sistema",
};

export const flowStepsConfig = [
  { step: "1", iconKey: "zap" as const },
  { step: "2", iconKey: "shield" as const },
  { step: "3", iconKey: "target" as const },
  { step: "4", iconKey: "checkCircle" as const },
];

export const flowStepsTitles: Record<Locale, string[]> = {
  en: ["AI Action Request", "Real-time Evaluation", "Deterministic Decision", "Immutable Record"],
  de: ["KI-Aktionsanfrage", "Echtzeitbewertung", "Deterministische Entscheidung", "Unveränderlicher Nachweis"],
  fr: ["Requête d'action IA", "Évaluation en temps réel", "Décision déterministe", "Enregistrement immuable"],
  es: ["Solicitud de acción IA", "Evaluación en tiempo real", "Decisión determinista", "Registro inmutable"],
};

// ── Average Response Time ────────────────────────────────────────────────────

export const averageResponseTimeLabel: Record<Locale, string> = {
  en: "Average Response Time",
  de: "Durchschnittliche Antwortzeit",
  fr: "Temps de réponse moyen",
  es: "Tiempo de respuesta promedio",
};

export const averageResponseTimeValue = 50;

// ── How We Help Enterprises ──────────────────────────────────────────────────

export const solutionHowWeHelpTitle: Record<Locale, string> = {
  en: "How We Help Enterprises",
  de: "Wie wir Unternehmen unterstützen",
  fr: "Comment nous aidons les entreprises",
  es: "Cómo ayudamos a las empresas",
};

export const solutionHowWeHelpDescription: Record<Locale, string> = {
  en: "We help organizations move AI into production by making risk decidable before it becomes costly.",
  de: "Wir helfen Organisationen, KI in die Produktion zu bringen, indem wir Risiken entscheidbar machen, bevor sie kostspielig werden.",
  fr: "Nous aidons les organisations à mettre l'IA en production en rendant les risques déterminables avant qu'ils ne deviennent coûteux.",
  es: "Ayudamos a las organizaciones a llevar la IA a producción haciendo que los riesgos sean decidibles antes de que resulten costosos.",
};

export const solutionHowWeHelpList: Record<Locale, string[]> = {
  en: [
    "Reduce regulatory exposure by evaluating AI actions before they execute",
    "Prevent fines and enforcement events through real-time blocking and escalation",
    "Unlock ROI from stalled AI initiatives by enabling compliant production deployment",
    "Lower governance overhead by replacing manual reviews with deterministic controls",
    "Stay audit-ready by default with immutable decision records",
  ],
  de: [
    "Regulatorische Risiken senken, indem KI-Aktionen vor der Ausführung bewertet werden",
    "Bußgelder und Durchsetzungsmaßnahmen durch Echtzeit-Blockierung und Eskalation verhindern",
    "ROI aus ins Stocken geratenen KI-Initiativen freisetzen durch konforme Produktionsbereitstellung",
    "Governance-Aufwand reduzieren, indem manuelle Prüfungen durch deterministische Kontrollen ersetzt werden",
    "Standardmäßig auditbereit bleiben dank unveränderlicher Entscheidungsprotokolle",
  ],
  fr: [
    "Réduire l'exposition réglementaire en évaluant les actions IA avant leur exécution",
    "Prévenir les amendes et les mesures coercitives grâce au blocage et à l'escalade en temps réel",
    "Libérer le retour sur investissement des initiatives IA en suspens en permettant un déploiement conforme en production",
    "Alléger la charge de gouvernance en remplaçant les revues manuelles par des contrôles déterministes",
    "Rester prêt pour l'audit par défaut grâce à des enregistrements de décisions immuables",
  ],
  es: [
    "Reducir la exposición regulatoria evaluando las acciones de IA antes de su ejecución",
    "Prevenir multas y acciones de cumplimiento mediante bloqueo y escalamiento en tiempo real",
    "Desbloquear el retorno de inversión de iniciativas de IA estancadas habilitando un despliegue conforme en producción",
    "Reducir la carga de gobernanza sustituyendo revisiones manuales por controles deterministas",
    "Mantener la preparación para auditorías por defecto con registros de decisiones inmutables",
  ],
};

// ── Enterprise Impact Metrics ────────────────────────────────────────────────

export const enterpriseImpactTitle: Record<Locale, string> = {
  en: "Enterprise Impact Metrics",
  de: "Unternehmenskennzahlen",
  fr: "Indicateurs d'impact entreprise",
  es: "Métricas de impacto empresarial",
};

export const enterpriseMetricsConfig = [
  { iconKey: "shield" as const },
  { iconKey: "clock" as const },
  { iconKey: "trendingUp" as const },
  { iconKey: "checkCircle" as const },
];

export const enterpriseMetricsLabels: Record<Locale, { label: string; description: string }[]> = {
  en: [
    { label: "Risk Reduction", description: "Reduce exposure with execution-time controls." },
    { label: "Faster Deployment", description: "Ship to production with confidence." },
    { label: "Cost Savings", description: "Replace manual review with deterministic enforcement." },
    { label: "Compliance Rate", description: "Stay audit-ready by default." },
  ],
  de: [
    { label: "Risikominderung", description: "Risiken durch Kontrollen zur Ausführungszeit senken." },
    { label: "Schnellere Bereitstellung", description: "Mit Zuversicht in Produktion gehen." },
    { label: "Kosteneinsparung", description: "Manuelle Prüfungen durch deterministische Durchsetzung ersetzen." },
    { label: "Compliance-Rate", description: "Standardmäßig auditbereit bleiben." },
  ],
  fr: [
    { label: "Réduction des risques", description: "Réduire l'exposition grâce à des contrôles au moment de l'exécution." },
    { label: "Déploiement accéléré", description: "Mettre en production en toute confiance." },
    { label: "Réduction des coûts", description: "Remplacer les revues manuelles par une application déterministe." },
    { label: "Taux de conformité", description: "Rester prêt pour l'audit par défaut." },
  ],
  es: [
    { label: "Reducción de riesgos", description: "Reducir la exposición con controles en tiempo de ejecución." },
    { label: "Despliegue más rápido", description: "Pasar a producción con confianza." },
    { label: "Ahorro de costes", description: "Sustituir revisiones manuales por cumplimiento determinista." },
    { label: "Tasa de cumplimiento", description: "Mantener la preparación para auditorías por defecto." },
  ],
};

// ── ROI ──────────────────────────────────────────────────────────────────────

export const roiLabel: Record<Locale, string> = {
  en: "ROI",
  de: "ROI",
  fr: "ROI",
  es: "ROI",
};

export const roiDescription: Record<Locale, string> = {
  en: "Reduce exposure to illegal or harmful AI actions, prosecution, fines and reputational damages",
  de: "Reduzieren Sie die Gefährdung durch illegale oder schädliche KI-Aktionen, Strafverfolgung, Bußgelder und Reputationsschäden",
  fr: "Réduisez l'exposition aux actions IA illégales ou nuisibles, aux poursuites, aux amendes et aux atteintes à la réputation",
  es: "Reduzca la exposición a acciones de IA ilegales o perjudiciales, procesos judiciales, multas y daños reputacionales",
};

// ── Use Case Distribution ────────────────────────────────────────────────────

export const useCaseDistributionTitle: Record<Locale, string> = {
  en: "Use Case Distribution",
  de: "Verteilung der Anwendungsfälle",
  fr: "Répartition des cas d'usage",
  es: "Distribución de casos de uso",
};

export const useCaseDistributionConfig = [
  { color: "emerald" as const },
  { color: "blue" as const },
  { color: "teal" as const },
  { color: "orange" as const },
];

export const useCaseDistributionLabels: Record<Locale, string[]> = {
  en: ["Autonomous AI Systems", "Enterprise Chatbots", "CI/CD Pipelines", "Regulated Environments"],
  de: ["Autonome KI-Systeme", "Unternehmens-Chatbots", "CI/CD-Pipelines", "Regulierte Umgebungen"],
  fr: ["Systèmes IA autonomes", "Chatbots d'entreprise", "Pipelines CI/CD", "Environnements réglementés"],
  es: ["Sistemas de IA autónomos", "Chatbots empresariales", "Pipelines CI/CD", "Entornos regulados"],
};

export const useCaseCoveredLabel: Record<Locale, string> = {
  en: "Covered",
  de: "Abgedeckt",
  fr: "Couvert",
  es: "Cubierto",
};

export const useCaseBroadCoverageTitle: Record<Locale, string> = {
  en: "Broad coverage across enterprise AI workflows.",
  de: "Breite Abdeckung über alle KI-Workflows im Unternehmen.",
  fr: "Large couverture sur l'ensemble des flux de travail IA en entreprise.",
  es: "Amplia cobertura en todos los flujos de trabajo de IA empresariales.",
};

export const useCaseBroadCoverageDescription: Record<Locale, string> = {
  en: "Designed to apply across model deployment, inference, and production execution.",
  de: "Konzipiert für die Anwendung über Modellbereitstellung, Inferenz und Produktionsausführung hinweg.",
  fr: "Conçu pour s'appliquer au déploiement de modèles, à l'inférence et à l'exécution en production.",
  es: "Diseñado para aplicarse en el despliegue de modelos, la inferencia y la ejecución en producción.",
};

// ── Where This Fits ──────────────────────────────────────────────────────────

export const solutionWhereThisFitsTitle: Record<Locale, string> = {
  en: "Where This Fits",
  de: "Wo unser System ansetzt",
  fr: "Où cela s'applique",
  es: "Dónde encaja",
};

export const solutionWhereThisFitsDescription: Record<Locale, string> = {
  en: "This system applies wherever AI decisions carry risk, responsibility, or regulatory exposure:",
  de: "Dieses System greift überall dort, wo KI-Entscheidungen Risiken, Verantwortung oder regulatorische Konsequenzen mit sich bringen:",
  fr: "Ce système s'applique partout où les décisions IA comportent des risques, des responsabilités ou une exposition réglementaire :",
  es: "Este sistema se aplica en cualquier lugar donde las decisiones de IA conlleven riesgos, responsabilidad o exposición regulatoria:",
};

export const solutionWhereThisFitsList: Record<Locale, string[]> = {
  en: [
    "Autonomous and agentic AI systems executing multi-step actions",
    "Enterprise chatbots and AI assistants",
    "Model deployment and CI/CD pipelines",
    "AI systems operating in regulated environments",
    "Decision-making and inference workflows",
    "Organizations scaling AI beyond pilots into production",
  ],
  de: [
    "Autonome und agentenbasierte KI-Systeme, die mehrstufige Aktionen ausführen",
    "Unternehmens-Chatbots und KI-Assistenten",
    "Modellbereitstellung und CI/CD-Pipelines",
    "KI-Systeme in regulierten Umgebungen",
    "Entscheidungsfindungs- und Inferenz-Workflows",
    "Organisationen, die KI über Pilotprojekte hinaus in die Produktion skalieren",
  ],
  fr: [
    "Systèmes IA autonomes et agentiques exécutant des actions en plusieurs étapes",
    "Chatbots d'entreprise et assistants IA",
    "Déploiement de modèles et pipelines CI/CD",
    "Systèmes IA opérant dans des environnements réglementés",
    "Flux de travail de prise de décision et d'inférence",
    "Organisations faisant évoluer l'IA au-delà des projets pilotes vers la production",
  ],
  es: [
    "Sistemas de IA autónomos y agénticos que ejecutan acciones en múltiples pasos",
    "Chatbots empresariales y asistentes de IA",
    "Despliegue de modelos y pipelines CI/CD",
    "Sistemas de IA que operan en entornos regulados",
    "Flujos de trabajo de toma de decisiones e inferencia",
    "Organizaciones que escalan la IA más allá de proyectos piloto hacia producción",
  ],
};

// ── Who This Is For ──────────────────────────────────────────────────────────

export const whoThisIsForTitle: Record<Locale, string> = {
  en: "Who This Is For",
  de: "Für wen das gedacht ist",
  fr: "À qui cela s'adresse",
  es: "Para quién es",
};

export const whoThisIsForDescription: Record<Locale, string> = {
  en: "This system is built for teams responsible for putting AI into production:",
  de: "Dieses System wurde für Teams entwickelt, die für die Überführung von KI in den Produktivbetrieb verantwortlich sind:",
  fr: "Ce système est conçu pour les équipes responsables de la mise en production de l'IA :",
  es: "Este sistema está diseñado para equipos responsables de llevar la IA a producción:",
};

export const whoThisIsForList: Record<Locale, string[]> = {
  en: [
    "Engineering and platform teams deploying AI systems",
    "AI and data leaders accountable for risk and compliance",
    "Product teams taking AI to Go-to-market",
    "Organizations operating in regulated or high-risk environments",
  ],
  de: [
    "Engineering- und Plattform-Teams, die KI-Systeme bereitstellen",
    "KI- und Datenverantwortliche mit Zuständigkeit für Risiko und Compliance",
    "Produktteams, die KI zur Marktreife bringen",
    "Organisationen in regulierten oder hochriskanten Umgebungen",
  ],
  fr: [
    "Équipes d'ingénierie et de plateforme déployant des systèmes IA",
    "Responsables IA et données en charge des risques et de la conformité",
    "Équipes produit amenant l'IA sur le marché",
    "Organisations opérant dans des environnements réglementés ou à haut risque",
  ],
  es: [
    "Equipos de ingeniería y plataforma que despliegan sistemas de IA",
    "Líderes de IA y datos responsables de riesgos y cumplimiento normativo",
    "Equipos de producto que llevan la IA al mercado",
    "Organizaciones que operan en entornos regulados o de alto riesgo",
  ],
};

// ── Target Audience ──────────────────────────────────────────────────────────

export const targetAudienceTitle: Record<Locale, string> = {
  en: "Target Audience Breakdown",
  de: "Zielgruppenübersicht",
  fr: "Répartition du public cible",
  es: "Desglose del público objetivo",
};

export const targetAudienceConfig = [
  { iconKey: "code" as const },
  { iconKey: "users" as const },
  { iconKey: "target" as const },
  { iconKey: "building2" as const },
];

export const targetAudienceLabels: Record<Locale, string[]> = {
  en: ["Engineering Teams", "AI & Data Leaders", "Product Teams", "Regulated Organizations"],
  de: ["Engineering-Teams", "KI- & Datenverantwortliche", "Produktteams", "Regulierte Organisationen"],
  fr: ["Équipes d'ingénierie", "Responsables IA & données", "Équipes produit", "Organisations réglementées"],
  es: ["Equipos de ingeniería", "Líderes de IA y datos", "Equipos de producto", "Organizaciones reguladas"],
};

// ── Inline Labels ───────────────────────────────────────────────────────────

export const solutionStepLabel: Record<Locale, string> = {
  en: "Step",
  de: "Schritt",
  fr: "Étape",
  es: "Paso",
};

export const coverageLabel: Record<Locale, string> = {
  en: "Coverage",
  de: "Abdeckung",
  fr: "Couverture",
  es: "Cobertura",
};

// ── CTA Section ──────────────────────────────────────────────────────────────

export const solutionCtaTitle: Record<Locale, string> = {
  en: "Ready to transform your AI deployment?",
  de: "Bereit, Ihren KI-Einsatz zu transformieren?",
  fr: "Prêt à transformer votre déploiement IA ?",
  es: "¿Listo para transformar su despliegue de IA?",
};

export const solutionCtaDescription: Record<Locale, string> = {
  en: "Get started with our solution today and ensure compliance at every step.",
  de: "Starten Sie noch heute mit unserer Lösung und sichern Sie Compliance in jedem Schritt.",
  fr: "Commencez dès aujourd'hui avec notre solution et assurez la conformité à chaque étape.",
  es: "Comience hoy con nuestra solución y garantice el cumplimiento en cada paso.",
};

export const solutionCtaButton: Record<Locale, string> = {
  en: "Get in Touch",
  de: "Kontakt aufnehmen",
  fr: "Nous contacter",
  es: "Contáctenos",
};
