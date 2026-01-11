import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'regX AI - Infrastructure for enforcing AI trust',
  description: 'Infrastructure for enforcing AI trust and deterministic decisioning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

