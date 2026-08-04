# Phase 12 — Production Release Candidate (RC)

## Objective

Prepare Version 1.0 of the nextCitizen website for public release.

This is NOT a feature phase.

This is a production release review.

The objective is to identify and fix only genuine launch blockers while preserving the approved architecture.

Do not redesign completed work.

---

# Read First

Read:

- docs/ONBOARDING.md
- docs/PRODUCT_CONTEXT.md
- docs/ENGINEERING_STANDARDS.md
- docs/BRAND_GUIDELINES.md
- docs/CONTENT_STRATEGY.md

Treat these documents as the source of truth.

---

# Scope

Review the entire production website.

Homepage

Features

FAQ

Privacy

Disclaimer

Contact

Download

404

Header

Footer

Navigation

SEO

Accessibility

Deployment configuration

Fix only verified issues.

Keep diffs minimal.

---

# Production Checklist

## 1. Content

Verify:

- no placeholder text
- no lorem ipsum
- no "Coming Soon" except Interview Mode
- no contradictory wording
- no unsupported product claims
- no fabricated statistics
- no fabricated testimonials
- no fabricated certifications
- no government affiliation
- Interview Mode consistently marked "Coming Soon"
- Local Answers wording consistent

---

## 2. Navigation

Verify:

- Header navigation
- Footer navigation
- Internal links
- Base-aware URLs
- External links
- Google Play link
- Contact email
- Privacy
- Disclaimer
- Contact
- FAQ

No dead links.

---

## 3. SEO

Verify:

- page titles
- meta descriptions
- canonical URLs
- robots.txt
- sitemap.xml
- OpenGraph tags
- Twitter Card tags
- Organization schema
- FAQ schema
- no duplicate metadata

If an approved OpenGraph image does not yet exist,

report it as the only remaining launch dependency.

Do not invent one.

---

## 4. Accessibility

Verify:

- exactly one H1
- heading hierarchy
- landmarks
- keyboard navigation
- visible focus
- semantic HTML
- color contrast
- meaningful links
- decorative icons hidden
- responsive navigation

---

## 5. Performance

Verify:

- no unnecessary JavaScript
- no unnecessary dependencies
- no layout shifts
- optimized assets
- no broken assets
- no duplicate CSS
- no duplicate components

---

## 6. Deployment

Verify:

GitHub Pages configuration

Astro site

Astro base

404

.nojekyll

README deployment steps

No local paths

No secrets

No debug code

---

## 7. Build

Run

npm run check

npm run build

Inspect the generated output.

Do not assume success.

---

# Change Rules

Fix only:

- verified bugs
- broken links
- accessibility defects
- SEO defects
- deployment defects

Do NOT:

- redesign pages
- rewrite copy
- add new sections
- introduce abstractions
- add analytics
- add blog content
- add new dependencies

---

# Final Release Decision

End the report with exactly one of:

✅ READY FOR PRODUCTION

⚠ READY WITH MINOR FOLLOW-UP

❌ NOT READY

Explain why.

---

# Report

Maximum 15 bullets.

Include only:

- Release status
- Files changed
- Validation
- Issues fixed
- Remaining launch dependencies
- Recommendation