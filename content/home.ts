import type { Locale } from "../app/components/LanguageProvider";

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------

export const heroBadge: Record<Locale, string> = {
  en: "Acceptability before capability in AI world",
  de: "Akzeptanz vor Leistung in der Welt der KI",
  fr: "L'acceptabilit\u00e9 avant la capacit\u00e9 dans le monde de l'IA",
  es: "Aceptabilidad antes que capacidad en el mundo de la IA",
};

export const heroTitleLine1: Record<Locale, string> = {
  en: "Infrastructure for enforcing ",
  de: "Infrastruktur zur Durchsetzung von ",
  fr: "Infrastructure pour garantir ",
  es: "Infraestructura para imponer ",
};

export const heroTitleHighlight: Record<Locale, string> = {
  en: "AI trust",
  de: "KI-Vertrauen",
  fr: "la confiance en l'IA",
  es: "confianza en la IA",
};

export const heroTitleLine2: Record<Locale, string> = {
  en: " and deterministic decisioning",
  de: " und deterministische Entscheidungsfindung",
  fr: " et la prise de d\u00e9cision d\u00e9terministe",
  es: " y toma de decisiones determinista",
};

export const heroDescription: Record<Locale, string> = {
  en: "Determines whether AI actions are responsible and compliant - before agents and models deploy, act, respond, or predict.",
  de: "Bestimmt, ob KI-Aktionen verantwortungsvoll und konform sind \u2013 bevor Agenten und Modelle bereitgestellt werden, handeln, antworten oder vorhersagen.",
  fr: "D\u00e9termine si les actions de l'IA sont responsables et conformes \u2013 avant que les agents et mod\u00e8les ne soient d\u00e9ploy\u00e9s, n'agissent, ne r\u00e9pondent ou ne pr\u00e9disent.",
  es: "Determina si las acciones de la IA son responsables y conformes, antes de que los agentes y modelos se desplieguen, act\u00faen, respondan o predigan.",
};

export const heroCtaPrimary: Record<Locale, string> = {
  en: "Get in Touch",
  de: "Kontakt aufnehmen",
  fr: "Nous contacter",
  es: "Cont\u00e1ctenos",
};

export const heroCtaSecondary: Record<Locale, string> = {
  en: "Learn more about our solution",
  de: "Mehr \u00fcber unsere L\u00f6sung erfahren",
  fr: "En savoir plus sur notre solution",
  es: "M\u00e1s informaci\u00f3n sobre nuestra soluci\u00f3n",
};

// ---------------------------------------------------------------------------
// Key Features Section
// ---------------------------------------------------------------------------

export const keyFeaturesBadge: Record<Locale, string> = {
  en: "Core capabilities",
  de: "Kernfunktionen",
  fr: "Fonctionnalit\u00e9s cl\u00e9s",
  es: "Capacidades principales",
};

export const keyFeaturesTitle: Record<Locale, string> = {
  en: "Key Features",
  de: "Hauptmerkmale",
  fr: "Fonctionnalit\u00e9s cl\u00e9s",
  es: "Caracter\u00edsticas principales",
};

export const keyFeaturesDescription: Record<Locale, string> = {
  en: "Ship agentic AI safely with execution-time controls, auditable decisions, and deterministic enforcement.",
  de: "Setzen Sie agentische KI sicher ein \u2013 mit Laufzeitkontrollen, auditierbaren Entscheidungen und deterministischer Durchsetzung.",
  fr: "D\u00e9ployez l'IA agentique en toute s\u00e9curit\u00e9 gr\u00e2ce \u00e0 des contr\u00f4les \u00e0 l'ex\u00e9cution, des d\u00e9cisions auditables et une application d\u00e9terministe.",
  es: "Despliegue IA ag\u00e9ntica de forma segura con controles en tiempo de ejecuci\u00f3n, decisiones auditables y aplicaci\u00f3n determinista.",
};

type KeyFeatureConfig = {
  iconKey: "shield" | "fileCheck" | "target";
  topBar: string;
};

