/** Shared SEO metadata contract used by BaseLayout and page frontmatter. */
export interface SeoProps {
  /** Page title. Passed through `siteConfig.titleTemplate`. */
  title: string;
  /** 1–2 sentence meta description (~150–160 chars). */
  description: string;
  /**
   * Path only (e.g. "/features"), not a full URL. BaseLayout combines this
   * with `siteConfig.url` + `siteConfig.base` to build the canonical URL.
   */
  path: string;
  /** Set true for pages that should not be indexed (none in Phase 1). */
  noindex?: boolean;
  /** Optional OpenGraph image path override, relative to `public/`. */
  ogImage?: string;
}
