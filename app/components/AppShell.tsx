"use client";

import type { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useTheme } from "./ThemeProvider";
import { FaqSection } from "./FaqSection";

export function AppShell({ children }: { children: ReactNode }) {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      {children}
      <FaqSection isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

