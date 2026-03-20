"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Building2,
  Code,
  Target,
} from "lucide-react";
import { AppShell } from "../components/AppShell";
import { useTheme } from "../components/ThemeProvider";
import { useLanguage } from "../components/LanguageProvider";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { AnimatedProgressBar } from "../components/AnimatedProgressBar";
import {
  problemTitle,
  problemStatsConfig,
  problemStatsLabels,
  ourSolutionTitle,
  ourSolutionDescription,
  howItWorksTitle,
  howItWorksSteps,
  systemArchitectureTitle,
  flowStepsConfig,
  flowStepsTitles,
  averageResponseTimeLabel,
  averageResponseTimeValue,
  solutionHowWeHelpTitle,
  solutionHowWeHelpDescription,
  solutionHowWeHelpList,
  enterpriseImpactTitle,
  enterpriseMetricsConfig,
  enterpriseMetricsLabels,
  roiLabel,
  roiDescription,
  useCaseDistributionTitle,
  useCaseDistributionConfig,
  useCaseDistributionLabels,
  useCaseCoveredLabel,
  useCaseBroadCoverageTitle,
  useCaseBroadCoverageDescription,
  solutionWhereThisFitsTitle,
  solutionWhereThisFitsDescription,
  solutionWhereThisFitsList,
  whoThisIsForTitle,
  whoThisIsForDescription,
  whoThisIsForList,
  targetAudienceTitle,
  targetAudienceConfig,
  targetAudienceLabels,
  solutionCtaTitle,
  solutionCtaDescription,
  solutionCtaButton,
  solutionStepLabel,
  coverageLabel,
} from "../../content/solution";

const iconMap = {
  zap: Zap,
  shield: Shield,
  target: Target,
  checkCircle: CheckCircle,
  clock: Clock,
  trendingUp: TrendingUp,
  code: Code,
  users: Users,
  building2: Building2,
} as const;

