"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useTheme } from "../components/ThemeProvider";

export default function Solution() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
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
                className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                The Problem
              </h1>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  value: "95%",
                  label: "AI initiatives didn&apos;t deliver economic value",
                },
                {
                  value: "82%",
                  label:
                    "ERP Team lacks Accountability for E2E AI Product Lifecycle",
                },
                {
                  value: "56%",
                  label:
                    "of organizations admit they do not have a formal governance framework in place to manage Generative AI risks (bias, hallucinations, IP leakage).",
                },
                {
                  value: "65%",
                  label:
                    "of consumers say they have already lost trust in an organization due to its misuse of AI or poor automated customer service experiences.",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] flex flex-col ${
                    isDark
                      ? "bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 hover:bg-gray-800/80"
                      : "bg-white/95 backdrop-blur-sm border border-gray-200/80 hover:border-emerald-400 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`text-6xl lg:text-7xl font-bold mb-5 leading-none ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-[15px] leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {stat.label}
                  </div>
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
                className={`text-5xl lg:text-6xl font-bold mb-8 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Solution
              </h1>
              <p
                className={`text-xl lg:text-2xl mb-12 leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We provide a system that makes AI deployment responsible and
                decidable. Instead of relying on post-hoc reviews or manual
                checklists, our approach enables organizations to determine - at
                the moment of execution - whether an AI action is permitted to
                proceed.
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
                  className={`text-4xl lg:text-5xl font-bold mb-12 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  How It Works
                </h2>
                <div className="space-y-6">
                  {[
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
                  ].map((item, index) => (
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
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90&auto=format&fit=crop"
                    alt="Solution architecture"
                    className="rounded-xl w-full"
                  />
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
                    "Stay audit-ready by default with immutable decision records",
                  ].map((item, index) => (
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
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=90&auto=format&fit=crop"
                  alt="Enterprise AI risk management"
                  className="relative rounded-2xl shadow-2xl"
                />
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
                  className={`absolute -inset-4 rounded-2xl ${
                    isDark
                      ? "bg-emerald-500/20 blur-2xl"
                      : "bg-emerald-200/50 blur-2xl"
                  }`}
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90&auto=format&fit=crop"
                  alt="Where this fits"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Where This Fits
                </h2>
                <p
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  This system applies wherever AI decisions carry risk,
                  responsibility, or regulatory exposure:
                </p>
                <ul className="space-y-4">
                  {[
                    "Autonomous and agentic AI systems executing multi-step actions",
                    "Enterprise chatbots and AI assistants",
                    "Model deployment and CI/CD pipelines",
                    "AI systems operating in regulated environments",
                    "Decision-making and inference workflows",
                    "Organizations scaling AI beyond pilots into production",
                  ].map((item, index) => (
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
                  className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Who This Is For
                </h2>
                <p
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  This system is built for teams responsible for putting AI into
                  production:
                </p>
                <ul className="space-y-4">
                  {[
                    "Engineering and platform teams deploying AI systems",
                    "AI and data leaders accountable for risk and compliance",
                    "Product teams taking AI to Go-to-market",
                    "Organizations operating in regulated or high-risk environments",
                  ].map((item, index) => (
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
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=90&auto=format&fit=crop"
                  alt="Who this is for"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to transform your AI deployment?
            </h2>
            <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
              Get started with our solution today and ensure compliance at every
              step.
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
