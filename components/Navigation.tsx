"use client";

import { track } from "@/lib/tracking";
import Link from "next/link";

export default function Navigation() {
  const handleNavClick = (destination: string) => {
    track.navigate(destination);
  };

  return (
    <header className="sticky top-0 border-b bg-white z-50" role="banner">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link href="/" onClick={() => handleNavClick("home")}>
            PastForwardHub
          </Link>
        </div>
        <nav className="flex space-x-6 text-sm" aria-label="Main Navigation">
          <Link
            href="/news"
            className="text-gray-600"
            onClick={() => handleNavClick("news")}
          >
            news
          </Link>
          <Link
            href="/#newsletter"
            className="text-gray-600"
            onClick={() => handleNavClick("newsletter")}
          >
            newsletter
          </Link>
          <Link
            href="https://www.kickstarter.com/projects/pastforwardhub/pastforwardhub-for-archaeologists-by-archaeologists?ref=discovery&term=pastforwardhub&total_hits=1&category_id=342"
            className="text-gray-600"
            onClick={() => handleNavClick("crowdfunding")}
          >
            crowdfunding
          </Link>
        </nav>
      </div>
    </header>
  );
}
