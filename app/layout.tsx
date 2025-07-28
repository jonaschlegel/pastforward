import './globals.css';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollTracker from '@/components/ScrollTracker';
import type { Metadata } from 'next';
import { Mulish, Newsreader } from 'next/font/google';
import type React from 'react';
import Tracking from './Tracking';

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "PastForwardHub - A shared space for archaeologists",
  description: "Building sustainable futures for archaeologists",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "PastForwardHub - A shared space for archaeologists",
    description: "Building sustainable futures for archaeologists",
    url: "https://pastforwardhub.com",
    siteName: "PastForwardHub",
    images: [
      {
        url: "https://pastforwardhub.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PastForwardHub - A shared space for archaeologists",
    description: "Building sustainable futures for archaeologists",
    images: ["https://pastforwardhub.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${mulish.variable} ${mulish.className}`}
      >
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
        <ScrollTracker />
        <Tracking />
      </body>
    </html>
  );
}
