import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/news"
              className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to News
            </Link>

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-4 font-heading">
                Article Not Found
              </h1>

              <p className="text-xl font-body font-light text-gray-600 mb-8">
                This news article doesn't have a dedicated page, or the article
                you're looking for doesn't exist.
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
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <ExternalLink size={32} className="text-white" />
                </div>

                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                  Looking for a specific news item?
                </h2>

                <p className="text-gray-600 font-body mb-6 leading-relaxed">
                  Some of our news items are short announcements that link
                  directly to external content like podcast episodes, social
                  media posts, or partner websites. These don't have dedicated
                  article pages.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/news"
                  className="inline-flex items-center bg-indigo-700 hover:bg-indigo-800 text-white font-body font-medium px-6 py-3 rounded-lg transition-colors mr-4"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  View All News
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body font-medium px-6 py-3 rounded-lg border border-indigo-700 hover:border-indigo-900 transition-colors"
                >
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-bold font-heading text-gray-900 mb-3">
              What you can do:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-bold font-heading text-gray-900 mb-2">
                  Check the News Timeline
                </h4>
                <p className="text-gray-600 font-body">
                  Browse all news items chronologically, including external
                  links and short announcements.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-bold font-heading text-gray-900 mb-2">
                  Featured News
                </h4>
                <p className="text-gray-600 font-body">
                  Check our homepage for the latest featured news and updates
                  from PastForward.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-bold font-heading text-gray-900 mb-2">
                  External Content
                </h4>
                <p className="text-gray-600 font-body">
                  Some news items link to podcasts, LinkedIn posts, or partner
                  websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
