"use client";

import {
  Users,
  BookOpen,
  BarChart3,
  Headphones,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { AppShell } from "../components/AppShell";
import { useTheme } from "../components/ThemeProvider";

export default function Services() {
  const { isDark } = useTheme();

  return (
    <AppShell>
      <main className="pt-20">
        <section
          className={`py-16 lg:py-20 ${
            isDark
              ? "bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/30"
              : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1
                className={`text-4xl lg:text-5xl font-semibold mb-4 leading-tight tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Our Services
              </h1>
              <p
                className={`text-lg lg:text-xl mb-6 leading-relaxed font-normal ${
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
                    className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 shadow-soft-sm hover:shadow-soft group ${
                      isDark
                        ? "bg-gray-900/50 border-white/10 hover:border-emerald-500/30"
                        : "bg-white border-gray-200/70 hover:border-emerald-400/60"
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
                      className={`text-xl font-semibold mb-3 ${
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
            <div className="max-w-3xl">
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
                className={`text-3xl lg:text-4xl font-semibold mb-6 leading-tight ${
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group bg-emerald-700 text-white hover:bg-emerald-800"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </AppShell>
  );
}
