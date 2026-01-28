"use client";

import { useState } from "react";
import { Shield, Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

export function Navigation({ isDark, setIsDark }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About", path: "/" },
    { id: "solution", label: "Solution", path: "/solution" },
    { id: "services", label: "Services", path: "/services" },
    { id: "regulatory", label: "Regulatory", path: "/regulatory" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
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
              className={`text-2xl font-extrabold tracking-tight font-display ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              regX AI
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
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

          <div className="flex items-center gap-4">
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
            {navItems.map((item) => (
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
          </div>
        </div>
      </div>
    </nav>
  );
}
