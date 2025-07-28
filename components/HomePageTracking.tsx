"use client";

import { track } from '@/lib/tracking';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface HomePageTrackedLinksProps {
  latestNews: any[];
  getExternalLinkText: (url: string) => string;
}

export function NewsArticleLink({
  article,
  className,
}: {
  article: any;
  className?: string;
}) {
  const handleClick = () => {
    track.newsArticle(article.title, article.slug);
  };

  if (!article.hasPage) {
    return <span>{article.title}</span>;
  }

  return (
    <Link
      href={`/news/${article.slug}`}
      className={className}
      onClick={handleClick}
    >
      {article.title}
    </Link>
  );
}

export function ExternalTrackedLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const handleClick = () => {
    track.externalLink(href, children?.toString() || "");
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export function TrackedNewsLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = () => {
    track.navigate("news_all");
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

export function VideoPlayer({ poster, src }: { poster: string; src: string }) {
  const handlePlay = () => {
    track.videoPlay();
  };

  return (
    <video
      controls
      className="w-full h-auto rounded-lg"
      poster={poster}
      onPlay={handlePlay}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export function SurveyButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = () => {
    track.surveyClick();
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