export const keyFeaturesConfig: KeyFeatureConfig[] = [
  { iconKey: "shield", topBar: "from-emerald-500 to-teal-500" },
  { iconKey: "fileCheck", topBar: "from-emerald-500 to-teal-500" },
  { iconKey: "target", topBar: "from-emerald-500 to-teal-500" },
];

export const keyFeaturesList: Record<Locale, { title: string; description: string }[]> = {
  en: [
    { title: "Real-time Enforcement", description: "Evaluate AI actions before execution to prevent violations and ensure compliance at every step." },
    { title: "Immutable Records", description: "Every decision is recorded as tamper-evident evidence for audits, reviews, and regulatory inquiries." },
    { title: "Deterministic Decisions", description: "Make risk decidable before it becomes costly, enabling confident production deployment." },
  ],
  de: [
    { title: "Echtzeit-Durchsetzung", description: "KI-Aktionen vor der Ausf\u00fchrung bewerten, um Verst\u00f6\u00dfe zu verhindern und bei jedem Schritt Konformit\u00e4t sicherzustellen." },
    { title: "Unver\u00e4nderliche Aufzeichnungen", description: "Jede Entscheidung wird als manipulationssicherer Nachweis f\u00fcr Audits, \u00dcberpr\u00fcfungen und beh\u00f6rdliche Anfragen gespeichert." },
    { title: "Deterministische Entscheidungen", description: "Risiken entscheidbar machen, bevor sie kostspielig werden, und eine sichere Produktionsbereitstellung erm\u00f6glichen." },
  ],
  fr: [
    { title: "Application en temps r\u00e9el", description: "\u00c9valuez les actions de l'IA avant leur ex\u00e9cution pour pr\u00e9venir les violations et garantir la conformit\u00e9 \u00e0 chaque \u00e9tape." },
    { title: "Enregistrements immuables", description: "Chaque d\u00e9cision est enregistr\u00e9e comme preuve infalsifiable pour les audits, les examens et les demandes r\u00e9glementaires." },
    { title: "D\u00e9cisions d\u00e9terministes", description: "Rendez le risque d\u00e9cidable avant qu'il ne devienne co\u00fbteux, permettant un d\u00e9ploiement en production en toute confiance." },
  ],
  es: [
    { title: "Aplicaci\u00f3n en tiempo real", description: "Eval\u00fae las acciones de la IA antes de su ejecuci\u00f3n para prevenir infracciones y garantizar el cumplimiento en cada paso." },
    { title: "Registros inmutables", description: "Cada decisi\u00f3n se registra como evidencia a prueba de manipulaciones para auditor\u00edas, revisiones y consultas regulatorias." },
    { title: "Decisiones deterministas", description: "Haga que el riesgo sea decidible antes de que se vuelva costoso, permitiendo un despliegue en producci\u00f3n con confianza." },
  ],
};

// ---------------------------------------------------------------------------
// Risk Section
// ---------------------------------------------------------------------------

export const riskSectionTitle: Record<Locale, string> = {
  en: "Why AI & Agentic Systems Increase Risk Without Execution Control",
  de: "Warum KI- und agentische Systeme ohne Ausf\u00fchrungskontrolle das Risiko erh\u00f6hen",
  fr: "Pourquoi les syst\u00e8mes d'IA et agents autonomes augmentent le risque sans contr\u00f4le d'ex\u00e9cution",
  es: "Por qu\u00e9 los sistemas de IA y agentes aut\u00f3nomos aumentan el riesgo sin control de ejecuci\u00f3n",
};

export const riskSectionDescription: Record<Locale, string> = {
  en: "AI adoption is surging, but responsible-AI maturity lags. Policy violations are doubling and regulators can impose fines up to \u20ac ",
  de: "Die KI-Adoption steigt rasant, doch die Reife verantwortungsvoller KI hinkt hinterher. Richtlinienverst\u00f6\u00dfe verdoppeln sich und Regulierungsbeh\u00f6rden k\u00f6nnen Geldstrafen von bis zu \u20ac ",
  fr: "L'adoption de l'IA explose, mais la maturit\u00e9 en IA responsable est en retard. Les violations de politique doublent et les r\u00e9gulateurs peuvent imposer des amendes allant jusqu'\u00e0 \u20ac ",
  es: "La adopci\u00f3n de la IA se dispara, pero la madurez en IA responsable va a la zaga. Las infracciones de pol\u00edticas se duplican y los reguladores pueden imponer multas de hasta \u20ac ",
};

