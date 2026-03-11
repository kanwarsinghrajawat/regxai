import Link from "next/link";
import { Shield, MapPin } from "lucide-react";
import {
  siteName,
  footerTagline,
  footerPages,
  contactEmail,
  twitterUrl,
  offices,
  copyright,
  builtForTagline,
} from "../../content/footer";
import { XIcon } from "./icons/XIcon";

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={isDark ? "bg-gray-900" : "bg-white"}
    >
      {/* Accent bar */}
      <div
        className={`h-1 w-full ${
          isDark
            ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500"
            : "bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400"
        }`}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand + Offices — spans 5 cols on large */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className={`inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-md ${isDark ? "focus-visible:ring-offset-gray-900" : "focus-visible:ring-offset-white"}`}
            >
              <Shield
                className={`w-8 h-8 shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                aria-hidden="true"
              />
              <span
                className={`text-lg font-semibold tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {siteName}
              </span>
            </Link>
            <p
              className={`mt-3 text-sm leading-relaxed max-w-xs ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {footerTagline}
            </p>

            {/* Offices */}
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {offices.map((office) => (
                <div key={office.city} className="flex items-start gap-2">
                  <MapPin
                    className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                      isDark ? "text-emerald-400/60" : "text-emerald-600/50"
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <span
                      className={`text-sm font-medium ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {office.city}
                    </span>
                    {office.comingSoon && (
                      <span
                        className={`ml-1.5 inline-flex items-center rounded-full px-1.5 py-px text-[10px] font-semibold uppercase tracking-wider ${
                          isDark
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        Soon
                      </span>
                    )}
                    {office.address && (
                      <span
                        className={`text-xs leading-relaxed block mt-0.5 ${
                          isDark ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        {office.address}{office.region && `, ${office.region}`}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider — only on large screens */}
          <div
            className={`hidden lg:block lg:col-span-1 w-px self-stretch min-h-[120px] ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
            aria-hidden
          />

          {/* Links — 3 cols */}
          <div className="lg:col-span-3">
            <h3
              className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                isDark ? "text-emerald-400/90" : "text-emerald-700"
              }`}
            >
              Navigate
            </h3>
            <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:flex-col sm:flex-nowrap sm:gap-y-2.5">
              {footerPages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <h3
              className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                isDark ? "text-emerald-400/90" : "text-emerald-700"
              }`}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className={`text-sm font-medium transition-colors ${
                    isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X (formerly Twitter)"
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    isDark
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  Follow us
                  <XIcon className="w-4 h-4 shrink-0" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`border-t py-4 ${
          isDark ? "border-gray-800 bg-gray-950" : "border-gray-100 bg-gray-50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left">
          <span className={isDark ? "text-gray-500 text-xs" : "text-gray-500 text-xs"}>
            {copyright}
          </span>
          <span
            className={`text-xs ${isDark ? "text-gray-600" : "text-gray-500"}`}
          >
            {builtForTagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
