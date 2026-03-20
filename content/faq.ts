import type { Locale } from "../app/components/LanguageProvider";

export type FaqCategoryId =
  | "product"
  | "compliance"
  | "technical"
  | "getting-started";

export interface FaqItem {
  id: string;
  q: string;
  a: string;
  category: FaqCategoryId;
  link?: { href: string; label: string };
}

/* ------------------------------------------------------------------ */
/*  Categories                                                        */
/* ------------------------------------------------------------------ */

export const faqCategories: Record<
  Locale,
  { id: FaqCategoryId; label: string }[]
> = {
  en: [
    { id: "product", label: "Product & capability" },
    { id: "compliance", label: "Compliance & risk" },
    { id: "technical", label: "Technical" },
    { id: "getting-started", label: "Getting started" },
  ],
  de: [
    { id: "product", label: "Produkt & Leistungsumfang" },
    { id: "compliance", label: "Compliance & Risiko" },
    { id: "technical", label: "Technik" },
    { id: "getting-started", label: "Erste Schritte" },
  ],
  fr: [
    { id: "product", label: "Produit & fonctionnalités" },
    { id: "compliance", label: "Conformité & risques" },
    { id: "technical", label: "Technique" },
    { id: "getting-started", label: "Démarrage" },
  ],
  es: [
    { id: "product", label: "Producto y funcionalidades" },
    { id: "compliance", label: "Cumplimiento y riesgo" },
    { id: "technical", label: "Técnico" },
    { id: "getting-started", label: "Primeros pasos" },
  ],
};

/* ------------------------------------------------------------------ */
/*  FAQs                                                              */
/* ------------------------------------------------------------------ */

