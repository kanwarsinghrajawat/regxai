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
import {
  regulatoryHeroTitle,
  regulatoryHeroDescription,
  frameworksList,
  globalCoverageTitle,
  globalCoverageDescription,
  complianceUpdatesTitle,
  complianceUpdatesDescription,
  keyComplianceFeaturesTitle,
  keyComplianceFeaturesList,
} from "../../content/regulatory";

const FRAMEWORK_ICONS = {
  lock: Lock,
  shield: Shield,
  checkCircle: CheckCircle,
} as const;

export default function Regulatory() {
  const { isDark } = useTheme();

  return (
    <AppShell>
      <main className="pt-20">
        <section
          className={`relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden ${
            isDark ? "bg-gray-950" : "bg-gradient-to-b from-gray-50 to-white"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]"
                : "bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)]"
            }`}
            style={{ backgroundSize: "24px 24px" }}
            aria-hidden
          />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
            <p
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                isDark ? "text-emerald-400" : "text-emerald-600"
              }`}
            >
              Compliance
            </p>
            <h1
              className={`text-4xl lg:text-5xl font-semibold tracking-tight mb-6 leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {regulatoryHeroTitle}
            </h1>
            <p
              className={`text-lg lg:text-xl leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {regulatoryHeroDescription}
            </p>
          </div>
        </section>

        <section
          className={`py-16 lg:py-24 ${isDark ? "bg-gray-900" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworksList.map((framework, index) => {
                const Icon = FRAMEWORK_ICONS[framework.iconKey];
                return (
                  <div
                    key={index}
                    className={`rounded-xl border p-6 transition-all duration-200 ${
                      isDark
                        ? "bg-gray-800/50 border-gray-700/60 hover:border-emerald-500/30"
                        : "bg-gray-50/80 border-gray-200 hover:border-emerald-400/50"
                    }`}
                  >
                    <div
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-lg mb-4 ${
                        isDark ? "bg-emerald-500/15" : "bg-emerald-500/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-lg font-semibold tracking-tight mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {framework.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {framework.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className={`mt-12 rounded-2xl p-8 border transition-all duration-200 ${
              isDark
                ? "bg-gradient-to-br from-gray-900/60 to-gray-950/60 border-white/10 hover:border-emerald-500/30"
                : "bg-gradient-to-br from-white to-gray-50 border-gray-200/70 hover:border-emerald-400/60"
            }`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  isDark ? "bg-emerald-500/20" : "bg-emerald-100"
                }`}>
                  <Globe className={`w-6 h-6 ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {globalCoverageTitle}
                  </h3>
                  <p
                    className={`text-base lg:text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {globalCoverageDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-10 rounded-2xl border p-8 ${
              isDark
                ? "bg-blue-950/25 border-blue-500/20"
                : "bg-blue-50 border-blue-200"
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                  isDark ? "bg-blue-500/20" : "bg-blue-100"
                }`}>
                  <AlertCircle
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-300" : "text-blue-700"
                    }`}
                  />
                </div>
                <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                        isDark ? "text-blue-100" : "text-blue-900"
                      }`}>
                    {complianceUpdatesTitle}
                  </h3>
                  <p className={`text-base leading-relaxed ${
                    isDark ? "text-blue-200/90" : "text-blue-800"
                  }`}>
                    {complianceUpdatesDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className={`text-3xl font-semibold mb-10 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                {keyComplianceFeaturesTitle}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {keyComplianceFeaturesList.map((feature, index) => (
                  <div
                    key={index}
                    className={`rounded-xl border p-6 flex gap-4 transition-all duration-200 ${
                      isDark
                        ? "bg-gray-800/50 border-gray-700/60"
                        : "bg-gray-50/80 border-gray-200"
                    }`}
                  >
                    <CheckCircle
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        isDark ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    />
                    <div>
                      <h3 className={`font-semibold mb-1.5 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
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
