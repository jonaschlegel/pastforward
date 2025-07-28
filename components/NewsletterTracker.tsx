"use client";

import { track } from '@/lib/tracking';
import { useEffect } from 'react';

interface NewsletterTrackerProps {
  location: string;
}

export default function NewsletterTracker({
  location,
}: NewsletterTrackerProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            track.click(`newsletter_form_viewed_${location}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const formContainer = document.querySelector(".ml-embedded");
    if (formContainer) {
      observer.observe(formContainer);
    }

    const handleFormSubmission = (event: Event) => {
      const target = event.target as HTMLElement;

      if (target.closest(".ml-embedded") || target.closest("[data-form]")) {
        track.newsletterSignup(location);
      }
    };

    document.addEventListener("submit", handleFormSubmission);
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      if (
        target.closest(".ml-embedded button") ||
        target.closest("[data-form] button") ||
        (target.tagName === "BUTTON" &&
          target.textContent?.toLowerCase().includes("subscribe"))
      ) {
        track.newsletterSignup(location);
      }
    });

    return () => {
      observer.disconnect();
      document.removeEventListener("submit", handleFormSubmission);
    };
  }, [location]);

  return null;
}
