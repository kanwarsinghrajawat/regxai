"use client";

import { useState, useRef, useEffect } from "react";
import { Shield, Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteName } from "../../content/footer";
import { navItems, languageLabel } from "../../content/navigation";
import { useLanguage, localeConfig, type Locale } from "./LanguageProvider";

interface NavigationProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

export function Navigation({ isDark, setIsDark }: NavigationProps) {
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const currentLocale = localeConfig.find((l) => l.id === locale) ?? localeConfig[0];
  const items = navItems[locale];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header role="banner">
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 border-b ${
        isDark
          ? "bg-gray-950 border-white/10"
          : "bg-white border-gray-200/70 shadow-soft-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <Shield className="w-8 h-8 text-emerald-500" aria-hidden="true" />
            <span
              className={`text-2xl font-bold tracking-tight font-display ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {siteName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`relative text-sm font-semibold tracking-tight transition-colors group ${
                  isDark
                    ? isActive(item.path)
                      ? "text-white"
                      : "text-gray-200 hover:text-white"
                    : isActive(item.path)
                    ? "text-gray-900"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 transition-transform duration-300 origin-left ${
                    isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  isLangOpen
                    ? isDark
                      ? "bg-white/10 border-emerald-500/30 text-white"
                      : "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : isDark
                    ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-gray-200"
                    : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
                aria-label="Select language"
              >
                <span className="text-lg leading-none">{currentLocale.flag}</span>
                <span className="hidden sm:inline text-xs font-semibold tracking-wide">{currentLocale.id.toUpperCase()}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
              </button>

              {isLangOpen && (
                <div
                  className={`absolute right-0 mt-2.5 w-48 rounded-2xl border shadow-2xl overflow-hidden z-[80] backdrop-blur-xl ${
                    isDark
                      ? "bg-gray-900/95 border-white/10"
                      : "bg-white/95 border-gray-200/80"
                  }`}
                >
                  <div className="p-1.5">
                    {localeConfig.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => {
                          setLocale(l.id);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all duration-150 ${
                          locale === l.id
                            ? isDark
                              ? "bg-emerald-500/15 text-emerald-300 shadow-sm"
                              : "bg-emerald-50 text-emerald-700 shadow-sm"
                            : isDark
                            ? "text-gray-300 hover:bg-white/5 hover:text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <span className="text-xl leading-none">{l.flag}</span>
                        <div className="flex flex-col items-start">
                          <span className="leading-tight">{l.label}</span>
                        </div>
                        {locale === l.id && (
                          <svg className="ml-auto w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-full transition-all duration-200 ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-emerald-300"
                  : "bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-700"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-full transition-all duration-200 ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-emerald-300"
                  : "bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-700"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-[60]"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-80 max-w-[85vw] ${
          isDark
            ? "bg-gray-950 border-l border-white/10"
            : "bg-white border-l border-gray-200/70"
        } shadow-2xl z-[70] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }}
      >
        <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col px-6 py-8 space-y-4">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={closeMobileMenu}
                className={`font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? isDark
                      ? "bg-emerald-500/15 text-emerald-200 border border-emerald-500/20"
                      : "bg-emerald-500/10 text-emerald-800 border border-emerald-500/20"
                    : isDark
                    ? "text-gray-100 hover:bg-white/5 hover:text-white"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className={`mt-4 pt-4 border-t ${isDark ? "border-white/10" : "border-gray-200"}`}>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-3 px-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                {languageLabel[locale]}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {localeConfig.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      setLocale(l.id);
                      closeMobileMenu();
                    }}
                    className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                      locale === l.id
                        ? isDark
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 shadow-sm"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm"
                        : isDark
                        ? "text-gray-300 hover:bg-white/5 border border-white/5"
                        : "text-gray-700 hover:bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <span className="text-lg">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
}
