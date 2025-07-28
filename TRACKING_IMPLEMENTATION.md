# Analytics Tracking Implementation

This document outlines the comprehensive tracking setup implemented for Google Analytics and Facebook Meta Pixel across the PastForward website.

## Overview

The tracking system captures user interactions across the entire website to provide insights into user behavior, content engagement, and conversion funnel performance.

## Tracking Infrastructure

### Core Files

- `/lib/tracking.ts` - Main tracking utility with GA4 and Facebook Pixel functions
- `/components/ScrollTracker.tsx` - Monitors scroll depth across pages
- `/components/NewsletterTracker.tsx` - Tracks newsletter signup interactions
- `/components/ArticlePageTracker.tsx` - Tracks article page views

### Global Setup

- Tracking scripts are loaded via `/app/Tracking.tsx`
- ScrollTracker is included in the main layout for site-wide scroll monitoring
- GDPR-compliant consent management via CookieYes

## Tracked Events

### Navigation Events

- **Header navigation clicks** (news, newsletter, crowdfunding)
- **Footer navigation clicks** (home, imprint, privacy policy, terms)
- **Back to news navigation** from article pages
- **Logo clicks** to homepage

### Content Engagement

- **News article clicks** (both preview cards and full articles)
- **External link clicks** (team member portfolios, survey links, social media)
- **Video interactions** (intro video play events)
- **Scroll depth tracking** (25%, 50%, 75%, 90% milestones)

### Lead Generation

- **Newsletter signup attempts** (tracked on form view and submission)
- **Survey link clicks** (community survey participation)
- **Newsletter form views** (intersection observer based)

### Social Media

- **Social media clicks** (LinkedIn, Facebook, Instagram)
- **Social platform identification** and URL tracking

### Article Specific

- **Article page views** (with title and slug identification)
- **Read time estimation** (via scroll depth)
- **Featured article engagement**

## Implementation Details

### Google Analytics 4 Events

```javascript
// Navigation tracking
gtag("event", "navigate", {
  event_category: "navigation",
  event_label: destination,
});

// Content engagement
gtag("event", "select_content", {
  event_category: "content",
  content_type: "news_article",
  content_id: articleSlug,
  event_label: articleTitle,
});

// Lead generation
gtag("event", "sign_up", {
  event_category: "engagement",
  event_label: "newsletter_location",
  method: "email",
});
```

### Facebook Pixel Events

```javascript
// Page views (automatic)
fbq("track", "PageView");

// Content views
fbq("track", "ViewContent", {
  content_name: contentName,
  content_type: contentType,
});

// Lead generation
fbq("track", "Lead", {
  content_name: "newsletter_signup_location",
});
```

### Scroll Depth Tracking

- Throttled scroll event listeners using `requestAnimationFrame`
- Milestone tracking at 25%, 50%, 75%, and 90% scroll depth
- Prevents duplicate event firing for the same milestone

## Data Privacy & Compliance

### GDPR Compliance

- Default consent set to 'denied' for all advertising and analytics
- CookieYes integration for consent management
- Users must opt-in for tracking to activate

### Privacy Features

- `ads_data_redaction` enabled
- `url_passthrough` for enhanced privacy
- No personal data collection without consent

## Tracking Locations

### Homepage (`/`)

- Newsletter signup forms (2 locations)
- News article preview clicks
- Survey button clicks
- Video interactions
- Team member link clicks
- Social media clicks
- Scroll depth tracking

### News Page (`/news`)

- Article clicks from timeline
- External link clicks
- Featured article interactions

### Individual Articles (`/news/[slug]`)

- Article view tracking
- Back navigation clicks
- Scroll depth for read time estimation

### Global (All Pages)

- Navigation clicks
- Footer interactions
- Social media clicks
- Scroll depth milestones

## Event Naming Convention

Events follow a consistent naming pattern:

- **Category**: Primary grouping (navigation, content, engagement, etc.)
- **Action**: Specific action taken (click, view, sign_up, etc.)
- **Label**: Descriptive identifier (page name, content title, etc.)

## Performance Considerations

- Events are throttled to prevent excessive firing
- Intersection Observer API used for efficient form view tracking
- Client-side components used only where necessary
- Tracking functions check for script availability before firing

## Analytics Goals

The tracking setup enables measurement of:

1. **Content Performance** - Which articles and sections drive engagement
2. **User Journey** - How visitors navigate through the site
3. **Conversion Funnel** - Newsletter signup rates and survey participation
4. **Social Media ROI** - Traffic and engagement from social platforms
5. **Content Depth** - Reading patterns via scroll tracking

## Testing & Validation

To verify tracking implementation:

1. Open browser dev tools and check Network tab for GA/FB calls
2. Use Google Analytics DebugView for real-time event monitoring
3. Verify Facebook Pixel events in Events Manager
4. Test across different browsers and devices
5. Confirm GDPR consent flow works correctly

## Future Enhancements

Potential additions:

- A/B testing integration
- Enhanced e-commerce tracking for future donations
- User identification for returning visitors
- Cross-device tracking implementation
- Advanced audience segmentation
