/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - Deep teal/blue for light, dark slate for dark
        charcoal: '#1e293b',
        navy: '#0f172a',
        'navy-dark': '#020617',
        'navy-light': '#334155',
        'navy-muted': '#475569',
        
        // Background colors
        'bg-primary': '#ffffff',
        'bg-secondary': '#f8fafc',
        'bg-muted': '#f1f5f9',
        'off-white': '#fafafa',
        
        // Accent colors - Teal for light mode, Green for dark mode
        accent: '#14b8a6', // Teal
        'accent-dark': '#0d9488', // Darker teal
        'accent-light': '#5eead4', // Light teal
        'accent-muted': '#99f6e4', // Very light teal
        'accent-green': '#10b981', // Green for dark mode
        'accent-green-dark': '#059669',
        'accent-green-light': '#34d399',
        
        // Text colors
        'text-primary': '#0f172a',
        'text-secondary': '#334155',
        'text-muted': '#64748b',
        'text-light': '#94a3b8',
        
        // Slate colors
        slate: '#475569',
        'slate-light': '#64748b',
        'slate-dark': '#334155',
        
        // Card and border colors
        'card-bg': '#ffffff',
        'border-light': '#e2e8f0',
        'border-medium': '#cbd5e1',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