export const riskSectionDescriptionMid: Record<Locale, string> = {
  en: "M or ",
  de: "Mio. oder ",
  fr: "M ou ",
  es: "M o ",
};

export const riskSectionDescriptionEnd: Record<Locale, string> = {
  en: " of turnover. Without the ability to control AI responses at execution time, organizations face rising legal penalties, data exposure, and operational loss.",
  de: " des Umsatzes verh\u00e4ngen. Ohne die F\u00e4higkeit, KI-Antworten zur Laufzeit zu kontrollieren, drohen Unternehmen steigende rechtliche Strafen, Datenexposition und operative Verluste.",
  fr: " du chiffre d'affaires. Sans la capacit\u00e9 de contr\u00f4ler les r\u00e9ponses de l'IA au moment de l'ex\u00e9cution, les organisations font face \u00e0 des sanctions juridiques croissantes, une exposition des donn\u00e9es et des pertes op\u00e9rationnelles.",
  es: " de la facturaci\u00f3n. Sin la capacidad de controlar las respuestas de la IA en tiempo de ejecuci\u00f3n, las organizaciones enfrentan sanciones legales crecientes, exposici\u00f3n de datos y p\u00e9rdidas operativas.",
};

// ---------------------------------------------------------------------------
// Risk Cards
// ---------------------------------------------------------------------------

type RiskCard = {
  badge: string;
  title: string;
  subtitle: string;
  stat: string;
  statLabel?: string;
  statBadge?: string;
  body: string;
  metric1Label?: string;
  metric1Value?: string;
  metric2Label?: string;
  metric2Value?: string;
  metric2Subtext?: string;
  breachLabel?: string;
  breachRange?: string;
  trendTitle?: string;
  riskLabel?: string;
  riskValue?: string;
};

