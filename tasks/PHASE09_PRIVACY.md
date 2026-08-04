# Phase 9 — Privacy Policy

## Objective

Replace the placeholder `/privacy` page with a clear, accurate, production-ready privacy policy for the nextCitizen website and Android app.

## Read First

- `docs/ONBOARDING.md`
- `docs/PRODUCT_CONTEXT.md`
- `docs/ENGINEERING_STANDARDS.md`
- `docs/BRAND_GUIDELINES.md`
- `docs/CONTENT_STRATEGY.md`

Treat the repository and existing app/site copy as the source of truth.

## Scope

Implement only:

- Review the repository for verified privacy facts.
- Review existing privacy wording already used by nextCitizen.
- Replace the placeholder `/privacy` page.
- Reuse the existing `BaseLayout`, `PageHero`, `Section`, `Container`, and typography system.
- Use plain English suitable for non-native English readers.
- Clearly distinguish website behavior from Android app behavior where needed.
- Include a visible “Last updated” date using the implementation date.
- Preserve the existing footer link and route.

## Required Topics

Cover only when factually supported:

- What information the website collects
- What information the Android app collects
- Information stored locally on the device
- Favorites, progress, weak questions, review schedule, local answers, and mock-test history
- Microphone or speech-recognition use
- Third-party services
- Google Play
- External links
- Children’s privacy
- Data security
- Policy changes
- Contact method

## Accuracy Rules

Do not invent:

- Analytics usage
- Cookies
- Advertising
- Account creation
- Cloud storage
- User tracking
- Data sale
- Data sharing
- Encryption guarantees
- Retention periods
- Legal compliance claims
- Email address
- Mailing address
- Third-party SDK behavior

If a required fact cannot be verified, stop and report the missing fact instead of guessing.

## Content Requirements

- State clearly that nextCitizen is an independent educational product.
- Do not imply affiliation with USCIS or any government agency.
- Do not claim that no data is collected unless the repository supports that claim.
- Avoid broad promises such as “completely secure” or “100% private.”
- Keep paragraphs short and scannable.
- Use descriptive section headings.
- Do not include legal jargon unless necessary.

## Out of Scope

Do not modify:

- Homepage
- Disclaimer page
- Contact page
- Footer structure
- Analytics
- App source code
- Structured data
- Other routes

## Validation

Run:

```bash
npm run check
npm run build
```

Inspect the built privacy page and verify:

- Exactly one `h1`
- Correct heading order
- No placeholder copy
- No unsupported claims
- Working base-aware links
- Mobile-readable layout
- Existing footer link still works

## Report

Maximum 15 bullets:

- Summary
- Files changed
- Verified privacy facts used
- Facts omitted because unverified
- Validation
- Remaining risks
- Recommendation
