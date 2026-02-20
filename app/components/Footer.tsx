import Link from "next/link";
import { Shield } from "lucide-react";
import {
  siteName,
  footerTagline,
  footerPages,
  contactEmail,
  twitterUrl,
  copyright,
  builtForTagline,
} from "../../content/footer";

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
    >
      <path d="M18.9 2H21l-6.8 7.78L22 22h-6.6l-5.15-6.64L4.4 22H2.3l7.3-8.35L2 2h6.75l4.65 6.06L18.9 2Zm-2.3 18h1.83L7.74 3.9H5.77L16.6 20Z" />
    </svg>
  );
}

export function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`border-t ${
        isDark
          ? "bg-gray-950 text-white border-white/10"
          : "bg-white text-gray-900 border-gray-200/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr] items-start">
          <div className="flex items-start gap-3">
            <Shield className="w-9 h-9 text-emerald-500 mt-0.5" />
            <div className="min-w-0">
              <div className="text-2xl font-extrabold tracking-tight font-display">
                {siteName}
              </div>
              <p
                className={`mt-2 text-sm leading-relaxed max-w-md ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {footerTagline}
              </p>
            </div>
          </div>

          <div>
            <div
              className={`text-sm font-semibold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Pages
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              {footerPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div
              className={`text-sm font-semibold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Contact
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              <a
                href={`mailto:${contactEmail}`}
                className={`transition-colors ${
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
                aria-label="Follow regX AI on X (Twitter)"
                className={`inline-flex items-center gap-2 transition-colors ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <XLogo className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 pt-8 border-t text-sm flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between ${
            isDark
              ? "border-white/10 text-gray-500"
              : "border-gray-200/70 text-gray-500"
          }`}
        >
          <div>{copyright}</div>
          <div className="text-xs">{builtForTagline}</div>
        </div>
      </div>
    </footer>
  );
}