export const riskCards: Record<Locale, RiskCard[]> = {
  en: [
    {
      badge: "04",
      title: "AI Risk Is Board-Level",
      subtitle: "Disclosures make AI risk legally material",
      stat: "418+",
      statLabel: "public companies disclosed AI risk (2025)",
      statBadge: "2025 disclosures",
      body: "Disclosures increased 46% from 2024 and grew nearly 9\u00d7 since 2023 - making AI risk legally material.",
      metric1Label: "YoY growth (2024 \u2192 2025)",
      metric1Value: "46",
      metric2Label: "Growth since 2023",
      metric2Value: "9\u00d7",
      metric2Subtext: "AI risk is now a board-level and legally material issue.",
    },
    {
      badge: "05",
      title: "Shadow AI Accelerates Failures",
      subtitle: "Unmanaged AI expands risk surface exponentially",
      stat: "40%",
      statBadge: "by 2030 (Gartner)",
      breachLabel: "Breach risk timeline",
      breachRange: "2026 \u2192 2030",
      body: "These breaches arise from unmanaged or unauthorized AI use. Without blocking mechanisms, risk surface expands exponentially.",
    },
    {
      badge: "06",
      title: "High-Level Trend",
      subtitle: "Adoption + weak controls + strict regulation",
      stat: "",
      trendTitle: "AI adoption \u2191 + weak controls + stricter regulation = compounding risk curve.",
      riskLabel: "Risk trajectory",
      riskValue: "accelerating",
      body: "The convergence of rapid adoption, insufficient controls, and increasing enforcement creates an exponential risk trajectory that must be addressed proactively.",
    },
  ],
  de: [
    {
      badge: "04",
      title: "KI-Risiko auf Vorstandsebene",
      subtitle: "Offenlegungen machen KI-Risiken rechtlich wesentlich",
      stat: "418+",
      statLabel: "b\u00f6rsennotierte Unternehmen legten KI-Risiken offen (2025)",
      statBadge: "Offenlegungen 2025",
      body: "Die Offenlegungen stiegen gegen\u00fcber 2024 um 46 % und haben sich seit 2023 fast verneunfacht \u2013 KI-Risiken sind damit rechtlich wesentlich.",
      metric1Label: "Wachstum im Jahresvergleich (2024 \u2192 2025)",
      metric1Value: "46",
      metric2Label: "Wachstum seit 2023",
      metric2Value: "9\u00d7",
      metric2Subtext: "KI-Risiko ist jetzt ein Thema auf Vorstandsebene und rechtlich wesentlich.",
    },
    {
      badge: "05",
      title: "Schatten-KI beschleunigt Ausf\u00e4lle",
      subtitle: "Unkontrollierte KI vergr\u00f6\u00dfert die Angriffsfl\u00e4che exponentiell",
      stat: "40%",
      statBadge: "bis 2030 (Gartner)",
      breachLabel: "Zeitrahmen f\u00fcr Sicherheitsverletzungen",
      breachRange: "2026 \u2192 2030",
      body: "Diese Sicherheitsverletzungen entstehen durch unkontrollierte oder nicht autorisierte KI-Nutzung. Ohne Sperrmechanismen w\u00e4chst die Angriffsfl\u00e4che exponentiell.",
    },
    {
      badge: "06",
      title: "\u00dcbergeordneter Trend",
      subtitle: "Adoption + schwache Kontrollen + strenge Regulierung",
      stat: "",
      trendTitle: "KI-Adoption \u2191 + schwache Kontrollen + strengere Regulierung = sich verst\u00e4rkende Risikokurve.",
      riskLabel: "Risikoentwicklung",
      riskValue: "beschleunigend",
      body: "Das Zusammentreffen von rascher Adoption, unzureichenden Kontrollen und zunehmender Durchsetzung erzeugt eine exponentielle Risikoentwicklung, die proaktiv angegangen werden muss.",
    },
  ],
  fr: [
    {
      badge: "04",
      title: "Le risque IA au niveau du conseil d'administration",
      subtitle: "Les divulgations rendent le risque IA juridiquement significatif",
      stat: "418+",
      statLabel: "entreprises cot\u00e9es ont divulgu\u00e9 le risque IA (2025)",
      statBadge: "Divulgations 2025",
      body: "Les divulgations ont augment\u00e9 de 46 % par rapport \u00e0 2024 et ont \u00e9t\u00e9 multipli\u00e9es par pr\u00e8s de 9 depuis 2023, rendant le risque IA juridiquement significatif.",
      metric1Label: "Croissance annuelle (2024 \u2192 2025)",
      metric1Value: "46",
      metric2Label: "Croissance depuis 2023",
      metric2Value: "9\u00d7",
      metric2Subtext: "Le risque IA est d\u00e9sormais un enjeu au niveau du conseil d'administration et juridiquement significatif.",
    },
    {
      badge: "05",
      title: "L'IA fantôme acc\u00e9l\u00e8re les d\u00e9faillances",
      subtitle: "L'IA non g\u00e9r\u00e9e \u00e9largit la surface de risque de mani\u00e8re exponentielle",
      stat: "40%",
      statBadge: "d'ici 2030 (Gartner)",
      breachLabel: "Chronologie des risques de violation",
      breachRange: "2026 \u2192 2030",
      body: "Ces violations proviennent d'une utilisation non g\u00e9r\u00e9e ou non autoris\u00e9e de l'IA. Sans m\u00e9canismes de blocage, la surface de risque s'\u00e9tend de mani\u00e8re exponentielle.",
    },
    {
      badge: "06",
      title: "Tendance g\u00e9n\u00e9rale",
      subtitle: "Adoption + contr\u00f4les faibles + r\u00e9glementation stricte",
      stat: "",
      trendTitle: "Adoption de l'IA \u2191 + contr\u00f4les faibles + r\u00e9glementation plus stricte = courbe de risque croissante.",
      riskLabel: "Trajectoire du risque",
      riskValue: "en acc\u00e9l\u00e9ration",
      body: "La convergence d'une adoption rapide, de contr\u00f4les insuffisants et d'une application croissante cr\u00e9e une trajectoire de risque exponentielle qui doit \u00eatre trait\u00e9e de mani\u00e8re proactive.",
    },
  ],
  es: [
    {
      badge: "04",
      title: "El riesgo de IA es de nivel directivo",
      subtitle: "Las divulgaciones hacen que el riesgo de IA sea jur\u00eddicamente relevante",
      stat: "418+",
      statLabel: "empresas cotizadas divulgaron riesgo de IA (2025)",
      statBadge: "Divulgaciones 2025",
      body: "Las divulgaciones aumentaron un 46 % respecto a 2024 y se multiplicaron casi por 9 desde 2023, haciendo que el riesgo de IA sea jur\u00eddicamente relevante.",
      metric1Label: "Crecimiento interanual (2024 \u2192 2025)",
      metric1Value: "46",
      metric2Label: "Crecimiento desde 2023",
      metric2Value: "9\u00d7",
      metric2Subtext: "El riesgo de IA es ahora un tema de nivel directivo y jur\u00eddicamente relevante.",
    },
    {
      badge: "05",
      title: "La IA en la sombra acelera los fallos",
      subtitle: "La IA no gestionada ampl\u00eda la superficie de riesgo exponencialmente",
      stat: "40%",
      statBadge: "para 2030 (Gartner)",
      breachLabel: "Cronolog\u00eda de riesgo de brechas",
      breachRange: "2026 \u2192 2030",
      body: "Estas brechas surgen del uso no gestionado o no autorizado de la IA. Sin mecanismos de bloqueo, la superficie de riesgo se expande exponencialmente.",
    },
    {
      badge: "06",
      title: "Tendencia general",
      subtitle: "Adopci\u00f3n + controles d\u00e9biles + regulaci\u00f3n estricta",
      stat: "",
      trendTitle: "Adopci\u00f3n de IA \u2191 + controles d\u00e9biles + regulaci\u00f3n m\u00e1s estricta = curva de riesgo acumulativa.",
      riskLabel: "Trayectoria del riesgo",
      riskValue: "en aceleraci\u00f3n",
      body: "La convergencia de una adopci\u00f3n r\u00e1pida, controles insuficientes y una aplicaci\u00f3n creciente crea una trayectoria de riesgo exponencial que debe abordarse de forma proactiva.",
    },
  ],
};

