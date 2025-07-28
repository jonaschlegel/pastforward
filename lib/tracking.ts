// Tracking utility for Google Analytics and Facebook Pixel events

// Declare global types for tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

// Google Analytics Events
export const trackGA = {
  // Page view tracking (already handled by GA automatically)
  pageView: (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-SCVEJHGNJH", {
        page_location: url,
      });
    }
  },

  // Click events
  click: (elementName: string, url?: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "engagement",
        event_label: elementName,
        link_url: url,
      });
    }
  },

  // Navigation clicks
  navigation: (destination: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "navigate", {
        event_category: "navigation",
        event_label: destination,
      });
    }
  },

  // External link clicks
  externalLink: (url: string, linkText: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "external_link",
        event_label: `${linkText} - ${url}`,
        link_url: url,
      });
    }
  },

  // Newsletter signup
  newsletterSignup: (location: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "sign_up", {
        event_category: "engagement",
        event_label: `newsletter_${location}`,
        method: "email",
      });
    }
  },

  // Survey interaction
  surveyClick: () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "survey_click", {
        event_category: "engagement",
        event_label: "community_survey",
      });
    }
  },

  // Video interaction
  videoPlay: () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "video_play", {
        event_category: "engagement",
        event_label: "intro_video",
      });
    }
  },

  // News article clicks
  newsArticle: (articleTitle: string, articleSlug: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "select_content", {
        event_category: "content",
        content_type: "news_article",
        content_id: articleSlug,
        event_label: articleTitle,
      });
    }
  },

  // Social media clicks
  socialMedia: (platform: string, url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "social_media",
        event_label: platform,
        link_url: url,
      });
    }
  },

  // Scroll depth tracking
  scrollDepth: (percentage: number) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "scroll", {
        event_category: "engagement",
        event_label: `${percentage}%`,
        value: percentage,
      });
    }
  },
};

// Facebook Pixel Events
export const trackFB = {
  // Page view (already handled automatically)
  pageView: () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  },

  // View content
  viewContent: (contentName: string, contentType: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: contentName,
        content_type: contentType,
      });
    }
  },

  // Lead generation (newsletter signup)
  lead: (location: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: `newsletter_signup_${location}`,
      });
    }
  },

  // Contact
  contact: () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }
  },

  // Complete registration (survey completion)
  completeRegistration: () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "CompleteRegistration", {
        content_name: "community_survey",
      });
    }
  },

  // Custom events
  customEvent: (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", eventName, parameters);
    }
  },
};

// Combined tracking functions for common events
export const track = {
  // Navigation
  navigate: (destination: string) => {
    trackGA.navigation(destination);
    trackFB.customEvent("Navigation", { destination });
  },

  // External links
  externalLink: (url: string, linkText: string) => {
    trackGA.externalLink(url, linkText);
    trackFB.customEvent("ExternalLink", { url, linkText });
  },

  // Newsletter signup
  newsletterSignup: (location: string) => {
    trackGA.newsletterSignup(location);
    trackFB.lead(location);
  },

  // Survey interaction
  surveyClick: () => {
    trackGA.surveyClick();
    trackFB.customEvent("SurveyClick");
  },

  // Video play
  videoPlay: () => {
    trackGA.videoPlay();
    trackFB.viewContent("intro_video", "video");
  },

  // News article view
  newsArticle: (articleTitle: string, articleSlug: string) => {
    trackGA.newsArticle(articleTitle, articleSlug);
    trackFB.viewContent(articleTitle, "news_article");
  },

  // Social media clicks
  socialMedia: (platform: string, url: string) => {
    trackGA.socialMedia(platform, url);
    trackFB.customEvent("SocialMediaClick", { platform, url });
  },

  // Generic click tracking
  click: (elementName: string, url?: string) => {
    trackGA.click(elementName, url);
    trackFB.customEvent("Click", { elementName, url });
  },
};