export const faqs: Record<Locale, FaqItem[]> = {
  /* ==================== ENGLISH ==================== */
  en: [
    {
      id: "what-does-product-do",
      q: "What does this product do?",
      a: "It is a deterministic AI governance gateway that sits between AI systems and execution, deciding whether an AI action is allowed, blocked, or requires additional steps before it runs.",
      category: "product",
      link: { href: "/solution", label: "How it works" },
    },
    {
      id: "different-from-monitoring",
      q: "How is this different from AI monitoring tools?",
      a: "Monitoring tools detect issues after execution. This gateway prevents non-compliant AI actions before they occur.",
      category: "product",
      link: { href: "/solution", label: "Solution overview" },
    },
    {
      id: "replace-compliance-tools",
      q: "Does this replace compliance or GRC tools?",
      a: "No. It complements them by enforcing compliance at runtime while traditional tools handle audits and reporting.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatory approach" },
    },
    {
      id: "modify-retrain-models",
      q: "Do you modify or retrain AI models?",
      a: "No. The gateway operates externally and does not affect model training or performance.",
      category: "technical",
    },
    {
      id: "work-with-chatbots",
      q: "How does this work with chatbots?",
      a: "Chatbot intent is validated against a controlled catalog and evaluated before execution. Unknown intents are blocked by default.",
      category: "product",
      link: { href: "/services", label: "Our services" },
    },
    {
      id: "only-for-chatbots",
      q: "Is this only for chatbots?",
      a: "No. It also supports agent workflows, inference APIs, and AI-enabled CI/CD pipelines.",
      category: "product",
      link: { href: "/solution", label: "Use cases" },
    },
    {
      id: "regulations-supported",
      q: "Which regulations are supported?",
      a: "GDPR, EU AI Act, and configurable internal or sector-specific policies.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatory coverage" },
    },
    {
      id: "reduce-fines-legal-risk",
      q: "How does this reduce fines and legal risk?",
      a: "By preventing violations before execution and producing immutable compliance evidence.",
      category: "compliance",
      link: { href: "/regulatory", label: "Compliance evidence" },
    },
    {
      id: "roi-expectations",
      q: "What ROI can customers expect?",
      a: "Customers typically see ~3,000%–8,000% ROI through avoided fines, incidents, and regulatory exposure.",
      category: "getting-started",
      link: { href: "/contact", label: "Request a demo" },
    },
    {
      id: "latency",
      q: "Does this add latency?",
      a: "No. It is API-based, stateless, and designed for low-latency real-time decisions.",
      category: "technical",
    },
    {
      id: "system-unavailable",
      q: "What happens if the system is unavailable?",
      a: "Fail-safe configurations ensure stability while preserving compliance posture.",
      category: "technical",
    },
    {
      id: "certification-auditability",
      q: "Do you offer certification? Is the system auditable?",
      a: "We do not create or certify against new standards. We help organizations comply with existing law.\n\nOur gateway is designed to align directly with applicable legislation, so no separate third-party certification is required—legal requirements take precedence over private certifications.\n\nFor audits, we maintain secure, tamper-evident records tied to each relevant legal provision. These records can be shared with you or any authorized auditor when needed.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatory approach" },
    },
    {
      id: "eu-ai-act-mapping",
      q: "How does your system map to specific EU AI Act articles?",
      a: "We map both GDPR and EU AI Act–applicable articles at runtime only. Applicable provisions are derived from metadata we extract from your system and are matched against our configured guidelines under each regulation.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatory coverage" },
    },
    {
      id: "conformity-assessment",
      q: "Can you generate regulator-ready documentation? If a regulator (e.g. BaFin) audits us, how does your system support us?",
      a: "We provide artifacts generated from runtime execution-including decisions such as Allow, Block, and Human-in-the-loop-that support your existing evidence and conformity documentation. These outputs are designed to complement your conformity assessment process rather than replace it.",
      category: "compliance",
      link: { href: "/regulatory", label: "Compliance evidence" },
    },
    {
      id: "regulation-changes",
      q: "What happens when regulations change?",
      a: "When regulations change or are updated, we update our system accordingly and inform customers of what has changed, when the new requirements become enforceable, and how they can comply using our gateway.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatory updates" },
    },
    {
      id: "data-on-servers",
      q: "What data do you process on your servers?",
      a: "We process only the metadata necessary for decisioning. We do not process other data on our systems.",
      category: "technical",
      link: { href: "/terms", label: "Terms & privacy" },
    },
    {
      id: "risk-assessment",
      q: "Can you perform a risk assessment of our current system and provide a score?",
      a: "No. We do not perform risk assessments or scoring of client systems.",
      category: "getting-started",
    },
    {
      id: "compliance-failure",
      q: "If there is a compliance failure, how do you address and manage it?",
      a: "We aim to provide the broadest possible coverage of enforceable compliance requirements. Any shortfall is addressed through root cause analysis and adjustments to the relevant controls. Because we only process data provided by you and do not operate your systems, we are not subject to fines or prosecution arising from your use of the gateway.",
      category: "compliance",
      link: { href: "/regulatory", label: "Compliance approach" },
    },
  ],

  /* ==================== GERMAN ==================== */
  de: [
    {
      id: "what-does-product-do",
      q: "Was macht dieses Produkt?",
      a: "Es ist ein deterministisches KI-Governance-Gateway, das zwischen KI-Systemen und deren Ausführung sitzt und entscheidet, ob eine KI-Aktion erlaubt, blockiert oder vor der Ausführung zusätzliche Schritte erfordert.",
      category: "product",
      link: { href: "/solution", label: "So funktioniert es" },
    },
    {
      id: "different-from-monitoring",
      q: "Wie unterscheidet sich das von KI-Monitoring-Tools?",
      a: "Monitoring-Tools erkennen Probleme erst nach der Ausführung. Dieses Gateway verhindert nicht-konforme KI-Aktionen, bevor sie auftreten.",
      category: "product",
      link: { href: "/solution", label: "Lösungsübersicht" },
    },
    {
      id: "replace-compliance-tools",
      q: "Ersetzt dies Compliance- oder GRC-Tools?",
      a: "Nein. Es ergänzt diese, indem es Compliance zur Laufzeit durchsetzt, während herkömmliche Tools Audits und Berichte übernehmen.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatorischer Ansatz" },
    },
    {
      id: "modify-retrain-models",
      q: "Verändern oder trainieren Sie KI-Modelle neu?",
      a: "Nein. Das Gateway arbeitet extern und hat keinen Einfluss auf das Training oder die Leistung der Modelle.",
      category: "technical",
    },
    {
      id: "work-with-chatbots",
      q: "Wie funktioniert das mit Chatbots?",
      a: "Die Absicht des Chatbots wird anhand eines kontrollierten Katalogs validiert und vor der Ausführung bewertet. Unbekannte Absichten werden standardmäßig blockiert.",
      category: "product",
      link: { href: "/services", label: "Unsere Leistungen" },
    },
    {
      id: "only-for-chatbots",
      q: "Ist das nur für Chatbots?",
      a: "Nein. Es unterstützt auch Agenten-Workflows, Inferenz-APIs und KI-gestützte CI/CD-Pipelines.",
      category: "product",
      link: { href: "/solution", label: "Anwendungsfälle" },
    },
    {
      id: "regulations-supported",
      q: "Welche Vorschriften werden unterstützt?",
      a: "DSGVO, EU AI Act sowie konfigurierbare interne oder branchenspezifische Richtlinien.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatorische Abdeckung" },
    },
    {
      id: "reduce-fines-legal-risk",
      q: "Wie reduziert dies Bußgelder und rechtliche Risiken?",
      a: "Indem Verstöße vor der Ausführung verhindert und unveränderliche Compliance-Nachweise erzeugt werden.",
      category: "compliance",
      link: { href: "/regulatory", label: "Compliance-Nachweise" },
    },
    {
      id: "roi-expectations",
      q: "Welchen ROI können Kunden erwarten?",
      a: "Kunden erzielen in der Regel einen ROI von ca. 3.000 %–8.000 % durch vermiedene Bußgelder, Vorfälle und regulatorische Risiken.",
      category: "getting-started",
      link: { href: "/contact", label: "Demo anfordern" },
    },
    {
      id: "latency",
      q: "Fügt dies Latenz hinzu?",
      a: "Nein. Es ist API-basiert, zustandslos und für latenzarme Echtzeit-Entscheidungen konzipiert.",
      category: "technical",
    },
    {
      id: "system-unavailable",
      q: "Was passiert, wenn das System nicht verfügbar ist?",
      a: "Fail-Safe-Konfigurationen gewährleisten Stabilität und bewahren gleichzeitig den Compliance-Status.",
      category: "technical",
    },
    {
      id: "certification-auditability",
      q: "Bieten Sie eine Zertifizierung an? Ist das System auditierbar?",
      a: "Wir erstellen keine neuen Standards und zertifizieren auch nicht dagegen. Wir helfen Organisationen, bestehendes Recht einzuhalten.\n\nUnser Gateway ist so konzipiert, dass es direkt an geltendes Recht anknüpft, sodass keine separate Drittanbieter-Zertifizierung erforderlich ist – gesetzliche Anforderungen haben Vorrang vor privaten Zertifizierungen.\n\nFür Audits führen wir sichere, manipulationssichere Aufzeichnungen, die mit den jeweiligen Rechtsvorschriften verknüpft sind. Diese Aufzeichnungen können bei Bedarf mit Ihnen oder jedem autorisierten Prüfer geteilt werden.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatorischer Ansatz" },
    },
    {
      id: "eu-ai-act-mapping",
      q: "Wie bildet Ihr System spezifische Artikel des EU AI Act ab?",
      a: "Wir bilden sowohl DSGVO- als auch EU-AI-Act-relevante Artikel ausschließlich zur Laufzeit ab. Die anwendbaren Bestimmungen werden aus den Metadaten abgeleitet, die wir aus Ihrem System extrahieren, und mit unseren konfigurierten Leitlinien für jede Verordnung abgeglichen.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatorische Abdeckung" },
    },
    {
      id: "conformity-assessment",
      q: "Können Sie regulierungskonforme Dokumentation erstellen? Wenn eine Aufsichtsbehörde (z. B. BaFin) uns prüft, wie unterstützt uns Ihr System?",
      a: "Wir stellen Artefakte bereit, die aus der Laufzeitausführung generiert werden – einschließlich Entscheidungen wie Erlauben, Blockieren und Human-in-the-Loop –, die Ihre bestehenden Nachweise und Konformitätsdokumente ergänzen. Diese Ergebnisse sind darauf ausgelegt, Ihren Konformitätsbewertungsprozess zu ergänzen, nicht zu ersetzen.",
      category: "compliance",
      link: { href: "/regulatory", label: "Compliance-Nachweise" },
    },
    {
      id: "regulation-changes",
      q: "Was passiert, wenn sich Vorschriften ändern?",
      a: "Wenn Vorschriften geändert oder aktualisiert werden, aktualisieren wir unser System entsprechend und informieren unsere Kunden darüber, was sich geändert hat, wann die neuen Anforderungen durchsetzbar werden und wie sie mit unserem Gateway konform bleiben können.",
      category: "compliance",
      link: { href: "/regulatory", label: "Regulatorische Updates" },
    },
    {
      id: "data-on-servers",
      q: "Welche Daten verarbeiten Sie auf Ihren Servern?",
      a: "Wir verarbeiten ausschließlich die für die Entscheidungsfindung notwendigen Metadaten. Andere Daten verarbeiten wir nicht auf unseren Systemen.",
      category: "technical",
      link: { href: "/terms", label: "AGB & Datenschutz" },
    },
    {
      id: "risk-assessment",
      q: "Können Sie eine Risikobewertung unseres aktuellen Systems durchführen und einen Score liefern?",
      a: "Nein. Wir führen keine Risikobewertungen oder Bewertungen von Kundensystemen durch.",
      category: "getting-started",
    },
    {
      id: "compliance-failure",
      q: "Wie gehen Sie bei einem Compliance-Verstoß vor und wie wird dieser behandelt?",
      a: "Wir streben eine möglichst umfassende Abdeckung der durchsetzbaren Compliance-Anforderungen an. Etwaige Lücken werden durch Ursachenanalyse und Anpassung der relevanten Kontrollen behoben. Da wir ausschließlich die von Ihnen bereitgestellten Daten verarbeiten und Ihre Systeme nicht betreiben, unterliegen wir keinen Bußgeldern oder Strafverfolgungen, die aus Ihrer Nutzung des Gateways entstehen.",
      category: "compliance",
      link: { href: "/regulatory", label: "Compliance-Ansatz" },
    },
  ],

  /* ==================== FRENCH ==================== */
  fr: [
    {
      id: "what-does-product-do",
      q: "Que fait ce produit ?",
      a: "C'est une passerelle de gouvernance IA déterministe qui s'interpose entre les systèmes d'IA et leur exécution, déterminant si une action IA est autorisée, bloquée ou nécessite des étapes supplémentaires avant son exécution.",
      category: "product",
      link: { href: "/solution", label: "Comment ça fonctionne" },
    },
    {
      id: "different-from-monitoring",
      q: "En quoi est-ce différent des outils de surveillance IA ?",
      a: "Les outils de surveillance détectent les problèmes après l'exécution. Cette passerelle empêche les actions IA non conformes avant qu'elles ne se produisent.",
      category: "product",
      link: { href: "/solution", label: "Présentation de la solution" },
    },
    {
      id: "replace-compliance-tools",
      q: "Cela remplace-t-il les outils de conformité ou de GRC ?",
      a: "Non. Il les complète en imposant la conformité en temps réel, tandis que les outils traditionnels gèrent les audits et les rapports.",
      category: "compliance",
      link: { href: "/regulatory", label: "Approche réglementaire" },
    },
    {
      id: "modify-retrain-models",
      q: "Modifiez-vous ou réentraînez-vous les modèles d'IA ?",
      a: "Non. La passerelle fonctionne de manière externe et n'affecte ni l'entraînement ni les performances des modèles.",
      category: "technical",
    },
    {
      id: "work-with-chatbots",
      q: "Comment cela fonctionne-t-il avec les chatbots ?",
      a: "L'intention du chatbot est validée par rapport à un catalogue contrôlé et évaluée avant l'exécution. Les intentions inconnues sont bloquées par défaut.",
      category: "product",
      link: { href: "/services", label: "Nos services" },
    },
    {
      id: "only-for-chatbots",
      q: "Est-ce uniquement pour les chatbots ?",
      a: "Non. La solution prend également en charge les workflows d'agents, les API d'inférence et les pipelines CI/CD intégrant de l'IA.",
      category: "product",
      link: { href: "/solution", label: "Cas d'usage" },
    },
    {
      id: "regulations-supported",
      q: "Quelles réglementations sont prises en charge ?",
      a: "Le RGPD, le règlement européen sur l'IA (EU AI Act) ainsi que des politiques internes ou sectorielles configurables.",
      category: "compliance",
      link: { href: "/regulatory", label: "Couverture réglementaire" },
    },
    {
      id: "reduce-fines-legal-risk",
      q: "Comment cela réduit-il les amendes et les risques juridiques ?",
      a: "En empêchant les violations avant l'exécution et en produisant des preuves de conformité immuables.",
      category: "compliance",
      link: { href: "/regulatory", label: "Preuves de conformité" },
    },
    {
      id: "roi-expectations",
      q: "Quel retour sur investissement les clients peuvent-ils attendre ?",
      a: "Les clients obtiennent généralement un ROI de l'ordre de 3 000 % à 8 000 % grâce aux amendes, incidents et expositions réglementaires évités.",
      category: "getting-started",
      link: { href: "/contact", label: "Demander une démo" },
    },
    {
      id: "latency",
      q: "Cela ajoute-t-il de la latence ?",
      a: "Non. La solution est basée sur une API, sans état, et conçue pour des décisions en temps réel à faible latence.",
      category: "technical",
    },
    {
      id: "system-unavailable",
      q: "Que se passe-t-il si le système est indisponible ?",
      a: "Des configurations de sécurité intégrée garantissent la stabilité tout en préservant le niveau de conformité.",
      category: "technical",
    },
    {
      id: "certification-auditability",
      q: "Proposez-vous une certification ? Le système est-il auditable ?",
      a: "Nous ne créons ni ne certifions de nouvelles normes. Nous aidons les organisations à se conformer au droit en vigueur.\n\nNotre passerelle est conçue pour s'aligner directement sur la législation applicable, de sorte qu'aucune certification tierce distincte n'est requise — les exigences légales prévalent sur les certifications privées.\n\nPour les audits, nous conservons des enregistrements sécurisés et infalsifiables liés à chaque disposition légale concernée. Ces enregistrements peuvent être partagés avec vous ou tout auditeur autorisé en cas de besoin.",
      category: "compliance",
      link: { href: "/regulatory", label: "Approche réglementaire" },
    },
    {
      id: "eu-ai-act-mapping",
      q: "Comment votre système s'articule-t-il avec les articles spécifiques du règlement européen sur l'IA ?",
      a: "Nous faisons correspondre les articles applicables du RGPD et du règlement européen sur l'IA uniquement en temps réel. Les dispositions applicables sont dérivées des métadonnées que nous extrayons de votre système et sont comparées à nos directives configurées pour chaque réglementation.",
      category: "compliance",
      link: { href: "/regulatory", label: "Couverture réglementaire" },
    },
    {
      id: "conformity-assessment",
      q: "Pouvez-vous générer une documentation prête pour les régulateurs ? Si un régulateur (par ex. BaFin) nous audite, comment votre système nous aide-t-il ?",
      a: "Nous fournissons des artefacts générés à partir de l'exécution en temps réel — y compris les décisions telles qu'Autoriser, Bloquer et Intervention humaine — qui complètent vos preuves existantes et votre documentation de conformité. Ces résultats sont conçus pour compléter votre processus d'évaluation de conformité, et non pour le remplacer.",
      category: "compliance",
      link: { href: "/regulatory", label: "Preuves de conformité" },
    },
    {
      id: "regulation-changes",
      q: "Que se passe-t-il lorsque les réglementations changent ?",
      a: "Lorsque les réglementations changent ou sont mises à jour, nous mettons à jour notre système en conséquence et informons nos clients de ce qui a changé, de la date d'entrée en vigueur des nouvelles exigences et de la manière dont ils peuvent se conformer à l'aide de notre passerelle.",
      category: "compliance",
      link: { href: "/regulatory", label: "Mises à jour réglementaires" },
    },
    {
      id: "data-on-servers",
      q: "Quelles données traitez-vous sur vos serveurs ?",
      a: "Nous traitons uniquement les métadonnées nécessaires à la prise de décision. Nous ne traitons aucune autre donnée sur nos systèmes.",
      category: "technical",
      link: { href: "/terms", label: "CGU & confidentialité" },
    },
    {
      id: "risk-assessment",
      q: "Pouvez-vous effectuer une évaluation des risques de notre système actuel et fournir un score ?",
      a: "Non. Nous n'effectuons ni évaluations des risques ni notation des systèmes clients.",
      category: "getting-started",
    },
    {
      id: "compliance-failure",
      q: "En cas de défaillance de conformité, comment la traitez-vous et la gérez-vous ?",
      a: "Nous visons la couverture la plus large possible des exigences de conformité applicables. Toute lacune est corrigée par une analyse des causes profondes et des ajustements des contrôles concernés. Étant donné que nous traitons uniquement les données que vous nous fournissez et que nous n'exploitons pas vos systèmes, nous ne sommes pas soumis aux amendes ou poursuites découlant de votre utilisation de la passerelle.",
      category: "compliance",
      link: { href: "/regulatory", label: "Approche de conformité" },
    },
  ],

  /* ==================== SPANISH ==================== */
  es: [
    {
      id: "what-does-product-do",
      q: "¿Qué hace este producto?",
      a: "Es una pasarela de gobernanza de IA determinista que se sitúa entre los sistemas de IA y su ejecución, decidiendo si una acción de IA está permitida, bloqueada o requiere pasos adicionales antes de ejecutarse.",
      category: "product",
      link: { href: "/solution", label: "Cómo funciona" },
    },
    {
      id: "different-from-monitoring",
      q: "¿En qué se diferencia de las herramientas de monitorización de IA?",
      a: "Las herramientas de monitorización detectan problemas después de la ejecución. Esta pasarela previene acciones de IA no conformes antes de que ocurran.",
      category: "product",
      link: { href: "/solution", label: "Descripción de la solución" },
    },
    {
      id: "replace-compliance-tools",
      q: "¿Esto reemplaza las herramientas de cumplimiento o GRC?",
      a: "No. Las complementa aplicando el cumplimiento en tiempo de ejecución, mientras que las herramientas tradicionales se encargan de auditorías e informes.",
      category: "compliance",
      link: { href: "/regulatory", label: "Enfoque regulatorio" },
    },
    {
      id: "modify-retrain-models",
      q: "¿Modifican o reentrenan modelos de IA?",
      a: "No. La pasarela opera de forma externa y no afecta al entrenamiento ni al rendimiento de los modelos.",
      category: "technical",
    },
    {
      id: "work-with-chatbots",
      q: "¿Cómo funciona esto con chatbots?",
      a: "La intención del chatbot se valida contra un catálogo controlado y se evalúa antes de la ejecución. Las intenciones desconocidas se bloquean por defecto.",
      category: "product",
      link: { href: "/services", label: "Nuestros servicios" },
    },
    {
      id: "only-for-chatbots",
      q: "¿Es solo para chatbots?",
      a: "No. También soporta flujos de trabajo de agentes, APIs de inferencia y pipelines de CI/CD con IA.",
      category: "product",
      link: { href: "/solution", label: "Casos de uso" },
    },
    {
      id: "regulations-supported",
      q: "¿Qué regulaciones se soportan?",
      a: "El RGPD, el Reglamento Europeo de IA (EU AI Act) y políticas internas o sectoriales configurables.",
      category: "compliance",
      link: { href: "/regulatory", label: "Cobertura regulatoria" },
    },
    {
      id: "reduce-fines-legal-risk",
      q: "¿Cómo reduce esto las multas y el riesgo legal?",
      a: "Previniendo infracciones antes de la ejecución y generando evidencias de cumplimiento inmutables.",
      category: "compliance",
      link: { href: "/regulatory", label: "Evidencias de cumplimiento" },
    },
    {
      id: "roi-expectations",
      q: "¿Qué retorno de inversión pueden esperar los clientes?",
      a: "Los clientes suelen obtener un ROI de entre el 3.000 % y el 8.000 % gracias a multas, incidentes y exposición regulatoria evitados.",
      category: "getting-started",
      link: { href: "/contact", label: "Solicitar una demo" },
    },
    {
      id: "latency",
      q: "¿Esto añade latencia?",
      a: "No. Está basado en API, es sin estado y está diseñado para decisiones en tiempo real con baja latencia.",
      category: "technical",
    },
    {
      id: "system-unavailable",
      q: "¿Qué sucede si el sistema no está disponible?",
      a: "Las configuraciones a prueba de fallos garantizan la estabilidad mientras se preserva el nivel de cumplimiento.",
      category: "technical",
    },
    {
      id: "certification-auditability",
      q: "¿Ofrecen certificación? ¿Es el sistema auditable?",
      a: "No creamos ni certificamos nuevos estándares. Ayudamos a las organizaciones a cumplir con la legislación vigente.\n\nNuestra pasarela está diseñada para alinearse directamente con la legislación aplicable, por lo que no se requiere una certificación de terceros aparte: los requisitos legales prevalecen sobre las certificaciones privadas.\n\nPara auditorías, mantenemos registros seguros e inalterables vinculados a cada disposición legal pertinente. Estos registros se pueden compartir con usted o con cualquier auditor autorizado cuando sea necesario.",
      category: "compliance",
      link: { href: "/regulatory", label: "Enfoque regulatorio" },
    },
    {
      id: "eu-ai-act-mapping",
      q: "¿Cómo se mapea su sistema a los artículos específicos del Reglamento Europeo de IA?",
      a: "Mapeamos los artículos aplicables tanto del RGPD como del Reglamento Europeo de IA únicamente en tiempo de ejecución. Las disposiciones aplicables se derivan de los metadatos que extraemos de su sistema y se comparan con nuestras directrices configuradas para cada regulación.",
      category: "compliance",
      link: { href: "/regulatory", label: "Cobertura regulatoria" },
    },
    {
      id: "conformity-assessment",
      q: "¿Pueden generar documentación lista para los reguladores? Si un regulador (p. ej. BaFin) nos audita, ¿cómo nos apoya su sistema?",
      a: "Proporcionamos artefactos generados a partir de la ejecución en tiempo real, incluyendo decisiones como Permitir, Bloquear e Intervención humana, que complementan su documentación de evidencias y conformidad existente. Estos resultados están diseñados para complementar su proceso de evaluación de conformidad, no para reemplazarlo.",
      category: "compliance",
      link: { href: "/regulatory", label: "Evidencias de cumplimiento" },
    },
    {
      id: "regulation-changes",
      q: "¿Qué ocurre cuando cambian las regulaciones?",
      a: "Cuando las regulaciones cambian o se actualizan, actualizamos nuestro sistema en consecuencia e informamos a los clientes sobre qué ha cambiado, cuándo entran en vigor los nuevos requisitos y cómo pueden cumplirlos utilizando nuestra pasarela.",
      category: "compliance",
      link: { href: "/regulatory", label: "Actualizaciones regulatorias" },
    },
    {
      id: "data-on-servers",
      q: "¿Qué datos procesan en sus servidores?",
      a: "Procesamos únicamente los metadatos necesarios para la toma de decisiones. No procesamos otros datos en nuestros sistemas.",
      category: "technical",
      link: { href: "/terms", label: "Términos y privacidad" },
    },
    {
      id: "risk-assessment",
      q: "¿Pueden realizar una evaluación de riesgos de nuestro sistema actual y proporcionar una puntuación?",
      a: "No. No realizamos evaluaciones de riesgos ni puntuaciones de los sistemas de los clientes.",
      category: "getting-started",
    },
    {
      id: "compliance-failure",
      q: "Si hay un fallo de cumplimiento, ¿cómo lo abordan y gestionan?",
      a: "Buscamos ofrecer la cobertura más amplia posible de los requisitos de cumplimiento aplicables. Cualquier deficiencia se aborda mediante un análisis de causa raíz y ajustes en los controles pertinentes. Dado que solo procesamos los datos que usted nos proporciona y no operamos sus sistemas, no estamos sujetos a multas ni acciones legales derivadas de su uso de la pasarela.",
      category: "compliance",
      link: { href: "/regulatory", label: "Enfoque de cumplimiento" },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Section-level strings                                             */
/* ------------------------------------------------------------------ */

/** First N FAQs to show on home page teaser */
export const faqTeaserCount = 4;

export const faqSectionTitle: Record<Locale, string> = {
  en: "Frequently Asked Questions",
  de: "Häufig gestellte Fragen",
  fr: "Questions fréquentes",
  es: "Preguntas frecuentes",
};

export const faqSectionSubtitle: Record<Locale, string> = {
  en: "Deterministic enforcement, how it differs from monitoring, and what outcomes to expect.",
  de: "Deterministische Durchsetzung, Unterschiede zu Monitoring und welche Ergebnisse Sie erwarten können.",
  fr: "Application déterministe, différences avec la surveillance et résultats attendus.",
  es: "Aplicación determinista, diferencias con la monitorización y resultados esperables.",
};

export const faqSectionBadge: Record<Locale, string> = {
  en: "AI Governance Gateway",
  de: "KI-Governance-Gateway",
  fr: "Passerelle de gouvernance IA",
  es: "Pasarela de gobernanza de IA",
};

export const faqPageCta: Record<Locale, string> = {
  en: "View all FAQs",
  de: "Alle FAQs anzeigen",
  fr: "Voir toutes les FAQ",
  es: "Ver todas las preguntas",
};

/* ------------------------------------------------------------------ */
/*  FAQ page CTA section                                              */
/* ------------------------------------------------------------------ */

export const faqStillHaveQuestions: Record<Locale, string> = {
  en: "Still have questions?",
  de: "Noch Fragen?",
  fr: "Vous avez encore des questions ?",
  es: "¿Aún tiene preguntas?",
};

export const faqTeamCanHelp: Record<Locale, string> = {
  en: "Our team can walk you through the gateway and your use case.",
  de: "Unser Team führt Sie gerne durch das Gateway und Ihren Anwendungsfall.",
  fr: "Notre équipe peut vous accompagner dans la découverte de la passerelle et de votre cas d'usage.",
  es: "Nuestro equipo puede guiarle a través de la pasarela y su caso de uso.",
};

export const faqContactUs: Record<Locale, string> = {
  en: "Contact us",
  de: "Kontaktieren Sie uns",
  fr: "Contactez-nous",
  es: "Contáctenos",
};

export const faqJumpTo: Record<Locale, string> = {
  en: "Jump to",
  de: "Direkt zu",
  fr: "Aller à",
  es: "Ir a",
};
