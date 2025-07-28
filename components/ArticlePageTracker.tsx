"use client";

import { trackFB, trackGA } from '@/lib/tracking';
import { useEffect } from 'react';

interface ArticlePageTrackerProps {
  articleTitle: string;
  articleSlug: string;
}

export default function ArticlePageTracker({
  articleTitle,
  articleSlug,
}: ArticlePageTrackerProps) {
  useEffect(() => {
    trackGA.newsArticle(articleTitle, articleSlug);
    trackFB.viewContent(articleTitle, "news_article");
  }, [articleTitle, articleSlug]);

  return null;
}
