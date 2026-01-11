'use client';

import { useState } from 'react';
import { Shield, Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

export function Navigation({ isDark, setIsDark }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About', path: '/' },
    { id: 'solution', label: 'Solution', path: '/solution' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'regulatory', label: 'Regulatory', path: '/regulatory' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => pathname === path;

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <Shield className="w-8 h-8 text-emerald-500" aria-hidden="true" />
            <span className="text-2xl font-bold text-white">regX AI</span>
            <span className="sr-only">Go to homepage</span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="relative text-white font-medium text-sm group"
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transition-all duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-all duration-200 text-emerald-500"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-all duration-200 text-emerald-500"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
        className={`lg:hidden fixed inset-y-0 right-0 w-80 max-w-[85vw] backdrop-blur-xl ${
          isDark 
            ? 'bg-gray-900 border-l-2 border-gray-700' 
            : 'bg-gray-50 border-l-2 border-gray-300'
        } shadow-2xl z-[70] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        <div className={`flex flex-col h-[calc(100vh-80px)] overflow-y-auto ${
          isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
          <div className="flex flex-col px-6 py-8 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={closeMobileMenu}
                className={`font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? isDark
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-emerald-500/20 text-emerald-700'
                    : isDark
                    ? 'text-gray-100 hover:bg-emerald-500/10 hover:text-emerald-300'
                    : 'text-gray-900 hover:bg-emerald-500/10 hover:text-emerald-700'
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

