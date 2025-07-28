import { getExternalLinkText, getTimelineArticles } from '@/lib/news';
import { track } from '@/lib/tracking';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "News - PastForward",
  description:
    "Latest updates from PastForwardHub - building the future of archaeological careers.",
  openGraph: {
    title: "News - PastForward",
    description:
      "Latest updates from PastForwardHub - building the future of archaeological careers.",
    url: "https://pastforward.com/news",
    type: "website",
  },
};

export default async function NewsPage() {
  const timelineGroups = await getTimelineArticles();

  const handleNewsClick = (title: string, slug: string) => {
    track.newsArticle(title, slug);
  };

  const handleExternalLinkClick = (url: string, linkText: string) => {
    track.externalLink(url, linkText);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 mt-[80px] font-heading">
              Latest News
            </h1>
            <p className="text-xl mb-8 font-body font-light">
              Stay updated with the latest developments from PastForwardHub as
              we build the future of archaeological careers.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-12">
                {timelineGroups.map((group, index) => {
                  // Define colors for timeline circles
                  const colors = [
                    "bg-gradient-to-br from-blue-500 to-indigo-600",
                    "bg-gradient-to-br from-amber-500 to-orange-600",
                    "bg-gradient-to-br from-teal-500 to-emerald-600",
                    "bg-gradient-to-br from-purple-500 to-violet-600",
                    "bg-gradient-to-br from-rose-500 to-pink-600",
                    "bg-gradient-to-br from-cyan-500 to-blue-600",
                  ];
                  const circleColor = colors[index % colors.length];

                  return (
                    <div
                      key={`${group.year}-${group.month}`}
                      className="relative"
                    >
                      {/* Date Marker */}
                      <div className="flex items-center mb-6">
                        <div
                          className={`relative z-10 flex items-center justify-center w-16 h-16 ${circleColor} rounded-lg shadow-[0px_24px_20px_-20px_#2d3748]`}
                        ></div>
                        <div className="ml-6">
                          <h2 className="text-2xl font-bold font-heading text-gray-800">
                            {group.monthName} {group.year}
                          </h2>
                        </div>
                      </div>

                      {/* Articles for this month */}
                      <div className="ml-24 space-y-6">
                        {group.articles.map((article) => (
                          <div
                            key={article.slug}
                            className="bg-white rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] p-6 hover:shadow-[0px_12px_24px_-8px_#2d3748] transition-shadow duration-300"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="text-xl font-bold font-heading text-gray-900 flex-1">
                                {article.hasPage ? (
                                  <Link
                                    href={`/news/${article.slug}`}
                                    className="hover:text-indigo-700 transition-colors"
                                    onClick={() =>
                                      handleNewsClick(
                                        article.title,
                                        article.slug
                                      )
                                    }
                                  >
                                    {article.title}
                                  </Link>
                                ) : (
                                  <span>{article.title}</span>
                                )}
                              </h3>
                              {article.featured && (
                                <span className="ml-3 px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 font-body mb-4">
                              {article.excerpt}
                            </p>
                            <div className="flex justify-end items-center">
                              {article.externalLink ? (
                                <a
                                  href={article.externalLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body font-medium text-sm transition-colors"
                                  onClick={() =>
                                    handleExternalLinkClick(
                                      article.externalLink!,
                                      getExternalLinkText(article.externalLink!)
                                    )
                                  }
                                >
                                  {getExternalLinkText(article.externalLink)}{" "}
                                  <ExternalLink size={12} className="ml-1" />
                                </a>
                              ) : article.hasPage ? (
                                <Link
                                  href={`/news/${article.slug}`}
                                  className="text-indigo-700 hover:text-indigo-900 font-body font-medium text-sm transition-colors"
                                  onClick={() =>
                                    handleNewsClick(article.title, article.slug)
                                  }
                                >
                                  Read more →
                                </Link>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
