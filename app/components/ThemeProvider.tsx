'use client';

import { useState, createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

