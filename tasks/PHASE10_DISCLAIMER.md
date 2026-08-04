# Phase 10 — Disclaimer

## Objective

Replace the placeholder `/disclaimer` page with a concise, accurate, production-ready disclaimer for the nextCitizen website and Android application.

The disclaimer should build user trust while clearly defining the product's purpose and limitations. It must be written in plain English and avoid unnecessary legal jargon.

---

## Read First

Before implementing, read:

- docs/ONBOARDING.md
- docs/PRODUCT_CONTEXT.md
- docs/ENGINEERING_STANDARDS.md
- docs/BRAND_GUIDELINES.md
- docs/CONTENT_STRATEGY.md

Treat these documents and the current repository as the source of truth.

---

## Scope

Implement only:

- Replace the existing placeholder `/disclaimer` page.
- Reuse the existing `BaseLayout`, `PageHero`, `Section`, `Container`, and typography system.
- Add a visible **Last Updated** date.
- Preserve the existing footer link and route.
- Maintain accessibility and responsive behavior.

Do not redesign the page.

---

## Required Sections

Include concise sections covering:

1. Educational Purpose
2. No Government Affiliation
3. No Legal Advice
4. Accuracy of Information
5. Official USCIS Information
6. Changes to Immigration Policies
7. External Links
8. Copyright & Intellectual Property
9. Contact Information

---

## Product Facts

Use only verified facts.

Current verified information includes:

- nextCitizen is an independent educational application.
- It is **not affiliated with, endorsed by, authorized by, or sponsored by USCIS or any U.S. government agency.**
- It helps users prepare for the U.S. Citizenship Test.
- It does **not** guarantee passing the civics test or naturalization interview.
- Official USCIS guidance always takes precedence.
- Interview Mode remains **Coming Soon** and should not be described as currently available.

---

## Contact Information

Use the verified public contact email:

**sanaklabs@gmail.com**

Do not invent:

- phone numbers
- office addresses
- support hours
- additional email addresses
- social media accounts

---

## Accuracy Rules

Do NOT invent or imply:

- government approval
- legal certification
- guaranteed accuracy
- guaranteed updates
- legal review
- official partnership
- trademark ownership beyond verified facts

Keep wording factual and conservative.

---

## Style

- Plain English
- Short paragraphs
- Friendly but professional
- Calm and trustworthy
- Easy for non-native English readers

Avoid intimidating legal language.

---

## Out of Scope

Do not modify:

- Homepage
- Privacy Policy
- Contact page
- Footer structure
- App source code
- Analytics
- Structured data
- Other routes

---

## Validation

Run:

```bash
npm run check
npm run build
```

Verify:

- Exactly one H1
- Correct heading hierarchy
- No placeholder text
- Working footer link
- Base-aware URLs
- Mobile readability
- No unsupported claims

---

## Report

Maximum 12 bullets:

- Summary
- Files changed
- Disclaimer sections implemented
- Verified facts used
- Validation results
- Remaining risks
- Recommendation