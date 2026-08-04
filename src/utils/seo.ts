import { siteConfig } from '@config/site';

/**
 * Resolves a page's `<title>` text from its path and page-specific title.
 * The homepage is a special case (uses siteConfig.defaultTitle verbatim,
 * not the "%s | nextCitizen" template) — extracted out of Seo.astro so a
 * future second title pattern (e.g. article/pillar pages) has a single,
 * typed place to extend rather than growing Seo.astro's own logic inline.
 */
export function resolvePageTitle(path: string, title: string): string {
  return path === '/' ? siteConfig.defaultTitle : siteConfig.titleTemplate.replace('%s', title);
}