export default function Solution() {
  const { isDark } = useTheme();
  const { locale } = useLanguage();

  return (
    <AppShell>
      <main className="pt-20">
        <section
          className={`py-24 lg:py-32 relative overflow-hidden ${
            isDark
              ? "bg-gray-900"
              : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
          } ${isDark ? "text-white" : ""}`}
        >
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
                : "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"
            }`}
            style={{ backgroundSize: "32px 32px" }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1
                className={`text-4xl lg:text-5xl font-semibold mb-6 leading-tight tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {problemTitle[locale]}
              </h1>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {problemStatsConfig.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-2xl border p-6 min-h-[240px] transition-all duration-200 ${
                    isDark
                      ? "border-gray-700/60 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800/70"
                      : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`text-4xl lg:text-5xl font-semibold leading-none tabular-nums mb-4 ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p
                    className={`text-sm leading-relaxed flex-1 min-h-0 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {problemStatsLabels[locale][index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                className={`text-4xl lg:text-5xl font-semibold mb-8 leading-tight tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {ourSolutionTitle[locale]}
              </h1>
              <p
                className={`text-lg lg:text-xl mb-12 leading-relaxed font-normal ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {ourSolutionDescription[locale]}
              </p>
            </div>
          </div>
        </section>

        <section
          className={`py-24 lg:py-32 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
              <div>
                <h2
                  className={`text-3xl lg:text-4xl font-semibold mb-12 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {howItWorksTitle[locale]}
                </h2>
                <div className="space-y-6">
                  {howItWorksSteps[locale].map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                        isDark
                          ? "bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50"
                          : "bg-gray-50 border border-gray-200 hover:border-emerald-400"
                      }`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isDark ? "bg-emerald-500/20" : "bg-emerald-100"
                          }`}
                        >
                          <CheckCircle
                            className={`w-5 h-5 ${
                              isDark ? "text-emerald-400" : "text-emerald-600"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-lg leading-relaxed ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div
                  className={`absolute -inset-4 rounded-2xl ${
                    isDark
                      ? "bg-emerald-500/20 blur-2xl"
                      : "bg-emerald-200/50 blur-2xl"
                  }`}
                ></div>
                <div
                  className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${
                    isDark
                      ? "bg-gray-800 border border-gray-700 hover:border-emerald-500/50"
                      : "bg-white border border-gray-200 hover:border-emerald-400 shadow-xl"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {systemArchitectureTitle[locale]}
                  </h3>
                  <div className="space-y-4">
                    {flowStepsConfig.map((item, index) => {
                      const Icon = iconMap[item.iconKey];
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-4 p-4 rounded-xl ${
                            isDark
                              ? "bg-gray-700/50 border border-gray-600"
                              : "bg-gray-50 border border-gray-200"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isDark ? "bg-emerald-500/20" : "bg-emerald-100"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                isDark ? "text-emerald-400" : "text-emerald-600"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <div
                              className={`text-sm font-semibold ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              {solutionStepLabel[locale]} {item.step}
                            </div>
                            <div
                              className={`text-base font-semibold ${
                                isDark ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {flowStepsTitles[locale][index]}
                            </div>
                          </div>
                          {index < 3 && (
                            <ArrowRight
                              className={`w-5 h-5 ${
                                isDark ? "text-gray-500" : "text-gray-400"
                              }`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className={`mt-6 p-4 rounded-xl ${
                      isDark
                        ? "bg-emerald-500/10 border border-emerald-500/20"
                        : "bg-emerald-50 border border-emerald-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {averageResponseTimeLabel[locale]}
                      </span>
                      <span
                        className={`text-xl font-bold ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      >
                        &lt; <AnimatedNumber value={averageResponseTimeValue} />
                        ms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-24 lg:py-32 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className={`text-3xl lg:text-4xl font-semibold mb-6 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {solutionHowWeHelpTitle[locale]}
                </h2>
                <p
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {solutionHowWeHelpDescription[locale]}
                </p>
                <ul className="space-y-4">
                  {solutionHowWeHelpList[locale].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isDark ? "bg-emerald-500/20" : "bg-emerald-100"
                        }`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${
                            isDark ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div
                  className={`absolute -inset-4 rounded-2xl ${
                    isDark
                      ? "bg-emerald-500/20 blur-2xl"
                      : "bg-emerald-200/50 blur-2xl"
                  }`}
                ></div>
                <div
                  className={`relative rounded-2xl p-8 shadow-2xl ${
                    isDark
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {enterpriseImpactTitle[locale]}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {enterpriseMetricsConfig.map((metric, index) => {
                      const Icon = iconMap[metric.iconKey];
                      const labels = enterpriseMetricsLabels[locale][index];
                      return (
                        <div
                          key={index}
                          className={`p-4 rounded-xl ${
                            isDark
                              ? "bg-gray-700/50 border border-gray-600"
                              : "bg-gray-50 border border-gray-200"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Icon
                              className={`w-5 h-5 ${
                                isDark ? "text-emerald-400" : "text-emerald-600"
                              }`}
                            />
                            <span
                              className={`text-sm font-semibold tracking-tight ${
                                isDark ? "text-gray-100" : "text-gray-900"
                              }`}
                            >
                              {labels.label}
                            </span>
                          </div>
                          <div
                            className={`mt-2 text-sm leading-relaxed ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {labels.description}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className={`p-4 rounded-xl ${
                      isDark
                        ? "bg-emerald-500/10 border border-emerald-500/20"
                        : "bg-emerald-50 border border-emerald-200"
                    }`}
                  >
                    <div
                      className={`text-sm font-semibold ${
                        isDark ? "text-emerald-200" : "text-emerald-800"
                      }`}
                    >
                      {roiLabel[locale]}
                    </div>
                    <div
                      className={`mt-1 text-sm leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {roiDescription[locale]}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-24 lg:py-32 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div
                  className={`relative rounded-2xl border border-l-4 p-8 ${
                    isDark
                      ? "bg-gray-900/80 border-gray-700 border-l-emerald-500"
                      : "bg-white/90 border-gray-200 border-l-emerald-500"
                  }`}
                >
                  <p
                    className={`text-xs uppercase tracking-widest font-medium mb-2 ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {coverageLabel[locale]}
                  </p>
                  <h3
                    className={`text-xl font-semibold tracking-tight mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {useCaseDistributionTitle[locale]}
                  </h3>
                  <div className="space-y-3">
                    {useCaseDistributionLabels[locale].map((label, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between gap-4 rounded-lg px-4 py-3.5 ${
                          isDark ? "bg-emerald-500/10" : "bg-emerald-50/80"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`h-2 w-2 rounded-full flex-shrink-0 ${
                              isDark ? "bg-emerald-400" : "bg-emerald-500"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium tracking-tight truncate ${
                              isDark ? "text-gray-100" : "text-gray-800"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-medium ${
                            isDark ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        >
                          {useCaseCoveredLabel[locale]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`mt-6 p-4 rounded-lg ${
                      isDark ? "bg-emerald-500/10" : "bg-emerald-50/80"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-emerald-200" : "text-gray-800"
                      }`}
                    >
                      {useCaseBroadCoverageTitle[locale]}
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        isDark ? "text-emerald-400" : "text-gray-600"
                      }`}
                    >
                      {useCaseBroadCoverageDescription[locale]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2
                  className={`text-3xl lg:text-4xl font-semibold mb-6 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {solutionWhereThisFitsTitle[locale]}
                </h2>
                <p
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {solutionWhereThisFitsDescription[locale]}
                </p>
                <ul className="space-y-4">
                  {solutionWhereThisFitsList[locale].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isDark ? "bg-emerald-500/20" : "bg-emerald-100"
                        }`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${
                            isDark ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-24 lg:py-32 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className={`text-3xl lg:text-4xl font-semibold mb-6 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {whoThisIsForTitle[locale]}
                </h2>
                <p
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {whoThisIsForDescription[locale]}
                </p>
                <ul className="space-y-4">
                  {whoThisIsForList[locale].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${
                            isDark ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div
                  className={`absolute -inset-4 rounded-2xl ${
                    isDark
                      ? "bg-emerald-500/20 blur-2xl"
                      : "bg-emerald-200/50 blur-2xl"
                  }`}
                ></div>
                <div
                  className={`relative rounded-2xl p-8 shadow-2xl ${
                    isDark
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {targetAudienceTitle[locale]}
                  </h3>
                  <div className="space-y-4">
                    {targetAudienceConfig.map((item, index) => {
                      const Icon = iconMap[item.iconKey];
                      return (
                        <div
                          key={index}
                          className={`p-5 rounded-xl border ${
                            isDark
                              ? "bg-gray-700/50 border-gray-600"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                                isDark ? "bg-emerald-500/15" : "bg-emerald-100"
                              }`}
                            >
                              <Icon
                                className={`w-5 h-5 ${
                                  isDark
                                    ? "text-emerald-300"
                                    : "text-emerald-700"
                                }`}
                              />
                            </div>
                            <div
                              className={`text-base font-semibold tracking-tight ${
                                isDark ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {targetAudienceLabels[locale][index]}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
              {solutionCtaTitle[locale]}
            </h2>
            <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
              {solutionCtaDescription[locale]}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-800 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl text-lg group"
            >
              {solutionCtaButton[locale]}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