// ---------------------------------------------------------------------------
// How We Help Section
// ---------------------------------------------------------------------------

export const howWeHelpTitle: Record<Locale, string> = {
  en: "How We Help Enterprises",
  de: "Wie wir Unternehmen helfen",
  fr: "Comment nous aidons les entreprises",
  es: "C\u00f3mo ayudamos a las empresas",
};

export const howWeHelpDescription: Record<Locale, string> = {
  en: "We help organizations move AI into production by making risk decidable before it becomes costly.",
  de: "Wir helfen Organisationen, KI in die Produktion zu bringen, indem wir Risiken entscheidbar machen, bevor sie kostspielig werden.",
  fr: "Nous aidons les organisations \u00e0 mettre l'IA en production en rendant le risque d\u00e9cidable avant qu'il ne devienne co\u00fbteux.",
  es: "Ayudamos a las organizaciones a llevar la IA a producci\u00f3n haciendo que el riesgo sea decidible antes de que se vuelva costoso.",
};

export const howWeHelpList: Record<Locale, string[]> = {
  en: [
    "Reduce regulatory exposure by evaluating AI actions before they execute",
    "Prevent fines and enforcement events through real-time blocking and escalation",
    "Unlock ROI from stalled AI initiatives by enabling compliant production deployment",
    "Lower governance overhead by replacing manual reviews with deterministic controls",
  ],
  de: [
    "Regulatorische Risiken reduzieren, indem KI-Aktionen vor ihrer Ausf\u00fchrung bewertet werden",
    "Bu\u00dfgelder und Durchsetzungsma\u00dfnahmen durch Echtzeit-Blockierung und Eskalation verhindern",
    "ROI aus stagnierenden KI-Initiativen durch konforme Produktionsbereitstellung freisetzen",
    "Governance-Aufwand senken, indem manuelle \u00dcberpr\u00fcfungen durch deterministische Kontrollen ersetzt werden",
  ],
  fr: [
    "R\u00e9duire l'exposition r\u00e9glementaire en \u00e9valuant les actions de l'IA avant leur ex\u00e9cution",
    "Pr\u00e9venir les amendes et les mesures d'application gr\u00e2ce au blocage et \u00e0 l'escalade en temps r\u00e9el",
    "Lib\u00e9rer le ROI des initiatives IA bloqu\u00e9es en permettant un d\u00e9ploiement en production conforme",
    "R\u00e9duire la charge de gouvernance en rempla\u00e7ant les examens manuels par des contr\u00f4les d\u00e9terministes",
  ],
  es: [
    "Reducir la exposici\u00f3n regulatoria evaluando las acciones de la IA antes de que se ejecuten",
    "Prevenir multas y acciones de cumplimiento mediante bloqueo y escalamiento en tiempo real",
    "Desbloquear el ROI de iniciativas de IA estancadas habilitando el despliegue conforme en producci\u00f3n",
    "Reducir la carga de gobernanza reemplazando las revisiones manuales con controles deterministas",
  ],
};

