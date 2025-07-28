"use client";

import { track } from '@/lib/tracking';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Client-safe version of getExternalLinkText
function getExternalLinkText(url: string): string {
  if (!url) return "Visit link";

  const lowerUrl = url.toLowerCase();

  // YouTube videos (podcasts, interviews, etc.)
  if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) {
    return "Watch episode";
  }

  // LinkedIn
  if (lowerUrl.includes("linkedin.com")) {
    return "Visit LinkedIn";
  }

  // Academic/Newsletter websites
  if (
    lowerUrl.includes("e-a-a.org") ||
    lowerUrl.includes("newsletter") ||
    lowerUrl.includes("announcement")
  ) {
    return "Read announcement";
  }

  // Podcast platforms
  if (
    lowerUrl.includes("spotify.com") ||
    lowerUrl.includes("apple.com/podcast") ||
    lowerUrl.includes("anchor.fm")
  ) {
    return "Listen to episode";
  }

  // Social media
  if (
    lowerUrl.includes("facebook.com") ||
    lowerUrl.includes("twitter.com") ||
    lowerUrl.includes("x.com") ||
    lowerUrl.includes("instagram.com")
  ) {
    return "View post";
  }

  // Default fallback
  return "Visit website";
}

interface TrackedNewsLinkProps {
  href: string;
  title: string;
  slug: string;
  children: React.ReactNode;
  className?: string;
}

export function TrackedNewsLink({
  href,
  title,
  slug,
  children,
  className,
}: TrackedNewsLinkProps) {
  const handleClick = () => {
    track.newsArticle(title, slug);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

interface TrackedExternalLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export function TrackedExternalLink({
  href,
  children,
  className,
}: TrackedExternalLinkProps) {
  const handleClick = () => {
    track.externalLink(href, getExternalLinkText(href));
  };

  // If no children provided, use the generated text
  const linkText = children || getExternalLinkText(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {linkText}
    </a>
  );
}

interface TrackedExternalLinkWithIconProps {
  href: string;
  className?: string;
}

export function TrackedExternalLinkWithIcon({
  href,
  className,
}: TrackedExternalLinkWithIconProps) {
  const handleClick = () => {
    track.externalLink(href, getExternalLinkText(href));
  };

  const linkText = getExternalLinkText(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {linkText} <ExternalLink size={12} className="ml-1" />
    </a>
  );
}
