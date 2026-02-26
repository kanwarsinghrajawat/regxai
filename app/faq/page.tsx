"use client";

import Link from "next/link";
import { ArrowUpRight, HelpCircle } from "lucide-react";
import { AppShell } from "../components/AppShell";
import { useTheme } from "../components/ThemeProvider";
import {
  faqs,
  faqCategories,
  faqSectionTitle,
  faqSectionSubtitle,
  faqSectionBadge,
  type FaqCategoryId,
} from "../../content/faq";

function getFaqsByCategory() {
  const map = new Map<FaqCategoryId, typeof faqs>();
  for (const item of faqs) {
    const list = map.get(item.category) ?? [];
    list.push(item);
    map.set(item.category, list);
  }
  return map;
}

const faqsByCategory = getFaqsByCategory();

export default function FaqPage() {
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
                <HelpCircle className="w-4 h-4" />
                {faqSectionBadge}
              </span>
            </div>
            <h1
              className={`mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {faqSectionTitle}
            </h1>
            <p
              className={`mt-4 text-lg max-w-2xl leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {faqSectionSubtitle}
            </p>

            {/* In-page nav: category anchors (visible on all viewports) */}
            <nav
              className="mt-10 flex flex-wrap gap-2"
              aria-label="FAQ categories"
            >
              {faqCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#category-${cat.id}`}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isDark
                      ? "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                      : "bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 border border-gray-200/80 shadow-sm"
                  }`}
                >
                  {cat.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Content: two columns on large screens */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Sticky sidebar: same links for keyboard/screen reader and desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-1">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  Jump to
                </span>
                {faqCategories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#category-${cat.id}`}
                    className={`block py-2 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-emerald-300"
                        : "text-gray-600 hover:text-emerald-700"
                    }`}
                  >
                    {cat.label}
                  </a>
                ))}
              </div>
            </aside>

            <div className="space-y-14">
              {faqCategories.map((category) => {
                const items = faqsByCategory.get(category.id);
                if (!items?.length) return null;
                const categoryLabel =
                  faqCategories.find((c) => c.id === category.id)?.label ??
                  category.id;

                return (
                  <section
                    key={category.id}
                    id={`category-${category.id}`}
                    className="scroll-mt-28"
                  >
                    <h2
                      className={`text-xl font-bold tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {categoryLabel}
                    </h2>
                    <div className="mt-6 space-y-4">
                      {items.map((item) => (
                        <article
                          key={item.id}
                          id={item.id}
                          className={`group rounded-2xl border transition-all duration-300 scroll-mt-28 ${
                            isDark
                              ? "bg-gray-900/40 border-white/10 hover:border-emerald-500/20"
                              : "bg-white border-gray-200/70 hover:border-emerald-400/50 shadow-soft-sm hover:shadow-soft"
                          }`}
                        >
                          <div className="px-6 py-5">
                            <h3
                              className={`text-lg font-bold tracking-tight ${
                                isDark ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {item.q}
                            </h3>
                            <p
                              className={`mt-3 text-base leading-relaxed ${
                                isDark ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {item.a}
                            </p>
                            {item.link && (
                              <Link
                                href={item.link.href}
                                className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                                  isDark
                                    ? "text-emerald-400 hover:text-emerald-300"
                                    : "text-emerald-600 hover:text-emerald-700"
                                }`}
                              >
                                {item.link.label}
                                <ArrowUpRight className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <section
          className={`border-t ${
            isDark ? "border-white/10 bg-gray-900/50" : "border-gray-200/70 bg-gray-50/80"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div
              className={`rounded-2xl border p-8 text-center ${
                isDark
                  ? "border-white/10 bg-gray-900/60"
                  : "border-gray-200/70 bg-white shadow-soft-sm"
              }`}
            >
              <p
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Still have questions?
              </p>
              <p
                className={`mt-2 text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our team can walk you through the gateway and your use case.
              </p>
              <Link
                href="/contact"
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  isDark
                    ? "bg-emerald-500 text-white hover:bg-emerald-400"
                    : "bg-emerald-600 text-white hover:bg-emerald-500"
                }`}
              >
                Contact us
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