// ---------------------------------------------------------------------------
// Impact Metrics Section
// ---------------------------------------------------------------------------

export const impactMetricsTitle: Record<Locale, string> = {
  en: "Impact Metrics",
  de: "Wirkungskennzahlen",
  fr: "Indicateurs d'impact",
  es: "M\u00e9tricas de impacto",
};

export const impactMetricsSubtitle: Record<Locale, string> = {
  en: "Real-time governance outcomes",
  de: "Echtzeit-Governance-Ergebnisse",
  fr: "R\u00e9sultats de gouvernance en temps r\u00e9el",
  es: "Resultados de gobernanza en tiempo real",
};

export const impactMetricsItems: Record<Locale, { label: string; description: string }[]> = {
  en: [
    { label: "Faster Deployment", description: "Move from pilot to production without slowing delivery." },
    { label: "Risk Reduction", description: "Block unsafe actions before they execute." },
    { label: "Compliance Rate", description: "Stay audit-ready with deterministic enforcement." },
  ],
  de: [
    { label: "Schnellere Bereitstellung", description: "Vom Pilotprojekt zur Produktion, ohne die Auslieferung zu verlangsamen." },
    { label: "Risikominderung", description: "Unsichere Aktionen blockieren, bevor sie ausgef\u00fchrt werden." },
    { label: "Konformit\u00e4tsrate", description: "Jederzeit auditbereit dank deterministischer Durchsetzung." },
  ],
  fr: [
    { label: "D\u00e9ploiement acc\u00e9l\u00e9r\u00e9", description: "Passez du pilote \u00e0 la production sans ralentir la livraison." },
    { label: "R\u00e9duction des risques", description: "Bloquez les actions non s\u00fbres avant qu'elles ne s'ex\u00e9cutent." },
    { label: "Taux de conformit\u00e9", description: "Restez pr\u00eat pour l'audit gr\u00e2ce \u00e0 une application d\u00e9terministe." },
  ],
  es: [
    { label: "Despliegue m\u00e1s r\u00e1pido", description: "Pase del piloto a producci\u00f3n sin ralentizar la entrega." },
    { label: "Reducci\u00f3n de riesgos", description: "Bloquee acciones inseguras antes de que se ejecuten." },
    { label: "Tasa de cumplimiento", description: "Mant\u00e9ngase listo para auditor\u00edas con aplicaci\u00f3n determinista." },
  ],
};

// ---------------------------------------------------------------------------
// Where This Fits Section
// ---------------------------------------------------------------------------

export const whereThisFitsBadge: Record<Locale, string> = {
  en: "Deployment coverage",
  de: "Bereitstellungsabdeckung",
  fr: "Couverture de d\u00e9ploiement",
  es: "Cobertura de despliegue",
};

export const whereThisFitsTitle: Record<Locale, string> = {
  en: "Where This Fits",
  de: "Wo es eingesetzt wird",
  fr: "O\u00f9 cela s'int\u00e8gre",
  es: "D\u00f3nde se integra",
};

export const whereThisFitsDescription: Record<Locale, string> = {
  en: "Deploy compliant AI across your entire technology stack.",
  de: "Setzen Sie konforme KI in Ihrem gesamten Technologie-Stack ein.",
  fr: "D\u00e9ployez une IA conforme sur l'ensemble de votre pile technologique.",
  es: "Despliegue IA conforme en toda su pila tecnol\u00f3gica.",
};

