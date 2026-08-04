# Phase 12B — Brand Integration

## Objective

Complete the approved nextCitizen branding across the production website using the real nextCitizen app icon supplied by the product owner.

This is a small launch-completion phase. Do not redesign the website or alter approved copy.

## Read First

- `docs/ONBOARDING.md`
- `docs/PRODUCT_CONTEXT.md`
- `docs/ENGINEERING_STANDARDS.md`
- `docs/BRAND_GUIDELINES.md`
- `tasks/PHASE12_RELEASE_CANDIDATE.md`
- `tasks/PHASE12A_LAUNCH_BLOCKERS.md`

Treat the current repository as the approved production baseline.

## Approved Source Asset

Use only the product-owner-approved nextCitizen app icon.

Before implementation, confirm that it has been copied to:

`src/assets/brand/nextcitizen-app-icon.png`

If it is missing, stop and report the missing asset. Do not fabricate, redraw, recolor, or replace the logo.

## Scope

Implement only:

1. Header brand integration
2. Footer brand integration
3. Browser and device icons
4. Open Graph social image
5. Manifest verification, only if a manifest already exists
6. Production validation

## Header

Update the existing header brand link to show:

- the approved nextCitizen icon;
- the existing visible `nextCitizen` product name.

Requirements:

- Preserve the homepage link.
- Keep the icon approximately 36–40 px.
- Preserve the current header height and navigation behavior.
- Retain accessible text; do not rely on text embedded in the icon.
- Set explicit image dimensions to avoid layout shift.
- Do not add “by SanAkLabs” unless it already exists in the approved design.

## Footer

Add a small, restrained nextCitizen brand treatment only if it fits without materially changing the footer structure.

Preferred treatment:

- small approved icon;
- `nextCitizen` as real text;
- existing SanAkLabs copyright and legal links unchanged.

If this would clutter or disturb the approved layout, keep the footer text-only and report that decision.

## Browser and Device Icons

Generate or configure from the approved source image:

- `public/favicon.ico`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png` at 180×180
- `public/icons/icon-192.png`
- `public/icons/icon-512.png`

Requirements:

- Preserve aspect ratio.
- Do not stretch or recolor.
- Use high-quality resizing.
- Keep file sizes reasonable.
- Ensure favicon and touch-icon links are present through the existing layout/SEO architecture.

If reliable image tooling is unavailable, do not create poor substitutes. Report exactly which assets remain manual.

## Open Graph Image

Create:

`public/images/og-default.png`

Required size:

`1200 × 630 px`

Use:

- approved nextCitizen icon;
- approved brand palette from the repository;
- product name: `nextCitizen`;
- headline: `Prepare for the U.S. Citizenship Test`;
- restrained professional layout;
- adequate safe margins.

Optional supporting line:

`Study official civics questions, practice with mock tests, and review local answers.`

Do not add ratings, download counts, testimonials, “official app” wording, government seals, guaranteed-success claims, unsupported features, extra logos, or fake store badges.

If a professional-quality image cannot be produced, stop and report the manual asset requirement instead of creating a weak placeholder.

## Manifest

If a web manifest already exists, verify:

- product name;
- icon paths and sizes;
- approved branding;
- existing start URL and scope behavior.

Do not add a service worker or create PWA architecture.

If no manifest exists, do not add one solely for this phase unless existing project documentation requires it.

## Out of Scope

Do not:

- redesign the header or footer;
- alter homepage copy;
- add navigation items;
- modify Privacy, Disclaimer, or Contact content;
- add analytics or a service worker;
- add a JavaScript framework;
- change Google Play routing;
- create marketing sections;
- redraw the approved logo.

## Validation

Run:

```bash
npm run check
npm run build
```

Inspect generated output and verify:

- Header icon and text render correctly on desktop and mobile.
- Footer remains readable and uncluttered.
- Favicon and Apple touch icon links resolve.
- Open Graph and Twitter image URLs resolve to the real asset.
- `og-default.png` is exactly 1200 × 630.
- All referenced icon files exist.
- No broken assets or duplicate accessible product names.
- Explicit image dimensions prevent layout shift.
- No new executable JavaScript.
- Existing metadata, canonicals, sitemap, and structured data remain valid.

## Report

Maximum 12 bullets:

- Summary
- Files created
- Files modified
- Header result
- Footer decision
- Icons generated
- Open Graph image result
- Manifest result
- Validation
- Remaining manual work
- Final release recommendation
