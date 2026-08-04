# nextCitizen — Official Website

The official product website for **nextCitizen**, a [SanAkLabs](https://github.com/sanaklabsinc) product. This site exists to support SEO, Google Search visibility, and Google Play discovery once the product is public.

**Status:** Homepage, Privacy Policy, Disclaimer, Contact, and Download (redirects to Google Play) are real, production content. Features, FAQ, and Blog remain "Coming Soon" route shells, unlinked from navigation and `noindex`ed, pending their own content phases.

## Project Purpose

- Serve as the canonical, indexable web presence for nextCitizen.
- Provide a stable base for SEO (sitemap, robots.txt, canonical URLs, meta descriptions) ahead of a public launch.
- Support Google Play discovery via a dedicated `/download` route.
- Remain lightweight, accessible, and framework-free on the styling side so it stays fast and easy to maintain long-term.

## Technology Stack

| Concern       | Choice                                   |
| ------------- | ----------------------------------------- |
| Framework     | [Astro](https://astro.build) (static output) |
| Language      | TypeScript, `strict` mode                 |
| Styling       | Plain CSS (custom properties), no CSS framework |
| Client JS     | None by default — added only if a specific interaction requires it |
| Sitemap       | `@astrojs/sitemap`                        |
| Hosting       | GitHub Pages                              |

No React/Vue/Angular, no Tailwind/Bootstrap, no jQuery. This is a deliberate constraint to keep the site's runtime footprint minimal.

## Folder Structure

```
src/
  assets/            Static assets processed by Astro's build pipeline
  components/
    layout/          Header, Footer
    navigation/      NavMenu
    seo/             Seo (meta tags: title, description, canonical, OG, Twitter)
    ui/               Reserved for shared presentational components
  config/
    site.ts           Central site metadata (name, description, URL, base, social)
  content/
    blog/             Blog post content (empty in Phase 1; schema defined, no posts yet)
    config.ts          Content collection schema for the blog
  data/
    routes.ts          Single source of truth for primary/legal nav links
  layouts/
    BaseLayout.astro    Shared page shell: skip link, Header, main, Footer, SEO
  pages/               File-based routes (see Routes below)
  styles/
    global.css          Global stylesheet: CSS variables, reset, a11y helpers
  types/
    seo.ts               Shared SEO prop types
  utils/
    url.ts                canonicalUrl() and withBase() helpers
public/
  icons/               favicon.svg, PWA icon-192/icon-512 (generated from the approved app icon)
  images/              og-default.png (1200×630 Open Graph/Twitter image)
  downloads/           Reserved for future downloadable assets
  robots.txt
  .nojekyll             Prevents GitHub Pages from running Jekyll on the build output
.github/
  workflows/deploy.yml  GitHub Actions workflow: build + deploy to GitHub Pages (not yet triggered — repo has no git history yet)
```

## Routes

All routes use `BaseLayout` and real SEO metadata (title, description, canonical URL). Content status per route:

- `/` — Homepage (complete)
- `/privacy` — Privacy Policy (complete)
- `/disclaimer` — Disclaimer (complete)
- `/contact` — Contact (complete)
- `/download` — Redirects to the Google Play listing (complete)
- `/404` — Not found page
- `/features` — Coming Soon, unlinked from navigation, `noindex`
- `/faq` — Coming Soon, unlinked from navigation, `noindex`
- `/blog` — Coming Soon, unlinked from navigation, `noindex`

## Development Setup

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The dev server prints a local URL (default `http://localhost:4321`).

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Preview

Serve the production build locally before deploying:

```bash
npm run preview
```

## Type Checking

```bash
npm run check
```

Runs `astro check` (TypeScript + Astro template diagnostics) in strict mode.

## Deployment

**Target:** GitHub Pages, deployed from `github.com/sanaklabsinc/nextcitizen-website`.

Phase 1 configures but does **not** trigger deployment (no git history exists yet in this working copy). Once the repository is initialized and pushed:

1. In the repository's **Settings → Pages**, set the source to **GitHub Actions**.
2. Push to `main` — `.github/workflows/deploy.yml` builds the site (`npm ci`, `npm run check`, `npm run build`) and publishes `dist/` via `actions/deploy-pages`.
3. The site becomes available at `https://sanaklabsinc.github.io/nextcitizen-website/`.

### Migrating to the custom domain (nextcitizen.app)

Not performed in Phase 1. When ready:

1. Add a `public/CNAME` file containing exactly `nextcitizen.app`.
2. At the domain registrar, point DNS at GitHub Pages (A records for the apex domain, or a CNAME record for a `www` subdomain), per [GitHub's custom domain documentation](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. In `astro.config.mjs`, change:
   - `site` → `'https://nextcitizen.app'`
   - `base` → `'/'`
4. Enable **Enforce HTTPS** in the repository's Pages settings.

No other source changes should be required: every internal link goes through `withBase()` (see `src/utils/url.ts`), and canonical/OG URLs go through `canonicalUrl()`, both of which read from the same config that step 3 updates.

## Future Roadmap

- Replace remaining "Coming Soon" placeholder content (Features, FAQ, Blog) with real copy per route, then re-add them to primary navigation and remove their `noindex` tag.
- Publish the first blog posts using the `blog` content collection already scaffolded in `src/content/blog/`.
- Add analytics once a provider is chosen (none is configured by design).
- Migrate to the `nextcitizen.app` custom domain (see Deployment above).

## SEO Strategy

- Every route ships with a unique, meaningful `<title>` and meta description via the shared `Seo` component.
- Canonical URLs are generated from a single source of truth (`siteConfig.url` + `base`), avoiding duplicate-content issues across `base`-path changes.
- `@astrojs/sitemap` generates `sitemap-index.xml` automatically at build time (excluding the unfinished, `noindex`ed Features/FAQ/Blog routes); `robots.txt` references it.
- OpenGraph and Twitter Card meta tags are present on every page, pointing at the real `public/images/og-default.png` (1200×630).
- No fake reviews, ratings, or structured data are included anywhere in this project, and none should be added — only accurate, verifiable structured data (e.g. `Organization` / `SoftwareApplication` schema) should be introduced later, once real product details exist.
- Copy is intentionally minimal placeholder text in Phase 1 to avoid keyword-stuffed or low-value content being indexed before real content exists.

## Accessibility Strategy

- Semantic HTML throughout (`header`, `nav`, `main`, `footer`, heading hierarchy starting at `<h1>` per page).
- Visible skip-to-content link at the top of every page (`.skip-link`), targeting a focusable `#main-content`.
- `:focus-visible` outlines are defined globally and never suppressed.
- `prefers-reduced-motion: reduce` is respected globally by collapsing animation/transition durations.
- Color variables implement the approved palette from `docs/BRAND_GUIDELINES.md`, chosen for AA contrast against the page background in both the light and `prefers-color-scheme: dark` palettes.
- Navigation marks the current page with `aria-current="page"` for assistive technology.
- All interactive elements are native HTML elements (`a`, `button`) rather than div/span click handlers, preserving built-in keyboard support.
