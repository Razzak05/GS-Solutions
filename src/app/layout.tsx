import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#06080F',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GS Solutions — Precision Lead Generation & Enterprise BPO',
  description: 'Compliant live transfers and dedicated contact center operations engineered for high-performance sales floors in Insurance, Legal, and Home Services.',
  keywords: [
    'GS Solutions',
    'Lead Generation',
    'BPO Services',
    'ACA Leads',
    'Medicare Transfers',
    'Final Expense',
    'SSDI Advocacy',
    'Home Improvement Solar',
    'Warm Live Transfers',
    'Contact Center Pods'
  ],
  authors: [{ name: 'GS Solutions' }],
  openGraph: {
    title: 'GS Solutions — Precision Lead Generation & Enterprise BPO',
    description: 'Compliant live transfers and dedicated contact center operations engineered for high-performance sales floors.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-[#06080F] text-[#F8FAFC] antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
