/**
 * Central site configuration.
 *
 * Keep hard-coded strings (name, description, social handles, etc.) out of
 * individual pages/components — import from here instead so copy changes
 * happen in one place.
 *
 * NOTE: Visual branding is now finalized in docs/BRAND_GUIDELINES.md.
 * `defaultTitle`/`description` below reflect the real homepage (Phase 2.1)
 * per docs/HOMEPAGE_SPECIFICATION.md's SEO Strategy title/description
 * patterns. Other routes (features, faq, etc.) still show Phase 1
 * "Coming Soon" placeholder content and are unaffected by this change.
 */

export const siteConfig = {
  name: 'nextCitizen',
  company: 'SanAkLabs',
  tagline: 'Prepare for the U.S. Citizenship Test with Confidence',
  defaultTitle: 'nextCitizen — Prepare for the U.S. Citizenship Test | SanAkLabs',
  titleTemplate: '%s | nextCitizen',
  description:
    'nextCitizen helps you prepare for the USCIS Civics Test and citizenship interview with official questions explained in plain English.',

  // Matches astro.config.mjs. Kept here too so components/utilities that
  // need the full canonical URL don't have to import the Astro config.
  url: 'https://sanaklabsinc.github.io',
  base: '/nextcitizen-website',

  // Future custom domain (not active in Phase 1 — see astro.config.mjs).
  futureDomain: 'https://nextcitizen.app',

  locale: 'en-US',

  social: {
    // Placeholders — fill in when accounts exist. Leave empty string to
    // omit a given link/meta tag rather than publishing a dead link.
    twitter: '',
    // Verified in docs/PRODUCT_CONTEXT.md ("Google Play listing"). Filled
    // in for Phase 11 (Contact) so the Contact page's Google Play link has
    // a single source of truth per docs/ENGINEERING_STANDARDS.md §6
    // ("External product URLs, including Google Play, must come from
    // shared configuration"). Homepage/Header/DownloadCta are out of scope
    // for Phase 11 and intentionally left untouched — they still point to
    // the internal /download route.
    googlePlay: 'https://play.google.com/store/apps/details?id=com.sanaklabs.nextcitizen',
  },

  seo: {
    // Used as a fallback OpenGraph/Twitter image until real brand assets
    // are created.
    defaultOgImage: '/images/og-default.png',
    twitterCardType: 'summary_large_image' as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
