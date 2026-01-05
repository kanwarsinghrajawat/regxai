'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/solution', label: 'Solution' },
  { href: '/services', label: 'Services' },
  { href: '/regulatory', label: 'Regulatory' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/90 dark:backdrop-blur-xl shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 dark:shadow-lg dark:shadow-black/50' 
          : 'bg-white/60 dark:bg-black/70 dark:backdrop-blur-md border-b border-transparent dark:border-slate-900/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center space-x-2 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-all duration-300 group-hover:text-accent dark:group-hover:text-accent-green">
                regX
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent dark:bg-accent-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
            <span className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-400 group-hover:text-accent dark:group-hover:text-accent-green transition-colors duration-300">
              AI
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group px-4 py-2"
                >
                  <span
                    className={`relative z-10 text-sm font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-accent dark:text-accent-green'
                        : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-accent dark:bg-accent-green" />
                  )}
                  {/* Hover indicator */}
                  {!isActive && (
                    <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-accent dark:bg-accent-green transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                  )}
                </Link>
              )
            })}
            <div className="ml-6 pl-6 border-l border-slate-200 dark:border-slate-800">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation (Theme Toggle + Hamburger) */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex flex-col justify-center items-center w-10 h-10 focus:outline-none group"
              aria-label="Toggle menu"
            >
              <span
                className={`absolute block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ease-out ${
                  isMenuOpen 
                    ? 'rotate-45 translate-y-0' 
                    : '-translate-y-2 group-hover:bg-accent dark:group-hover:bg-accent-green'
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:bg-accent dark:group-hover:bg-accent-green'
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ease-out ${
                  isMenuOpen 
                    ? '-rotate-45 translate-y-0' 
                    : 'translate-y-2 group-hover:bg-accent dark:group-hover:bg-accent-green'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'max-h-[500px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-1 border-t border-slate-200/50 dark:border-slate-800/50">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative block px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-accent/10 dark:bg-accent-green/10 text-accent dark:text-accent-green'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  style={{
                    animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  }}
                >
                  <span className="relative z-10 flex items-center justify-between text-sm font-semibold">
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-green" />
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent dark:bg-accent-green" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
