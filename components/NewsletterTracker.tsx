"use client";

import { track } from '@/lib/tracking';
import { useEffect } from 'react';

interface NewsletterTrackerProps {
  location: string; // 'header', 'footer', 'main', etc.
}

export default function NewsletterTracker({
  location,
}: NewsletterTrackerProps) {
  useEffect(() => {
    // Track when the newsletter form is loaded/viewed
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Form is in view - track as content view
            track.click(`newsletter_form_viewed_${location}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Look for MailerLite form
    const formContainer = document.querySelector(".ml-embedded");
    if (formContainer) {
      observer.observe(formContainer);
    }

    // Listen for form submission events
    const handleFormSubmission = (event: Event) => {
      const target = event.target as HTMLElement;

      // Check if this is a newsletter form submission
      if (target.closest(".ml-embedded") || target.closest("[data-form]")) {
        track.newsletterSignup(location);
      }
    };

    // Listen for both form submissions and button clicks
    document.addEventListener("submit", handleFormSubmission);
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      // Check if clicked element is a newsletter subscribe button
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

  return null; // This component doesn't render anything
}
