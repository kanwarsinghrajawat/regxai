'use client';

import { useState, createContext, useContext, useEffect, useCallback, ReactNode } from 'react';

export type Locale = 'en' | 'de' | 'fr' | 'es';

export const localeConfig: { id: Locale; flag: string; label: string }[] = [
  { id: 'en', flag: '🇬🇧', label: 'English' },
  { id: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { id: 'fr', flag: '🇫🇷', label: 'Français' },
  { id: 'es', flag: '🇪🇸', label: 'Español' },
];

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const VALID_LOCALES: Locale[] = ['en', 'de', 'fr', 'es'];

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('locale');
  if (saved && VALID_LOCALES.includes(saved as Locale)) {
    return saved as Locale;
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [isHydrated, setIsHydrated] = useState(false);

  // Read saved locale on mount and update HTML lang attribute
  useEffect(() => {
    const saved = getInitialLocale();
    setLocaleState(saved);
    document.documentElement.lang = saved;
    setIsHydrated(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
