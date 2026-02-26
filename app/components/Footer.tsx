import Link from "next/link";
import { Shield } from "lucide-react";
import {
  siteName,
  footerTagline,
  contactEmail,
  twitterUrl,
  copyright,
  builtForTagline,
} from "../../content/footer";

// Inline list to avoid server/client hydration mismatch (same source as content/footer.ts)
const FOOTER_PAGES: { href: string; label: string }[] = [
  { href: "/solution", label: "Solution" },
  { href: "/services", label: "Services" },
  { href: "/regulatory", label: "Regulatory" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact" },
];

interface FooterProps {
  isDark: boolean;
}

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
      width="18"
      height="18"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`relative ${
        isDark
          ? "bg-gray-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Top accent */}
      <div
        className={`h-0.5 w-full ${
          isDark ? "bg-gradient-to-r from-emerald-500/80 to-teal-400/60" : "bg-gradient-to-r from-emerald-500 to-teal-400"
        }`}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-0">
        <div className="grid gap-12 md:grid-cols-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Shield className="w-10 h-10 shrink-0 text-emerald-500 transition-transform group-hover:scale-105" />
              <span className="text-2xl font-extrabold tracking-tight font-display">
                {siteName}
              </span>
            </Link>
            <p
              className={`mt-4 text-sm leading-relaxed max-w-md ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {footerTagline}
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3
              className={`text-xs font-semibold uppercase tracking-widest ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Navigate
            </h3>
            <nav
              className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-sm"
              aria-label="Footer navigation"
            >
              {FOOTER_PAGES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1.5 transition-colors hover:opacity-100 ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3
              className={`text-xs font-semibold uppercase tracking-widest ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Get in touch
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={`mailto:${contactEmail}`}
                className={`block transition-colors hover:opacity-100 ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {contactEmail}
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow regX AI on X"
                className={`inline-flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                  isDark
                    ? "bg-white/10 text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400"
                    : "bg-white text-gray-600 shadow-sm hover:bg-emerald-500/10 hover:text-emerald-600 border border-gray-200/80"
                }`}
              >
                <XLogo className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-14 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm ${
            isDark ? "text-gray-500 border-t border-white/10" : "text-gray-500 border-t border-gray-200/80"
          }`}
        >
          <span>{copyright}</span>
          <span className="text-xs text-center sm:text-right text-gray-400">
            {builtForTagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
