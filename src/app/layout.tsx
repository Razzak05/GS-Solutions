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
  title: 'GS Solutions — Comprehensive Lead Generation & Contact Center Solutions',
  description: 'We offer a wide range of professional Lead Generation, Telemarketing, 24/7 Customer Support, and Contact Center services tailored to your business needs.',
  keywords: [
    'GS Solutions',
    'Lead Generation',
    'Telemarketing',
    'Customer Support',
    'ACA Leads',
    'Auto Insurance Leads',
    'Medicare Enrollment Support',
    'Final Expense Insurance',
    'SSDI Advocacy',
    'Home Improvement Solar',
    'Pest Control Leads',
    'Inbound Call Center',
    'Outbound Campaigns',
    'Contact Center Solutions'
  ],
  authors: [{ name: 'GS Solutions' }],
  openGraph: {
    title: 'GS Solutions — Comprehensive Lead Generation Solutions',
    description: 'Professional Lead Generation, Telemarketing, and 24/7 Customer Support tailored to your business needs.',
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
