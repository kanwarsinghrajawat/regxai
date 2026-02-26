import type { Metadata } from 'next';
import { DM_Sans, Outfit } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import { StructuredData } from './components/StructuredData';
import {
  defaultTitle,
  titleTemplate,
  defaultDescription,
  keywords,
  siteName,
  getSiteUrl,
} from '../content/metadata';
import './globals.css';

const OG_IMAGE_PATH = '/5.jpg';
const OG_TITLE = 'regX AI | Infrastructure for enforcing AI trust';
const OG_DESCRIPTION = 'Infrastructure for enforcing AI trust and compliance.';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  preload: true,
});

const siteUrl = getSiteUrl();
// Absolute URL required by Twitter/X crawler (relative URLs often show blank)
const ogImageAbsoluteUrl = `${siteUrl}${OG_IMAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: titleTemplate,
  },
  description: defaultDescription,
  keywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: [{ url: OG_IMAGE_PATH, type: 'image/jpeg' }],
    shortcut: OG_IMAGE_PATH,
    apple: OG_IMAGE_PATH,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: ogImageAbsoluteUrl,
        width: 1200,
        height: 630,
        alt: 'regX AI - Infrastructure for enforcing AI trust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ogImageAbsoluteUrl,
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
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${dmSans.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

