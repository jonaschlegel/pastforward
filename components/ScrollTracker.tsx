"use client";

import { trackGA } from '@/lib/tracking';
import { useEffect } from 'react';

export default function ScrollTracker() {
  useEffect(() => {
    const scrollDepths = [25, 50, 75, 90];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round(
        (scrollPosition / documentHeight) * 100
      );

      scrollDepths.forEach((depth) => {
        if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackGA.scrollDepth(depth);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}
