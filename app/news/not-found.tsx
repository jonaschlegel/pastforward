import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Homepage
            </Link>

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-4 font-heading">
                News Page Not Found
              </h1>

              <p className="text-xl font-body font-light text-gray-600 mb-8">
                The news page you're looking for doesn't exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Search size={32} className="text-white" />
                </div>

                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                  Let's get you back on track
                </h2>

                <p className="text-gray-600 font-body mb-6 leading-relaxed">
                  The page you're looking for might have been moved, deleted, or
                  you may have entered an incorrect URL.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/news"
                  className="inline-flex items-center bg-indigo-700 hover:bg-indigo-800 text-white font-body font-medium px-6 py-3 rounded-lg transition-colors mr-4"
                >
                  View All News
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body font-medium px-6 py-3 rounded-lg border border-indigo-700 hover:border-indigo-900 transition-colors"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-bold font-heading text-gray-900 mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link
                href="/news"
                className="bg-white p-4 rounded-lg shadow-[0px_12px_16px_-8px_#2d3748] hover:shadow-[0px_8px_20px_-4px_#2d3748] transition-shadow"
              >
                <h4 className="font-bold font-heading text-gray-900 mb-2">
                  News Timeline
                </h4>
                <p className="text-gray-600 font-body text-sm">
                  Latest updates and announcements
                </p>
              </Link>
              <Link
                href="/#newsletter"
                className="bg-white p-4 rounded-lg shadow-[0px_12px_16px_-8px_#2d3748] hover:shadow-[0px_8px_20px_-4px_#2d3748] transition-shadow"
              >
                <h4 className="font-bold font-heading text-gray-900 mb-2">
                  Newsletter
                </h4>
                <p className="text-gray-600 font-body text-sm">
                  Subscribe for updates
                </p>
              </Link>
              <Link
                href="https://www.kickstarter.com/projects/pastforwardhub/pastforwardhub-for-archaeologists-by-archaeologists?ref=discovery&term=pastforwardhub&total_hits=1&category_id=342"
                className="bg-white p-4 rounded-lg shadow-[0px_12px_16px_-8px_#2d3748] hover:shadow-[0px_8px_20px_-4px_#2d3748] transition-shadow"
              >
                <h4 className="font-bold font-heading text-gray-900 mb-2">
                  Support Us
                </h4>
                <p className="text-gray-600 font-body text-sm">
                  Join our community
                </p>
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeqUhDaUFCNyqxk7989TjE6g_PJ6XCHg2Z-UzTWbEF2s9xy3Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow-[0px_12px_16px_-8px_#2d3748] hover:shadow-[0px_8px_20px_-4px_#2d3748] transition-shadow"
              >
                <h4 className="font-bold font-heading text-gray-900 mb-2">
                  Survey
                </h4>
                <p className="text-gray-600 font-body text-sm">
                  Help shape our platform
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
