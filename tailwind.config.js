/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "page-title": ["2.25rem", { lineHeight: "2.5rem" }],
        "section-title": ["1.875rem", { lineHeight: "2.25rem" }],
        "card-title": ["1.25rem", { lineHeight: "1.75rem" }],
      },
      boxShadow: {
        "soft-sm": "0 10px 26px -18px rgba(0,0,0,0.18)",
        soft: "0 18px 50px -32px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
