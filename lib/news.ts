import fs from "fs";
import path from "path";
import matter from "gray-matter";

const newsDirectory = path.join(process.cwd(), "content/news");

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featured: boolean;
  hasPage: boolean;
  externalLink?: string;
  content: string;
}

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  const fileNames = fs.readdirSync(newsDirectory);
  const allNewsData = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        featured: data.featured || false,
        hasPage: data.hasPage || false,
        externalLink: data.externalLink,
        content,
      };
    });

  // Sort articles by date (newest first)
  return allNewsData.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? -1 : 1
  );
}

export async function getNewsArticleBySlug(
  slug: string
): Promise<NewsArticle | null> {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      featured: data.featured || false,
      hasPage: data.hasPage || false,
      externalLink: data.externalLink,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function getFeaturedNewsArticles(
  limit: number = 3
): Promise<NewsArticle[]> {
  const allArticles = await getAllNewsArticles();
  // Filter for featured articles only
  const featuredArticles = allArticles.filter((article) => article.featured);
  return featuredArticles.slice(0, limit);
}

export interface TimelineGroup {
  year: number;
  month: number;
  monthName: string;
  articles: NewsArticle[];
}

export async function getTimelineArticles(): Promise<TimelineGroup[]> {
  const allArticles = await getAllNewsArticles();

  // Group articles by year and month
  const groups: { [key: string]: TimelineGroup } = {};

  allArticles.forEach((article) => {
    const date = new Date(article.date);
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-11
    const monthName = date.toLocaleDateString("en-US", { month: "long" });
    const key = `${year}-${month}`;

    if (!groups[key]) {
      groups[key] = {
        year,
        month,
        monthName,
        articles: [],
      };
    }

    groups[key].articles.push(article);
  });

  // Convert to array and sort by year and month (newest first)
  return Object.values(groups).sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year; // Newer years first
    }
    return b.month - a.month; // Newer months first
  });
}
