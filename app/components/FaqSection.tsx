"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
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
];

export function FaqSection({ isDark }: { isDark: boolean }) {
  return (
    <section
      className={`py-20 lg:py-28 border-t ${
        isDark ? "bg-gray-950 border-white/10" : "bg-gray-50 border-gray-200/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div
            className={`text-sm font-semibold tracking-tight ${
              isDark ? "text-emerald-300" : "text-emerald-700"
            }`}
          >
            AI Governance Gateway
          </div>
          <h2
            className={`mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Deterministic enforcement, how it differs from monitoring, and what
            outcomes to expect.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((item, idx) => (
            <details
              key={item.q}
              className={`group rounded-2xl border transition-all duration-300 ${
                isDark
                  ? "bg-gray-900/50 border-white/10 hover:border-emerald-500/25"
                  : "bg-white border-gray-200/70 hover:border-emerald-400/60 shadow-soft-sm hover:shadow-soft"
              }`}
            >
              <summary
                className={`cursor-pointer list-none select-none px-6 py-5 flex items-start justify-between gap-6 ${
                  isDark ? "text-white" : "text-gray-900"
                } [&::-webkit-details-marker]:hidden`}
              >
                <div className="flex items-start gap-4 min-w-0">
                  <span
                    className={`mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold border ${
                      isDark
                        ? "bg-white/5 border-white/10 text-gray-200"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  <span className="text-lg font-bold tracking-tight leading-snug">
                    {item.q}
                  </span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                  aria-hidden="true"
                />
              </summary>

              <div className="px-6 pb-6">
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
