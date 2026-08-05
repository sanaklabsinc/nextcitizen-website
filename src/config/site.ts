/**
 * Central site configuration.
 *
 * Keep shared product names, metadata, URLs, and social settings in one
 * place so updates automatically apply across the website.
 *
 * Homepage metadata is aligned with the Google Play Store listing.
 * Unfinished routes remain intentionally unlinked and noindexed until
 * real content is published.
 */

export const siteConfig = {
  // ---------------------------------------------------------------------------
  // Branding
  // ---------------------------------------------------------------------------

  name: 'nextCitizen',
  company: 'SanAkLabs',

  tagline: 'Prepare for the U.S. Citizenship Test with Confidence',

  // ---------------------------------------------------------------------------
  // SEO
  // ---------------------------------------------------------------------------

  defaultTitle:
    'US Civics Test Preparation – nextCitizen',

  titleTemplate: '%s | nextCitizen',

  description:
    'Prepare for the USCIS Civics Test and U.S. Naturalization Interview with 128 civics questions, mock tests, flashcards, smart review, favorites, and local answers.',

  // ---------------------------------------------------------------------------
  // Site
  // ---------------------------------------------------------------------------

  url: 'https://sanaklabsinc.github.io',

  base: '/nextcitizen-website',

  // Future custom domain
  futureDomain: 'https://nextcitizen.app',

  locale: 'en-US',

  // ---------------------------------------------------------------------------
  // Social
  // ---------------------------------------------------------------------------

  social: {
    // Leave empty until an official X/Twitter account exists.
    twitter: '',

    // Official Google Play listing.
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.sanaklabs.nextcitizen',
  },

  // ---------------------------------------------------------------------------
  // Social Preview / Open Graph
  // ---------------------------------------------------------------------------

  seo: {
    defaultOgImage: '/images/og-default.png',

    twitterCardType: 'summary_large_image' as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;