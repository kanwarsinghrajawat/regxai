import Link from "next/link";
import { Shield } from "lucide-react";

interface FooterProps {
  isDark: boolean;
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
                regX AI
              </div>
              <p
                className={`mt-2 text-sm leading-relaxed max-w-md ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Infrastructure for enforcing AI trust and deterministic
                decisioning.
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
              {[
                { href: "/solution", label: "Solution" },
                { href: "/services", label: "Services" },
                { href: "/regulatory", label: "Regulatory" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
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
                href="mailto:business@regxai.com"
                className={`transition-colors ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                business@regxai.com
              </a>
              <a
                href="https://x.com/regX_AI"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isDark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                X (Twitter)
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 pt-8 border-t text-sm flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between ${
            isDark ? "border-white/10 text-gray-500" : "border-gray-200/70 text-gray-500"
          }`}
        >
          <div>© 2026 regX AI. All rights reserved.</div>
          <div className="text-xs">
            Built for responsible deployment of agentic AI.
          </div>
        </div>
      </div>
    </footer>
  );
}

