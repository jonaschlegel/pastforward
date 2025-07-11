import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 border-b bg-white z-50" role="banner">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link href="/">PastForward</Link>
        </div>
        <nav className="flex space-x-6 text-sm" aria-label="Main Navigation">
          <Link href="/news" className="text-gray-600">
            news
          </Link>
          <Link href="/#newsletter" className="text-gray-600">
            newsletter
          </Link>
          <Link href="/#crowdfunding" className="text-gray-600">
            crowdfunding
          </Link>
        </nav>
      </div>
    </header>
  );
}
