"use client";

import { track } from '@/lib/tracking';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface TrackedBackLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TrackedBackLink({
  href,
  children,
  className,
}: TrackedBackLinkProps) {
  const handleClick = () => {
    track.navigate("news_back");
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

interface BackToNewsLinkProps {
  className?: string;
  showIcon?: boolean;
}

export function BackToNewsLink({
  className,
  showIcon = true,
}: BackToNewsLinkProps) {
  const handleClick = () => {
    track.navigate("news_back");
  };

  return (
    <Link href="/news" className={className} onClick={handleClick}>
      {showIcon && <ArrowLeft size={16} className="mr-2" />}
      Back to News
    </Link>
  );
}

export function BackToAllNewsLink({ className }: { className?: string }) {
  const handleClick = () => {
    track.navigate("news_back");
  };

  return (
    <Link href="/news" className={className} onClick={handleClick}>
      <ArrowLeft size={16} className="mr-2" />
      Back to all news
    </Link>
  );
}
