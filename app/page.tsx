"use client";

import Link from "next/link";
import {
  Shield,
  FileCheck,
  Target,
  Bot,
  MessageSquare,
  GitBranch,
  FileText,
  ArrowRight,
  Check,
  TrendingUp,
} from "lucide-react";
import { AppShell } from "./components/AppShell";
import { useTheme } from "./components/ThemeProvider";
import { AnimatedNumber } from "./components/AnimatedNumber";
import { AnimatedProgressBar } from "./components/AnimatedProgressBar";
import {
  heroBadge,
  heroTitleLine1,
  heroTitleHighlight,
  heroTitleLine2,
  heroDescription,
  heroCtaPrimary,
  heroCtaSecondary,
  keyFeaturesBadge,
  keyFeaturesTitle,
  keyFeaturesDescription,
  keyFeaturesList,
  riskSectionTitle,
  riskSectionDescription,
  riskSectionDescriptionMid,
  riskSectionDescriptionEnd,
  riskCards,
  howWeHelpTitle,
  howWeHelpDescription,
  howWeHelpList,
  impactMetricsTitle,
  impactMetricsSubtitle,
  impactMetricsItems,
  whereThisFitsBadge,
  whereThisFitsTitle,
  whereThisFitsDescription,
  whereThisFitsList,
  ctaTitle,
  ctaDescription,
  ctaButton,
} from "../content/home";

const HOME_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  fileCheck: FileCheck,
  target: Target,
  bot: Bot,
  messageSquare: MessageSquare,
  gitBranch: GitBranch,
  fileText: FileText,
};

