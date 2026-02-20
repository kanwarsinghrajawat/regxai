export const faqs = [
  {
    q: "What does this product do?",
    a: "It is a deterministic AI governance gateway that sits between AI systems and execution, deciding whether an AI action is allowed, blocked, or requires additional steps before it runs.",
  },
  {
    q: "How is this different from AI monitoring tools?",
    a: "Monitoring tools detect issues after execution. This gateway prevents non-compliant AI actions before they occur.",
  },
  {
    q: "Does this replace compliance or GRC tools?",
    a: "No. It complements them by enforcing compliance at runtime while traditional tools handle audits and reporting.",
  },
  {
    q: "Do you modify or retrain AI models?",
    a: "No. The gateway operates externally and does not affect model training or performance.",
  },
  {
    q: "How does this work with chatbots?",
    a: "Chatbot intent is validated against a controlled catalog and evaluated before execution. Unknown intents are blocked by default.",
  },
  {
    q: "Is this only for chatbots?",
    a: "No. It also supports agent workflows, inference APIs, and AI-enabled CI/CD pipelines.",
  },
  {
    q: "Which regulations are supported?",
    a: "GDPR, EU AI Act, and configurable internal or sector-specific policies.",
  },
  {
    q: "How does this reduce fines and legal risk?",
    a: "By preventing violations before execution and producing immutable compliance evidence.",
  },
  {
    q: "What ROI can customers expect?",
    a: "Customers typically see ~3,000%–8,000% ROI through avoided fines, incidents, and regulatory exposure.",
  },
  {
    q: "Does this add latency?",
    a: "No. It is API-based, stateless, and designed for low-latency real-time decisions.",
  },
  {
    q: "What happens if the system is unavailable?",
    a: "Fail-safe configurations ensure stability while preserving compliance posture.",
  },
  {
    q: "Who uses this product?",
    a: "CTOs, Legal & Compliance teams, and Product leaders jointly.",
  },
] as const;

export const faqSectionTitle = "Frequently Asked Questions";
export const faqSectionSubtitle =
  "Deterministic enforcement, how it differs from monitoring, and what outcomes to expect.";
export const faqSectionBadge = "AI Governance Gateway";
