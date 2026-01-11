import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import { StructuredData } from './components/StructuredData';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://regxai.com'),
  title: {
    default: 'regX AI | Infrastructure for enforcing AI trust and deterministic decisioning',
    template: '%s | regX AI',
  },
  description: 'Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle. Determines whether AI actions are responsible and compliant before agents and models deploy, act, respond, or predict.',
  keywords: [
    'AI trust',
    'AI governance',
    'AI compliance',
    'deterministic AI',
    'AI decisioning',
    'AI risk management',
    'AI safety',
    'AI regulation',
    'enterprise AI',
    'AI infrastructure',
  ],
  authors: [{ name: 'regX AI' }],
  creator: 'regX AI',
  publisher: 'regX AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'regX AI',
    title: 'regX AI | Infrastructure for enforcing AI trust',
    description: 'Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'regX AI - AI Trust Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'regX AI | Infrastructure for enforcing AI trust',
    description: 'Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle.',
    images: ['/og-image.jpg'],
    creator: '@regxai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

