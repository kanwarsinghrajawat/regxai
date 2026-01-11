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
} from "lucide-react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
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
                Acceptability before capability in AI world
              </div>
              <h1
                className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Infrastructure for enforcing{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AI trust
                </span>{" "}
                and deterministic decisioning
              </h1>
              <p
                className={`text-xl lg:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto font-light ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Determines whether AI actions are responsible and compliant —
                before agents and models deploy, act, respond, or predict.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Get in Touch
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
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-20 lg:py-28 ${isDark ? "bg-gray-950" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group">
                <div
                  className={`rounded-2xl p-8 h-full border transition-all duration-300 hover:shadow-xl ${
                    isDark
                      ? "bg-gradient-to-br from-emerald-950 to-teal-950 border-emerald-800 hover:border-emerald-600"
                      : "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100 hover:border-emerald-300"
                  }`}
                >
                  <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Real-time Enforcement
                  </h3>
                  <p
                    className={`leading-relaxed text-lg ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Evaluate AI actions before execution to prevent violations
                    and ensure compliance at every step.
                  </p>
                </div>
              </div>

              <div className="group">
                <div
                  className={`rounded-2xl p-8 h-full border transition-all duration-300 hover:shadow-xl ${
                    isDark
                      ? "bg-gradient-to-br from-blue-950 to-cyan-950 border-blue-800 hover:border-blue-600"
                      : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100 hover:border-blue-300"
                  }`}
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Immutable Records
                  </h3>
                  <p
                    className={`leading-relaxed text-lg ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Every decision is recorded as tamper-evident evidence for
                    audits, reviews, and regulatory inquiries.
                  </p>
                </div>
              </div>

              <div className="group">
                <div
                  className={`rounded-2xl p-8 h-full border transition-all duration-300 hover:shadow-xl ${
                    isDark
                      ? "bg-gradient-to-br from-orange-950 to-amber-950 border-orange-800 hover:border-orange-600"
                      : "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100 hover:border-orange-300"
                  }`}
                >
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Deterministic Decisions
                  </h3>
                  <p
                    className={`leading-relaxed text-lg ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Make risk decidable before it becomes costly, enabling
                    confident production deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-20 lg:py-28 relative overflow-hidden ${
            isDark
              ? "bg-gray-900"
              : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          } text-white`}
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
            style={{ backgroundSize: "32px 32px" }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The Challenge
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  90% - 95%
                </div>
                <div className="text-gray-400">
                  AI projects never reach production
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  80%{" "}
                </div>
                <div className="text-gray-400">
                  Teams struggle with Accountability During Development
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  56%
                </div>
                <div className="text-gray-400">
                  of organizations admit they do not have a formal governance
                  framework in place to manage Generative AI risks (bias,
                  hallucinations, IP leakage).
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  65%
                </div>
                <div className="text-gray-400">
                  of consumers say they have already lost trust in an
                  organization due to its misuse of AI or poor automated
                  customer service experiences.
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
                  How We Help Enterprises
                </h2>
                <p
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  We help organizations move AI into production by making risk
                  decidable before it becomes costly.
                </p>
                <ul className="space-y-4">
                  {[
                    "Reduce regulatory exposure by evaluating AI actions before they execute",
                    "Prevent fines and enforcement events through real-time blocking and escalation",
                    "Unlock ROI from stalled AI initiatives by enabling compliant production deployment",
                    "Lower governance overhead by replacing manual reviews with deterministic controls",
                  ].map((item, index) => (
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
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=90&auto=format&fit=crop"
                  alt="Enterprise AI risk management"
                  className="rounded-2xl shadow-2xl"
                />
                <div
                  className={`absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl border ${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    85%
                  </div>
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Faster deployment
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
            <div className="text-center mb-16">
              <h2
                className={`text-4xl lg:text-5xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Where This Fits
              </h2>
              <p
                className={`text-xl max-w-2xl mx-auto ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Deploy compliant AI across your entire technology stack
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Bot,
                  title: "Autonomous AI Systems",
                  description: "Agentic AI executing multi-step actions",
                  color: "emerald",
                },
                {
                  icon: MessageSquare,
                  title: "Enterprise Chatbots",
                  description: "AI assistants handling customer interactions",
                  color: "blue",
                },
                {
                  icon: GitBranch,
                  title: "CI/CD Pipelines",
                  description: "Model deployment and continuous integration",
                  color: "orange",
                },
                {
                  icon: FileText,
                  title: "Regulated Environments",
                  description:
                    "AI systems operating under compliance requirements",
                  color: "teal",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                const colorClasses = {
                  emerald: "from-emerald-500 to-teal-500",
                  blue: "from-blue-500 to-cyan-500",
                  orange: "from-orange-500 to-amber-500",
                  teal: "from-teal-500 to-emerald-500",
                };
                return (
                  <div
                    key={index}
                    className={`rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border group ${
                      isDark
                        ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${
                        colorClasses[item.color as keyof typeof colorClasses]
                      } rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
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
              Ready to deploy AI with confidence?
            </h2>
            <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
              Lets discuss how we can help your organization move from AI
              experimentation to compliant production.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl text-lg group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
