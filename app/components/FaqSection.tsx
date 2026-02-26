"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  faqs,
  faqSectionBadge,
  faqSectionTitle,
  faqSectionSubtitle,
  faqTeaserCount,
  faqPageCta,
} from "../../content/faq";

const teaserFaqs = faqs.slice(0, faqTeaserCount);

export function FaqSection({ isDark }: { isDark: boolean }) {
  const pathname = usePathname();
  if (pathname === "/faq" || pathname === "/terms") return null;

  return (
    <section
      className={`py-20 lg:py-28 border-t ${
        isDark ? "bg-gray-950 border-white/10" : "bg-gray-50 border-gray-200/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div
            className={`text-sm font-semibold tracking-tight ${
              isDark ? "text-emerald-300" : "text-emerald-700"
            }`}
          >
            {faqSectionBadge}
          </div>
          <h2
            className={`mt-3 text-3xl lg:text-4xl font-semibold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {faqSectionTitle}
          </h2>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {faqSectionSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {teaserFaqs.map((item, idx) => (
            <details
              key={item.id}
              className={`group rounded-2xl border transition-all duration-300 ${
                isDark
                  ? "bg-gray-900/50 border-white/10 hover:border-emerald-500/25"
                  : "bg-white border-gray-200/70 hover:border-emerald-400/60 shadow-soft-sm hover:shadow-soft"
              }`}
            >
              <summary
                className={`cursor-pointer list-none select-none px-6 py-5 flex items-start justify-between gap-6 ${
                  isDark ? "text-white" : "text-gray-900"
                } [&::-webkit-details-marker]:hidden`}
              >
                <div className="flex items-start gap-4 min-w-0">
                  <span
                    className={`mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold border ${
                      isDark
                        ? "bg-white/5 border-white/10 text-gray-200"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  <span className="text-lg font-semibold tracking-tight leading-snug">
                    {item.q}
                  </span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                  aria-hidden="true"
                />
              </summary>

              <div className="px-6 pb-6">
                <div
                  className={`text-base leading-relaxed space-y-3 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.a.split(/\n\n+/).map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Link
            href="/faq"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              isDark
                ? "text-emerald-300 hover:text-emerald-200 hover:bg-white/5"
                : "text-emerald-700 hover:text-emerald-800 hover:bg-emerald-500/10"
            }`}
          >
            {faqPageCta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
