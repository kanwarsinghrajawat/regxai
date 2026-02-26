"use client";

import { FileText } from "lucide-react";
import { AppShell } from "../components/AppShell";
import { useTheme } from "../components/ThemeProvider";
import {
  termsTitle,
  termsSubtitle,
  termsLastUpdated,
  termsSections,
} from "../../content/terms";

export default function TermsPage() {
  const { isDark } = useTheme();

  return (
    <AppShell>
      <main className="pt-20 min-h-screen">
        {/* Hero */}
        <section
          className={`relative overflow-hidden border-b ${
            isDark
              ? "bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/20 border-white/10"
              : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 border-gray-200/70"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]"
                : "bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]"
            }`}
            style={{ backgroundSize: "28px 28px" }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 text-sm font-semibold tracking-tight ${
                  isDark ? "text-emerald-300" : "text-emerald-700"
                }`}
              >
                <FileText className="w-4 h-4" />
                Legal
              </span>
            </div>
            <h1
              className={`mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {termsTitle}
            </h1>
            <p
              className={`mt-4 text-lg max-w-2xl leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {termsSubtitle}
            </p>
            <p
              className={`mt-2 text-sm ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Last updated: {termsLastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section
          className={`py-12 lg:py-16 ${
            isDark ? "bg-gray-950" : "bg-white"
          }`}
        >
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {termsSections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2
                    className={`text-xl font-bold tracking-tight mb-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`text-base leading-relaxed ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
