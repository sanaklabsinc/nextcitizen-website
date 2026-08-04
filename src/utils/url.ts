import { siteConfig } from '@config/site';

/**
 * Builds an absolute canonical URL from a site-relative path, honoring the
 * configured `base` so links stay correct whether we're on
 * sanaklabsinc.github.io/nextcitizen-website or a future custom domain.
 */
export function canonicalUrl(path: string): string {
  const base = siteConfig.base.replace(/\/$/, '');
  const cleanPath = path === '/' ? '' : path.replace(/^\//, '');
  const joined = [base, cleanPath].filter(Boolean).join('/');
  return `${siteConfig.url}/${joined}`.replace(/([^:])\/\/+/g, '$1/');
}

/**
 * Prefixes an internal, site-relative path (e.g. "/features") with Astro's
 * configured BASE_URL so links work both in dev (base "/") and when built
 * for GitHub Pages (base "/nextcitizen-website"). Use this for every
 * internal <a href> in the project instead of hard-coding the path.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path === '/') return base || '/';
  return `${base}${path}`;
}

/**
 * Resolves the site-relative route (e.g. "/features", "/") for the page
 * currently being rendered, from Astro's own request URL — the inverse of
 * withBase(). Strips the configured base path the same way NavMenu.astro
 * already did inline for its own aria-current logic; extracted here (Phase
 * 3.1) so BaseLayout can derive a page's path the same way instead of
 * requiring every page to pass its own path as a prop, which was a second,
 * hand-typed source of truth for the same string the route file system
 * already determines.
 */
export function resolveCurrentPath(url: URL): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rawPath = url.pathname.replace(/\/+$/, '') || '/';
  return base && rawPath.startsWith(base) ? rawPath.slice(base.length) || '/' : rawPath;
}
