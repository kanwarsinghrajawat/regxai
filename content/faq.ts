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

export const faqCategories: { id: FaqCategoryId; label: string }[] = [
  { id: "product", label: "Product & capability" },
  { id: "compliance", label: "Compliance & risk" },
  { id: "technical", label: "Technical" },
  { id: "getting-started", label: "Getting started" },
];

export const faqs: FaqItem[] = [
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
  // {
  //   id: "who-uses-this",
  //   q: "Who uses this product?",
  //   a: "CTOs, Legal & Compliance teams, and Product leaders jointly.",
  //   category: "getting-started",
  //   link: { href: "/contact", label: "Talk to us" },
  // },
  // Certification & auditability
  {
    id: "certification-auditability",
    q: "Do you offer certification? Is the system auditable?",
    a: "We do not create or certify against new standards. We help organizations comply with existing law.\n\nOur gateway is designed to align directly with applicable legislation, so no separate third-party certification is required—legal requirements take precedence over private certifications.\n\nFor audits, we maintain secure, tamper-evident records tied to each relevant legal provision. These records can be shared with you or any authorized auditor when needed.",
    category: "compliance",
    link: { href: "/regulatory", label: "Regulatory approach" },
  },
  // EU AI Act mapping
  {
    id: "eu-ai-act-mapping",
    q: "How does your system map to specific EU AI Act articles?",
    a: "We map both GDPR and EU AI Act–applicable articles at runtime only. Applicable provisions are derived from metadata we extract from your system and are matched against our configured guidelines under each regulation.",
    category: "compliance",
    link: { href: "/regulatory", label: "Regulatory coverage" },
  },
  // Conformity assessment / regulator-ready
  {
    id: "conformity-assessment",
    q: "Can you generate regulator-ready documentation? If a regulator (e.g. BaFin) audits us, how does your system support us?",
    a: "We provide artifacts generated from runtime execution-including decisions such as Allow, Block, and Human-in-the-loop-that support your existing evidence and conformity documentation. These outputs are designed to complement your conformity assessment process rather than replace it.",
    category: "compliance",
    link: { href: "/regulatory", label: "Compliance evidence" },
  },
  // Regulation changes
  {
    id: "regulation-changes",
    q: "What happens when regulations change?",
    a: "When regulations change or are updated, we update our system accordingly and inform customers of what has changed, when the new requirements become enforceable, and how they can comply using our gateway.",
    category: "compliance",
    link: { href: "/regulatory", label: "Regulatory updates" },
  },
  // Data on servers
  {
    id: "data-on-servers",
    q: "What data do you process on your servers?",
    a: "We process only the metadata necessary for decisioning. We do not process other data on our systems.",
    category: "technical",
    link: { href: "/terms", label: "Terms & privacy" },
  },
  // Risk assessment
  {
    id: "risk-assessment",
    q: "Can you perform a risk assessment of our current system and provide a score?",
    a: "No. We do not perform risk assessments or scoring of client systems.",
    category: "getting-started",
  },
  // Compliance failure handling
  {
    id: "compliance-failure",
    q: "If there is a compliance failure, how do you address and manage it?",
    a: "We aim to provide the broadest possible coverage of enforceable compliance requirements. Any shortfall is addressed through root cause analysis and adjustments to the relevant controls. Because we only process data provided by you and do not operate your systems, we are not subject to fines or prosecution arising from your use of the gateway.",
    category: "compliance",
    link: { href: "/regulatory", label: "Compliance approach" },
  },
];

/** First N FAQs to show on home page teaser */
export const faqTeaserCount = 4;

export const faqSectionTitle = "Frequently Asked Questions";
export const faqSectionSubtitle =
  "Deterministic enforcement, how it differs from monitoring, and what outcomes to expect.";
export const faqSectionBadge = "AI Governance Gateway";
export const faqPageCta = "View all FAQs";
