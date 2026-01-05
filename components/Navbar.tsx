'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white dark:bg-black border-b border-slate-200 dark:border-slate-900 ${
      isScrolled ? 'bg-opacity-98 dark:bg-opacity-98 backdrop-blur-md shadow-lg' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-xl font-medium text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent-green transition-colors"
          >
            regX AI
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 md:space-x-12">
            <Link
              href="/about"
              className={`text-sm transition-colors ${
                pathname === '/about' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              About
            </Link>
            <Link
              href="/solution"
              className={`text-sm transition-colors ${
                pathname === '/solution' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              Solution
            </Link>
            <Link
              href="/services"
              className={`text-sm transition-colors ${
                pathname === '/services' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              Services
            </Link>
            <Link
              href="/regulatory"
              className={`text-sm transition-colors ${
                pathname === '/regulatory' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              Regulatory
            </Link>
            <Link
              href="/contact"
              className={`text-sm transition-colors ${
                pathname === '/contact' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation (Theme Toggle + Hamburger) */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none bg-transparent border-none cursor-pointer flex-shrink-0"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[2px] bg-black dark:bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-black dark:bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-black dark:bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 border-t border-slate-200 dark:border-slate-900 mt-2">
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm transition-colors py-2 ${
                pathname === '/about' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              About
            </Link>
            <Link
              href="/solution"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm transition-colors py-2 ${
                pathname === '/solution' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              Solution
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm transition-colors py-2 ${
                pathname === '/services' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              Services
            </Link>
            <Link
              href="/regulatory"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm transition-colors py-2 ${
                pathname === '/regulatory' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              Regulatory
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm transition-colors py-2 ${
                pathname === '/contact' 
                  ? 'text-accent dark:text-accent-green font-medium' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-green'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
