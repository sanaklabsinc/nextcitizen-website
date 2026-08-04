# Phase 12A — Resolve Launch Blockers

## Objective

Resolve the final verified blockers identified during the Production Release Candidate review.

Follow:

- docs/ONBOARDING.md
- docs/PRODUCT_CONTEXT.md
- docs/ENGINEERING_STANDARDS.md

## Required Changes

### 1. Download behavior

Use the verified Google Play URL from shared site configuration.

Make every primary download action consistent:

- Header Download App button
- Homepage Download CTA
- `/download`

The `/download` route should redirect users to the verified Google Play listing or provide an immediate accessible fallback link if a static redirect is not appropriate for the current GitHub Pages architecture.

Do not duplicate the raw Google Play URL.

### 2. Unfinished routes

Keep these route files in the repository:

- `/features`
- `/faq`
- `/blog`

But until they contain meaningful content:

- remove them from primary header navigation;
- remove any public CTA that leads to them;
- add `noindex` metadata to the unfinished pages if they remain publicly reachable;
- do not delete the routes.

The homepage FAQ remains available and sufficient for Version 1.

### 3. Task-file cleanup

Delete the obsolete overlapping file:

`tasks/PHASE12_LAUNCH.md`

Keep:

`tasks/PHASE12_RELEASE_CANDIDATE.md`

Do not delete release reports or active documentation.

### 4. Open Graph image

Do not fabricate an image.

Verify the exact expected asset path and required dimensions for:

`public/images/og-default.png`

If no approved asset exists, leave the code unchanged and report this as the only remaining manual launch dependency.

## Constraints

- No redesign
- No new homepage sections
- No copy rewrite
- No new dependencies
- No analytics
- No blog implementation
- Keep diffs minimal

## Validation

Run:

npm run check
npm run build

Inspect built output and verify:

- all download actions use the shared Google Play configuration;
- unfinished routes are absent from primary navigation;
- unfinished routes are noindex;
- no links from the homepage lead to placeholder pages;
- internal URLs remain base-aware;
- exactly one active Phase 12 task file remains;
- no new errors or warnings.

## Report

Maximum 12 bullets:

- Summary
- Files changed
- Download behavior
- Navigation changes
- Noindex verification
- Task cleanup
- Validation
- Remaining launch dependency
- Release recommendation