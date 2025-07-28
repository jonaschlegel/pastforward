"use client";

import { track } from '@/lib/tracking';
import Link from 'next/link';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  trackingAction?: string;
}

export function TrackedLink({
  href,
  children,
  className,
  onClick,
  trackingAction,
}: TrackedLinkProps) {
  const handleClick = () => {
    if (trackingAction) {
      track.navigate(trackingAction);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

interface TrackedExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  trackingAction?: string;
  "aria-label"?: string;
  target?: string;
  rel?: string;
}

export function TrackedExternalLink({
  href,
  children,
  className,
  onClick,
  trackingAction,
  "aria-label": ariaLabel,
  target,
  rel,
}: TrackedExternalLinkProps) {
  const handleClick = () => {
    if (trackingAction) {
      track.socialMedia(trackingAction, href);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