type WhereThisFitsConfig = {
  iconKey: "bot" | "messageSquare" | "gitBranch" | "fileText";
  topBar: string;
};

export const whereThisFitsConfig: WhereThisFitsConfig[] = [
  { iconKey: "bot", topBar: "from-emerald-500 to-teal-500" },
  { iconKey: "messageSquare", topBar: "from-blue-500 to-cyan-500" },
  { iconKey: "gitBranch", topBar: "from-orange-500 to-amber-500" },
  { iconKey: "fileText", topBar: "from-teal-500 to-emerald-500" },
];

export const whereThisFitsList: Record<Locale, { title: string; description: string }[]> = {
  en: [
    { title: "Autonomous AI Systems", description: "Agentic AI executing multi-step actions" },
    { title: "Enterprise Chatbots", description: "AI assistants handling customer interactions" },
    { title: "CI/CD Pipelines", description: "Model deployment and continuous integration" },
    { title: "Regulated Environments", description: "AI systems operating under compliance requirements" },
  ],
  de: [
    { title: "Autonome KI-Systeme", description: "Agentische KI, die mehrstufige Aktionen ausf\u00fchrt" },
    { title: "Unternehmens-Chatbots", description: "KI-Assistenten f\u00fcr Kundeninteraktionen" },
    { title: "CI/CD-Pipelines", description: "Modellbereitstellung und kontinuierliche Integration" },
    { title: "Regulierte Umgebungen", description: "KI-Systeme unter Compliance-Anforderungen" },
  ],
  fr: [
    { title: "Syst\u00e8mes d'IA autonomes", description: "IA agentique ex\u00e9cutant des actions en plusieurs \u00e9tapes" },
    { title: "Chatbots d'entreprise", description: "Assistants IA g\u00e9rant les interactions clients" },
    { title: "Pipelines CI/CD", description: "D\u00e9ploiement de mod\u00e8les et int\u00e9gration continue" },
    { title: "Environnements r\u00e9glement\u00e9s", description: "Syst\u00e8mes d'IA op\u00e9rant sous des exigences de conformit\u00e9" },
  ],
  es: [
    { title: "Sistemas de IA aut\u00f3nomos", description: "IA ag\u00e9ntica que ejecuta acciones de m\u00faltiples pasos" },
    { title: "Chatbots empresariales", description: "Asistentes de IA que gestionan interacciones con clientes" },
    { title: "Pipelines CI/CD", description: "Despliegue de modelos e integraci\u00f3n continua" },
    { title: "Entornos regulados", description: "Sistemas de IA que operan bajo requisitos de cumplimiento" },
  ],
};

// ---------------------------------------------------------------------------
// CTA Section
// ---------------------------------------------------------------------------

export const ctaTitle: Record<Locale, string> = {
  en: "Ready to deploy AI with confidence?",
  de: "Bereit, KI mit Zuversicht einzusetzen?",
  fr: "Pr\u00eat \u00e0 d\u00e9ployer l'IA en toute confiance\u00a0?",
  es: "\u00bfListo para desplegar IA con confianza?",
};

export const ctaDescription: Record<Locale, string> = {
  en: "Let's discuss how we can help your organization move from AI experimentation to compliant production.",
  de: "Lassen Sie uns besprechen, wie wir Ihrer Organisation helfen k\u00f6nnen, von KI-Experimenten zu konformer Produktion zu gelangen.",
  fr: "Discutons de la mani\u00e8re dont nous pouvons aider votre organisation \u00e0 passer de l'exp\u00e9rimentation IA \u00e0 une production conforme.",
  es: "Hablemos sobre c\u00f3mo podemos ayudar a su organizaci\u00f3n a pasar de la experimentaci\u00f3n con IA a una producci\u00f3n conforme.",
};

export const ctaButton: Record<Locale, string> = {
  en: "Get in Touch",
  de: "Kontakt aufnehmen",
  fr: "Nous contacter",
  es: "Cont\u00e1ctenos",
};
