"use client";

import {
  Users,
  Zap,
  BookOpen,
  BarChart3,
  Shield,
  Headphones,
  ArrowRight,
  Rocket,
  CheckCircle,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useTheme } from "../components/ThemeProvider";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { AnimatedProgressBar } from "../components/AnimatedProgressBar";

export default function Services() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <main className="pt-20">
        <section
          className={`py-12 lg:py-16 ${
            isDark
              ? "bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/30"
              : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1
                className={`text-5xl lg:text-6xl font-bold mb-4 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Services
              </h1>
              <p
                className={`text-xl lg:text-2xl mb-6 leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We work with organizations at different stages of their AI
                journey to enable responsible development and deployment at
                scale.{" "}
              </p>
            </div>
          </div>
        </section>

        <section
          className={`py-12 lg:py-16 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Governance system implementation",
                  description:
                    "Integrate deterministic decisioning into existing AI workflows and production systems.",
                },
                {
                  icon: BookOpen,
                  title: "AI lifecycle mapping & readiness",
                  description:
                    "Identify where critical AI decisions occur across development, deployment, inference, and production.",
                },
                {
                  icon: BarChart3,
                  title: "Regulatory alignment & control design",
                  description:
                    "Translate regulatory expectations into enforceable, system-level ERP controls.",
                },
                {
                  icon: Headphones,
                  title: "Pilot-to-production enablement",
                  description:
                    "Help teams move high-value AI use cases from experimentation into compliant production.",
                },
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group ${
                      isDark
                        ? "bg-gray-800 border-gray-700 hover:border-emerald-500/50"
                        : "bg-gray-50 border-gray-200 hover:border-emerald-400"
                    }`}
                  >
                    <div className="transition-all duration-300 group-hover:scale-110 mb-4">
                      <Icon
                        className={`w-14 h-14 ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className={`py-24 lg:py-32 relative overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/30"
              : "bg-gradient-to-br from-emerald-50 via-white to-teal-50/30"
          }`}
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                    isDark
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  <Rocket className="w-4 h-4" />
                  Getting Started
                </div>
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  How to Get Started
                </h2>
                <p
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Getting started is intentionally simple. We work with teams to
                  understand where AI decisions occur in their lifecycle and
                  integrate enforcement at the right points.
                </p>
                <p
                  className={`text-lg leading-relaxed mb-8 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  For teams building the next wave of responsible AI in
                  production.
                </p>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group ${
                    isDark
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
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
                  className={`relative rounded-2xl p-8 ${
                    isDark
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200 shadow-xl"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Implementation Timeline
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        step: "Week 1-2",
                        title: "Assessment & Mapping",
                        progress: 100,
                        stats: "AI lifecycle analysis complete",
                      },
                      {
                        step: "Week 3-4",
                        title: "Control Design",
                        progress: 85,
                        stats: "Regulatory alignment achieved",
                      },
                      {
                        step: "Week 5-6",
                        title: "Integration",
                        progress: 70,
                        stats: "System integration in progress",
                      },
                      {
                        step: "Week 7-8",
                        title: "Testing & Validation",
                        progress: 40,
                        stats: "Pilot testing phase",
                      },
                    ].map((phase, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                isDark
                                  ? "bg-emerald-500/20"
                                  : "bg-emerald-100"
                              }`}
                            >
                              <CheckCircle
                                className={`w-4 h-4 ${
                                  isDark
                                    ? "text-emerald-400"
                                    : "text-emerald-600"
                                }`}
                              />
                            </div>
                            <div>
                              <div
                                className={`text-sm font-semibold ${
                                  isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                {phase.step}
                              </div>
                              <div
                                className={`text-base font-bold ${
                                  isDark ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {phase.title}
                              </div>
                            </div>
                          </div>
                          <span
                            className={`text-sm font-bold ${
                              isDark ? "text-emerald-400" : "text-emerald-600"
                            }`}
                          >
                            <AnimatedNumber value={phase.progress} suffix="%" />
                          </span>
                        </div>
                        <AnimatedProgressBar
                          value={phase.progress}
                          heightClassName="h-2"
                          trackClassName={isDark ? "bg-gray-700" : "bg-gray-200"}
                          fillClassName="bg-gradient-to-r from-emerald-500 to-teal-500"
                        />
                        <p
                          className={`text-xs ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {phase.stats}
                        </p>
                      </div>
                    ))}
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
                        Average Time to Production
                      </span>
                      <span
                        className={`text-2xl font-bold ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      >
                        <AnimatedNumber value={8} suffix=" weeks" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