export default function Home() {
  const { isDark } = useTheme();

  return (
    <AppShell>
      <main className="pt-20">
        <section
          className={`relative overflow-hidden py-20 lg:py-28 ${
            isDark
              ? "bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/30"
              : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
                : "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"
            }`}
            style={{ backgroundSize: "24px 24px" }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 ${
                  isDark
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                <Target className="w-4 h-4" />
                {heroBadge}
              </div>
              <h1
                className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {heroTitleLine1}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {heroTitleHighlight}
                </span>
                {heroTitleLine2}
              </h1>
              <p
                className={`text-xl lg:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto font-light ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white rounded-xl font-semibold hover:bg-emerald-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  {heroCtaPrimary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/solution"
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md border flex items-center gap-2 ${
                    isDark
                      ? "bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {heroCtaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-20 lg:py-28 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5 ${
                  isDark
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                    : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                }`}
              >
                <Shield className="w-4 h-4" />
                {keyFeaturesBadge}
              </div>
              <h2
                className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {keyFeaturesTitle}
              </h2>
              <p
                className={`text-lg max-w-2xl mx-auto ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {keyFeaturesDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {keyFeaturesList.map((feature, index) => {
                const Icon = HOME_ICONS[feature.iconKey] ?? Shield;
                const iconBg =
                  feature.iconKey === "shield"
                    ? isDark ? "bg-emerald-500/15" : "bg-emerald-50"
                    : feature.iconKey === "fileCheck"
                    ? isDark ? "bg-blue-500/15" : "bg-blue-50"
                    : isDark ? "bg-orange-500/15" : "bg-orange-50";
                const iconFg =
                  feature.iconKey === "shield"
                    ? isDark ? "text-emerald-300" : "text-emerald-700"
                    : feature.iconKey === "fileCheck"
                    ? isDark ? "text-blue-300" : "text-blue-700"
                    : isDark ? "text-orange-300" : "text-orange-700";
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isDark
                        ? "bg-gray-900/60 border-white/10"
                        : "bg-white border-gray-200 shadow-sm"
                    }`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.topBar}`}
                    ></div>
                    <div
                      className={`absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity ${
                        isDark ? "bg-white/10" : "bg-gray-200/60"
                      }`}
                    ></div>

                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                          isDark ? "border-white/10" : "border-gray-200"
                        } ${iconBg}`}
                      >
                        <Icon className={`w-6 h-6 ${iconFg}`} />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          isDark
                            ? "bg-white/5 text-gray-300 border border-white/10"
                            : "bg-gray-50 text-gray-600 border border-gray-200"
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl font-bold mt-6 mb-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feature.description}
                    </p>

                    {/* no sliders here */}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* <section
          className={`py-24 lg:py-32 relative overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"
              : "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
          } text-white`}
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"
            style={{ backgroundSize: "40px 40px" }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                The Challenge
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  value: 95,
                  label: "AI initiatives didn\u2019t deliver economic value",
                },
                {
                  value: 82,
                  label:
                    "ERP Team lacks accountability for E2E AI product lifecycle",
                },
                {
                  value: 56,
                  label:
                    "Organizations lack a formal governance framework to manage generative AI risks (bias, hallucinations, IP leakage).",
                },
                {
                  value: 65,
                  label:
                    "Consumers have already lost trust due to misuse of AI or poor automated customer service experiences.",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/10"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-70"></div>

                  <div className="flex items-start justify-between gap-3">
                    <div className="text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent leading-none">
                      <AnimatedNumber value={stat.value} suffix="%" />
                    </div>
                    <div className="mt-1 h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-gray-200">
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-gray-200/90 text-sm leading-relaxed font-medium">
                      {stat.label}
                    </p>
                  </div>

                  <div className="mt-6">
                    <AnimatedProgressBar
                      value={Math.min(100, Math.max(0, stat.value))}
                      heightClassName="h-1.5"
                      trackClassName="bg-white/10"
                      fillClassName="bg-gradient-to-r from-emerald-400 to-teal-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section
          className={`py-24 lg:py-32 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2
                className={`text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {riskSectionTitle}
              </h2>
              <p
                className={`text-lg lg:text-xl max-w-3xl mx-auto mt-6 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {riskSectionDescription}
                <AnimatedNumber value={35} />{riskSectionDescriptionMid}
                <AnimatedNumber value={7} suffix="%" />{riskSectionDescriptionEnd}
              </p>
            </div>

            <div className="no-scrollbar flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0">
              <div
                className={`snap-start shrink-0 w-[88%] sm:w-[70%] md:w-auto rounded-2xl border border-t-4 border-t-blue-500 p-8 shadow-sm transition-all duration-200 hover:shadow-md ${
                  isDark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                        isDark
                          ? "bg-gray-800 border-gray-700"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <FileText
                        className={`w-5 h-5 ${
                          isDark ? "text-blue-300" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {riskCards[0].title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {riskCards[0].subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      isDark
                        ? "bg-gray-800 text-gray-300 border border-gray-700"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    {riskCards[0].badge}
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div
                        className={`text-5xl font-extrabold tracking-tight ${
                          isDark ? "text-blue-300" : "text-blue-600"
                        }`}
                      >
                        <AnimatedNumber value={418} suffix="+" />
                      </div>
                      <div
                        className={`text-xs mt-1 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {riskCards[0].statLabel}
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isDark
                          ? "bg-blue-500/15 text-blue-200 border border-blue-500/20"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {riskCards[0].statBadge}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {riskCards[0].body}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      className={`rounded-xl border p-4 ${
                        isDark
                          ? "bg-gray-950 border-gray-800"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-semibold ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {riskCards[0].metric1Label}
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            isDark ? "text-blue-300" : "text-blue-600"
                          }`}
                        >
                          <AnimatedNumber value={46} prefix="+" suffix="%" />
                        </span>
                      </div>
                      <AnimatedProgressBar
                        value={46}
                        heightClassName="h-2.5"
                        durationMs={1100}
                        trackClassName={isDark ? "bg-gray-800" : "bg-gray-200"}
                        fillClassName={isDark ? "bg-blue-400" : "bg-blue-600"}
                      />
                    </div>

                    <div
                      className={`rounded-xl border p-4 ${
                        isDark
                          ? "bg-gray-950 border-gray-800"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div
                        className={`text-xs font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {riskCards[0].metric2Label}
                      </div>
                      <div
                        className={`mt-2 text-3xl font-extrabold ${
                          isDark ? "text-blue-200" : "text-blue-700"
                        }`}
                      >
                        <AnimatedNumber value={9} suffix="×" />
                      </div>
                      <p
                        className={`mt-2 text-xs leading-relaxed ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {riskCards[0].metric2Subtext}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5) Shadow AI */}
              <div
                className={`snap-start shrink-0 w-[88%] sm:w-[70%] md:w-auto rounded-2xl border border-t-4 border-t-purple-500 p-8 shadow-sm transition-all duration-200 hover:shadow-md ${
                  isDark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                        isDark
                          ? "bg-gray-800 border-gray-700"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <Bot
                        className={`w-5 h-5 ${
                          isDark ? "text-purple-300" : "text-purple-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {riskCards[1].title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {riskCards[1].subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      isDark
                        ? "bg-gray-800 text-gray-300 border border-gray-700"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    {riskCards[1].badge}
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-end justify-between">
                    <div
                      className={`text-5xl font-extrabold tracking-tight ${
                        isDark ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      <AnimatedNumber value={40} suffix="%" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isDark
                          ? "bg-purple-500/15 text-purple-200 border border-purple-500/20"
                          : "bg-purple-50 text-purple-700 border border-purple-200"
                      }`}
                    >
                      {riskCards[1].statBadge}
                    </span>
                  </div>

                  <div
                    className={`p-4 rounded-xl border ${
                      isDark
                        ? "bg-gray-950 border-gray-800"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-medium ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {riskCards[1].breachLabel}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {riskCards[1].breachRange}
                      </span>
                    </div>
                    <AnimatedProgressBar
                      value={40}
                      heightClassName="h-2"
                      trackClassName={isDark ? "bg-gray-800" : "bg-gray-200"}
                      fillClassName={isDark ? "bg-purple-400" : "bg-purple-600"}
                    />
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {riskCards[1].body}
                  </p>
                </div>
              </div>

              {/* 6) High-level trend */}
              <div
                className={`snap-start shrink-0 w-[88%] sm:w-[70%] md:w-auto rounded-2xl border border-t-4 border-t-emerald-500 p-8 shadow-sm transition-all duration-200 hover:shadow-md ${
                  isDark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                        isDark
                          ? "bg-gray-800 border-gray-700"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <ArrowRight
                        className={`w-5 h-5 ${
                          isDark ? "text-emerald-300" : "text-emerald-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {riskCards[2].title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {riskCards[2].subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      isDark
                        ? "bg-gray-800 text-gray-300 border border-gray-700"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    {riskCards[2].badge}
                  </span>
                </div>

                <div className="space-y-5">
                  <p
                    className={`text-base leading-relaxed font-semibold ${
                      isDark ? "text-emerald-200" : "text-emerald-800"
                    }`}
                  >
                    {riskCards[2].trendTitle}
                  </p>

                  <div
                    className={`p-4 rounded-xl border ${
                      isDark
                        ? "bg-gray-950 border-gray-800"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-medium ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {riskCards[2].riskLabel}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          isDark ? "text-emerald-200" : "text-emerald-800"
                        }`}
                      >
                        {riskCards[2].riskValue}
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 220 70"
                      className="w-full h-[70px]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 60 C 60 55, 85 52, 115 45 C 145 38, 165 30, 210 10"
                        stroke={isDark ? "#34d399" : "#10b981"}
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10 60 C 60 55, 85 52, 115 45 C 145 38, 165 30, 210 10"
                        stroke={isDark ? "#22c55e33" : "#10b98133"}
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="210"
                        cy="10"
                        r="5"
                        fill={isDark ? "#34d399" : "#10b981"}
                      />
                    </svg>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {riskCards[2].body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-20 lg:py-28 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {howWeHelpTitle}
                </h2>
                <p
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {howWeHelpDescription}
                </p>
                <ul className="space-y-4">
                  {howWeHelpList.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-3 text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isDark ? "bg-emerald-500/20" : "bg-emerald-100"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 ${
                            isDark ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div
                  className={`relative overflow-hidden rounded-2xl border shadow-2xl ${
                    isDark
                      ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-white/10"
                      : "bg-gradient-to-br from-white via-white to-gray-50 border-gray-200"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  <div
                    className={`absolute -top-28 -right-28 h-56 w-56 rounded-full blur-3xl ${
                      isDark ? "bg-emerald-500/15" : "bg-emerald-200/60"
                    }`}
                  ></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3
                          className={`text-2xl font-bold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {impactMetricsTitle}
                        </h3>
                        <p
                          className={`text-sm mt-1 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {impactMetricsSubtitle}
                        </p>
                      </div>
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center border ${
                          isDark
                            ? "bg-white/5 border-white/10"
                            : "bg-emerald-50 border-emerald-200"
                        }`}
                      >
                        <TrendingUp
                          className={`w-5 h-5 ${
                            isDark ? "text-emerald-300" : "text-emerald-700"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="space-y-6">
                      {impactMetricsItems.map((metric, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-sm font-medium ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              {metric.label}
                            </span>
                          </div>
                          <p
                            className={`mt-2 text-sm leading-relaxed ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {metric.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-20 lg:py-28 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5 ${
                  isDark
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                    : "bg-white text-emerald-700 border border-emerald-200"
                }`}
              >
                <GitBranch className="w-4 h-4" />
                {whereThisFitsBadge}
              </div>
              <h2
                className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {whereThisFitsTitle}
              </h2>
              <p
                className={`text-lg max-w-2xl mx-auto ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {whereThisFitsDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {whereThisFitsList.map((item, index) => {
                const Icon = HOME_ICONS[item.iconKey] ?? Shield;
                const iconBg =
                  item.iconKey === "bot"
                    ? isDark ? "bg-emerald-500/15" : "bg-emerald-50"
                    : item.iconKey === "messageSquare"
                    ? isDark ? "bg-blue-500/15" : "bg-blue-50"
                    : item.iconKey === "gitBranch"
                    ? isDark ? "bg-orange-500/15" : "bg-orange-50"
                    : isDark ? "bg-teal-500/15" : "bg-teal-50";
                const iconFg =
                  item.iconKey === "bot"
                    ? isDark ? "text-emerald-300" : "text-emerald-700"
                    : item.iconKey === "messageSquare"
                    ? isDark ? "text-blue-300" : "text-blue-700"
                    : item.iconKey === "gitBranch"
                    ? isDark ? "text-orange-300" : "text-orange-700"
                    : isDark ? "text-teal-300" : "text-teal-700";
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isDark
                        ? "bg-gray-900/60 border-white/10"
                        : "bg-white border-gray-200 shadow-sm"
                    }`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.topBar}`}
                    ></div>
                    <div
                      className={`absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity ${
                        isDark ? "bg-white/10" : "bg-gray-200/60"
                      }`}
                    ></div>

                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                          isDark ? "border-white/10" : "border-gray-200"
                        } ${iconBg}`}
                      >
                        <Icon className={`w-6 h-6 ${iconFg}`} />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          isDark
                            ? "bg-white/5 text-gray-300 border border-white/10"
                            : "bg-gray-50 text-gray-600 border border-gray-200"
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h3
                      className={`text-xl font-bold mt-5 mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* no sliders here */}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-teal-600 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"
            style={{ backgroundSize: "32px 32px" }}
          ></div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {ctaTitle}
            </h2>
            <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
              {ctaDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-800 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl text-lg group"
            >
              {ctaButton}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
