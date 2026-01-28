"use client";

import {
  CheckCircle,
  AlertCircle,
  Lock,
  Shield,
  Globe,
} from "lucide-react";
import { AppShell } from "../components/AppShell";
import { useTheme } from "../components/ThemeProvider";

export default function Regulatory() {
  const { isDark } = useTheme();

  return (
    <AppShell>
      <main className="pt-20">
        <section
          className={`pt-24 lg:pt-32 ${
            isDark
              ? "bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/30"
              : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-full">
              <h1
                className={`text-5xl lg:text-6xl font-bold mb-8 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Regulatory Scope
              </h1>
              <p
                className={`text-xl lg:text-2xl mb-12 leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                AI regulation is evolving globally, with enforcement already
                underway across major markets. Our system is designed to support
                organizations operating across jurisdictions, with an initial
                focus on the most impactful and actively enforced frameworks
                today:{" "}
              </p>
            </div>
          </div>
        </section>

        <section
          className={`py-24 lg:py-32 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    name: "EU AI Act",
                    description:
                      "Full compliance with EU AI Act requirements including risk classification, documentation, and transparency obligations.",
                    icon: Lock,
                  },
                  {
                    name: "GDPR",
                    description:
                      "Privacy by design with comprehensive data handling, user consent, and data subject rights management.",
                    icon: Shield,
                  },
                  {
                    name: "U.S. Federal & State Guidelines ",
                    description:
                      "sector-specific and guidance-driven enforcement",
                    icon: CheckCircle,
                  },
                  {
                    name: "UAE AI & Data Regulations",
                    description:
                      "National AI governance, data-protection laws (e.g., PDPL), and sectoral oversight shaping compliant AI deployment in the Middle East.",
                    icon: CheckCircle,
                  },
                  {
                    name: "South Korean AI Act (SKAIA)",
                    description:
                      "South Korea’s AI governance framework shaping responsible deployment and sector expectations.",
                    icon: CheckCircle,
                  },
                  {
                    name: "India DPDP Act",
                    description: "data-protection law impacting AI data usage",
                    icon: CheckCircle,
                  },
                  {
                    name: "Framework Convention on AI",
                    description:
                      "international treaty aligning AI with human-rights principles",
                    icon: CheckCircle,
                  },
                ].map((framework, index) => {
                  const Icon = framework.icon;
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl p-10 border transition-all duration-300 hover:-translate-y-1 shadow-soft-sm hover:shadow-soft group ${
                        isDark
                          ? "bg-gray-900/50 border-white/10 hover:border-emerald-500/30"
                          : "bg-white border-gray-200/70 hover:border-emerald-400/60"
                      }`}
                    >
                      <div className="transition-all duration-300 group-hover:scale-110 mb-6">
                        <Icon
                          className={`w-14 h-14 ${
                            isDark ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-bold mb-4 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {framework.name}
                      </h3>
                      <p
                        className={`text-base leading-relaxed ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {framework.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className={`mt-16 rounded-2xl p-10 border transition-all duration-300 hover:shadow-soft shadow-soft-sm ${
              isDark
                ? "bg-gradient-to-br from-gray-900/60 to-gray-950/60 border-white/10 hover:border-emerald-500/30"
                : "bg-gradient-to-br from-white to-gray-50 border-gray-200/70 hover:border-emerald-400/60"
            }`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${
                  isDark ? "bg-emerald-500/20" : "bg-emerald-100"
                }`}>
                  <Globe className={`w-6 h-6 ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    Global Regulatory Coverage
                  </h3>
                  <p
                    className={`text-lg lg:text-xl leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    The system is built to evolve as regulations mature and new
                    frameworks come into force across key jurisdictions including
                    Europe, the United States, India, Singapore, Japan, and other
                    global markets, and is designed to apply across all categories of
                    AI products and use cases. In addition, the system aligns with
                    widely adopted international frameworks and emerging national
                    policies, including voluntary governance models and global
                    standards that influence regulatory expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <div
                className={`rounded-2xl border p-10 transition-all duration-300 hover:shadow-xl ${
                  isDark
                    ? "bg-blue-950/25 border-blue-500/20 hover:border-blue-400/30"
                    : "bg-blue-50 border-blue-200 hover:border-blue-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                      isDark ? "bg-blue-500/10 border-blue-500/20" : "bg-white border-blue-200"
                    }`}
                  >
                    <AlertCircle
                      className={`w-6 h-6 ${
                        isDark ? "text-blue-300" : "text-blue-700"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-3 ${
                        isDark ? "text-blue-100" : "text-blue-900"
                      }`}
                    >
                      Regular Compliance Updates
                    </h3>
                    <p
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-blue-200/90" : "text-blue-800"
                      }`}
                    >
                      We continuously monitor regulatory developments and automatically enhance our services and offerings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2
                className={`text-4xl lg:text-5xl font-bold mb-16 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Key Compliance Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
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
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-8 flex gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                      isDark
                        ? "bg-gray-800 border border-gray-700 hover:border-emerald-500/50"
                        : "bg-white border border-gray-200 hover:border-emerald-400"
                    }`}
                  >
                    <CheckCircle
                      className={`w-6 h-6 flex-shrink-0 mt-1 ${
                        isDark ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    />
                    <div>
                      <h3
                        className={`font-bold mb-2 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-base leading-relaxed ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </AppShell>
  );
}
