export interface RouteLink {
  label: string;
  path: string;
  /**
   * Marks a route that is surfaced only as a standalone CTA (e.g. Header's
   * persistent "Download App" button), not as a plain link in the regular
   * nav list. Phase 3.1: replaces the previous approach of Header.astro and
   * NavMenu.astro each independently matching the hard-coded string
   * '/download' to find/exclude the same route — two files silently kept in
   * sync only by convention. The distinction now lives once, in the data.
   */
  ctaOnly?: boolean;
}

// Phase 12A: Features, FAQ, and Blog are removed from primary navigation
// while their route files remain unfinished ("Coming Soon") — the pages
// still exist and are reachable by direct URL (see src/pages/), just not
// linked from the header. The homepage's own FAQ section remains the
// sufficient FAQ experience for Version 1. Re-add the entries here once
// each route has real content — this array is the only place that needs
// to change, since NavMenu/Header both read from it.

/** Primary navigation, shared by the header and footer. */
export const primaryRoutes: RouteLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Download', path: '/download', ctaOnly: true },
  { label: 'Contact', path: '/contact' },
];

/** Legal/utility links, footer-only. */
export const legalRoutes: RouteLink[] = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Disclaimer', path: '/disclaimer' },
];
