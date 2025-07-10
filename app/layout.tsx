import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Newsreader, Mulish } from "next/font/google";
import Tracking from "./Tracking";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "PastForward - A shared space for archaeologists",
  description: "Building sustainable futures for archaeologists",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "PastForward - A shared space for archaeologists",
    description: "Building sustainable futures for archaeologists",
    url: "https://pastforward.com",
    siteName: "PastForward",
    images: [
      {
        url: "https://pastforward.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PastForward - A shared space for archaeologists",
    description: "Building sustainable futures for archaeologists",
    images: ["https://pastforward.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${mulish.variable} ${mulish.className}`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Tracking />
      </body>
    </html>
  );
}
