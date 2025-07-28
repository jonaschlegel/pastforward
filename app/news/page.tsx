import {
  TrackedExternalLinkWithIcon,
  TrackedNewsLink,
} from '@/components/NewsPageTracking';
import { getTimelineArticles } from '@/lib/news';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News - PastForwardHub",
  description:
    "Latest updates from PastForwardHub - building the future of archaeological careers.",
  openGraph: {
    title: "News - PastForwardHub",
    description:
      "Latest updates from PastForwardHub - building the future of archaeological careers.",
    url: "https://pastforwardhub.com/news",
    type: "website",
  },
};

export default async function NewsPage() {
  const timelineGroups = await getTimelineArticles();

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
                                  <TrackedNewsLink
                                    href={`/news/${article.slug}`}
                                    title={article.title}
                                    slug={article.slug}
                                    className="hover:text-indigo-700 transition-colors"
                                  >
                                    {article.title}
                                  </TrackedNewsLink>
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
                                <TrackedExternalLinkWithIcon
                                  href={article.externalLink}
                                  className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body font-medium text-sm transition-colors"
                                />
                              ) : article.hasPage ? (
                                <TrackedNewsLink
                                  href={`/news/${article.slug}`}
                                  title={article.title}
                                  slug={article.slug}
                                  className="text-indigo-700 hover:text-indigo-900 font-body font-medium text-sm transition-colors"
                                >
                                  Read more →
                                </TrackedNewsLink>
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
