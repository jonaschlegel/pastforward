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
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Tracking />
      </body>
    </html>
  );
}
