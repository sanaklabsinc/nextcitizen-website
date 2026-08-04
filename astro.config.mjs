import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// Deployment configuration
// ---------------------------------------------------------------------------
// Phase 1 target: GitHub Pages "project site" for github.com/sanaklabsinc/nextcitizen-website
//   -> served at https://sanaklabsinc.github.io/nextcitizen-website/
//
// Future migration to the custom domain (nextcitizen.app) — NOT done in Phase 1:
//   1. Add a `public/CNAME` file containing exactly: nextcitizen.app
//   2. Point DNS at the registrar to GitHub Pages (A records for apex, or a
//      CNAME record for a `www` subdomain) per GitHub's custom domain docs.
//   3. Change `site` below to 'https://nextcitizen.app'
//   4. Change `base` below to '/' (a custom domain is served from the root,
//      no repository sub-path needed).
//   5. Enable "Enforce HTTPS" in the repository's GitHub Pages settings.
// No other source code changes should be required — every internal link and
// asset path in this project is generated through Astro's `base`-aware
// helpers (e.g. `Astro.url`, relative imports) rather than hard-coded paths.
// ---------------------------------------------------------------------------

const SITE_URL = 'https://sanaklabsinc.github.io';
const BASE_PATH = '/nextcitizen-website';

// Phase 12A: Features, FAQ, and Blog are noindex (see their page frontmatter
// and routes.ts) while unfinished — excluded here too so the sitemap itself
// doesn't list pages search engines are told not to index. Keep this list in
// sync with the `noindex` pages in src/pages/.
const UNFINISHED_ROUTES = ['/features/', '/faq/', '/blog/'];

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !UNFINISHED_ROUTES.some((route) => page.endsWith(route)),
    }),
  ],
});
