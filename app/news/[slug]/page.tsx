import ArticlePageTracker from '@/components/ArticlePageTracker';
import { getAllNewsArticles, getNewsArticleBySlug } from '@/lib/news';
import { track } from '@/lib/tracking';
import { useMDXComponents } from '@/mdx-components';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface NewsArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = await getAllNewsArticles();
  return articles
    .filter((article) => article.hasPage)
    .map((article) => ({
      slug: article.slug,
    }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found - PastForward",
    };
  }

  return {
    title: `${article.title} - PastForward`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} - PastForward`,
      description: article.excerpt,
      url: `https://pastforward.com/news/${article.slug}`,
      type: "article",
    },
  };
}

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const handleBackClick = () => {
    track.navigate("news_back");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ArticlePageTracker
        articleTitle={article.title}
        articleSlug={article.slug}
      />
      {/* Header Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/news"
              className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body mb-6 transition-colors"
              onClick={handleBackClick}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to News
            </Link>

            <div className="text-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                {article.featured && (
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-4 font-heading">
                {article.title}
              </h1>

              <p className="text-xl font-body font-light text-gray-600">
                {article.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] p-8 md:p-12">
              <MDXRemote
                source={article.content}
                components={useMDXComponents({})}
              />
            </article>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/news"
              className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-body font-medium transition-colors"
              onClick={handleBackClick}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to all news
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
