export const problemTitle = "The Problem";

export const problemStats = [
  {
    value: 84,
    suffix: "%",
    label:
      "of surveyed organisations expect independent AI audits to become required in the near term. Implication: audits are seen as inevitable — but most orgs aren’t yet audit-ready (controls, logs, reproducible evals). Quick fix: start producing audit-ready artifacts now: versioned code/data, evaluation notebooks, decision logs and an evidence map.",
  },
  {
    value: 82,
    suffix: "%",
    label: "ERP Team lacks Accountability for E2E AI Product Lifecycle",
  },
  {
    value: 65,
    suffix: "%",
    label:
      "Consumers say they have already lost trust in an organization due to its misuse of AI or poor automated customer service experiences.",
  },
  {
    value: 56,
    suffix: "%",
    label:
      "Organizations admit they do not have a formal governance framework in place to manage Generative AI risks (bias, hallucinations, IP leakage).",
  },
];

export const ourSolutionTitle = "Our Solution";
export const ourSolutionDescription =
  "We provide a system that makes AI deployment responsible and decidable. Instead of relying on post-hoc reviews or manual checklists, our approach enables organizations to determine - at the moment of execution - whether an AI action is permitted to proceed.";

export const howItWorksTitle = "How It Works";
export const howItWorksSteps = [
  {
    description:
      "Our system integrates into existing enterprise AI workflows and evaluates actions before they occur. At each critical stage of the AI lifecycle, it determines whether an action can proceed, should be blocked, or requires explicit ownership, human on the loop.",
  },
  {
    description:
      "All decisions are deterministic by design, require no access to customer data, and are enforced in real time - enabling governance without slowing development or production outcomes.",
  },
  {
    description:
      "Every decision is recorded as a tamper-evident reference, creating an immutable trail of evidence that can be relied upon for internal review, audit, and regulatory inquiries.",
  },
];

export const systemArchitectureTitle = "System Architecture Flow";
export const flowSteps = [
  { step: "1", title: "AI Action Request", iconKey: "zap" as const },
  { step: "2", title: "Real-time Evaluation", iconKey: "shield" as const },
  { step: "3", title: "Deterministic Decision", iconKey: "target" as const },
  { step: "4", title: "Immutable Record", iconKey: "checkCircle" as const },
];
export const averageResponseTimeLabel = "Average Response Time";
export const averageResponseTimeValue = 50;

export const solutionHowWeHelpTitle = "How We Help Enterprises";
export const solutionHowWeHelpDescription =
  "We help organizations move AI into production by making risk decidable before it becomes costly.";
export const solutionHowWeHelpList = [
  "Reduce regulatory exposure by evaluating AI actions before they execute",
  "Prevent fines and enforcement events through real-time blocking and escalation",
  "Unlock ROI from stalled AI initiatives by enabling compliant production deployment",
  "Lower governance overhead by replacing manual reviews with deterministic controls",
  "Stay audit-ready by default with immutable decision records",
];

export const enterpriseImpactTitle = "Enterprise Impact Metrics";
export const enterpriseMetrics = [
  {
    label: "Risk Reduction",
    description: "Reduce exposure with execution-time controls.",
    iconKey: "shield" as const,
  },
  {
    label: "Faster Deployment",
    description: "Ship to production with confidence.",
    iconKey: "clock" as const,
  },
  {
    label: "Cost Savings",
    description: "Replace manual review with deterministic enforcement.",
    iconKey: "trendingUp" as const,
  },
  {
    label: "Compliance Rate",
    description: "Stay audit-ready by default.",
    iconKey: "checkCircle" as const,
  },
];
export const roiLabel = "ROI";
export const roiDescription =
  "Reduce exposure to illegal or harmful AI actions, prosecution, fines and reputational damages ";

export const useCaseDistributionTitle = "Use Case Distribution";
export const useCaseDistributionItems = [
  { label: "Autonomous AI Systems", color: "emerald" as const },
  { label: "Enterprise Chatbots", color: "blue" as const },
  { label: "CI/CD Pipelines", color: "teal" as const },
  { label: "Regulated Environments", color: "orange" as const },
];
export const useCaseCoveredLabel = "Covered";
export const useCaseBroadCoverageTitle =
  "Broad coverage across enterprise AI workflows.";
export const useCaseBroadCoverageDescription =
  "Designed to apply across model deployment, inference, and production execution.";

export const solutionWhereThisFitsTitle = "Where This Fits";
export const solutionWhereThisFitsDescription =
  "This system applies wherever AI decisions carry risk, responsibility, or regulatory exposure:";
export const solutionWhereThisFitsList = [
  "Autonomous and agentic AI systems executing multi-step actions",
  "Enterprise chatbots and AI assistants",
  "Model deployment and CI/CD pipelines",
  "AI systems operating in regulated environments",
  "Decision-making and inference workflows",
  "Organizations scaling AI beyond pilots into production",
];

export const whoThisIsForTitle = "Who This Is For";
export const whoThisIsForDescription =
  "This system is built for teams responsible for putting AI into production:";
export const whoThisIsForList = [
  "Engineering and platform teams deploying AI systems",
  "AI and data leaders accountable for risk and compliance",
  "Product teams taking AI to Go-to-market",
  "Organizations operating in regulated or high-risk environments",
];

export const targetAudienceTitle = "Target Audience Breakdown";
export const targetAudienceItems = [
  { iconKey: "code" as const, label: "Engineering Teams" },
  { iconKey: "users" as const, label: "AI & Data Leaders" },
  { iconKey: "target" as const, label: "Product Teams" },
  { iconKey: "building2" as const, label: "Regulated Organizations" },
];

export const solutionCtaTitle = "Ready to transform your AI deployment?";
export const solutionCtaDescription =
  "Get started with our solution today and ensure compliance at every step.";
export const solutionCtaButton = "Get in Touch";
