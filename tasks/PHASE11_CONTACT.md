# Phase 11 — Contact

## Objective

Replace the placeholder `/contact` page with a simple, professional, production-ready contact page for the nextCitizen website.

The page should help users reach SanAkLabs while reinforcing trust and clearly directing users to the correct support channel.

This is a static page.

Do not create contact forms or backend functionality.

---

## Read First

Read:

- docs/ONBOARDING.md
- docs/PRODUCT_CONTEXT.md
- docs/ENGINEERING_STANDARDS.md
- docs/BRAND_GUIDELINES.md
- docs/CONTENT_STRATEGY.md

Treat these documents and the repository as the source of truth.

---

## Scope

Implement only:

- Replace the placeholder `/contact` page.
- Reuse the existing:
  - BaseLayout
  - PageHero
  - Section
  - Container
  - ContentCard
  - Button
  - Icon (where appropriate)
- Preserve the existing route.
- Preserve footer navigation.
- Maintain accessibility and responsive behavior.

Do not redesign the site.

---

# Contact Information

Use the verified public email:

**sanaklabs@gmail.com**

Do NOT invent:

- additional email addresses
- phone numbers
- mailing address
- office location
- support hours
- social media accounts
- Discord
- Slack
- WhatsApp
- contact forms
- backend APIs

---

# Page Structure

Organize the page into four clear support cards.

---

## 1. General Support

Use:

**sanaklabs@gmail.com**

Suitable for:

- General questions
- Website feedback
- nextCitizen questions
- Product suggestions

---

## 2. Report a Problem

Explain what helps diagnose issues.

Recommend users include:

- Android version
- Device model
- App version
- Steps to reproduce
- Screenshot (if appropriate)

Clearly ask users NOT to send:

- passwords
- immigration documents
- passports
- Social Security numbers
- financial information
- other sensitive personal information

---

## 3. Feature Requests

Invite users to submit ideas for improving nextCitizen.

Examples:

- Better study tools
- New practice features
- Missing civics questions
- UI improvements
- Accessibility improvements

Keep wording encouraging and collaborative.

---

## 4. Official Immigration Questions

Clearly explain that:

SanAkLabs cannot provide immigration advice.

For official immigration information, forms, eligibility, or legal guidance, users should visit:

https://www.uscis.gov/

This should reinforce that:

- nextCitizen is an independent educational product.
- USCIS is the authoritative source.

---

# Google Play

Provide a link to the verified nextCitizen Google Play listing.

Reuse the existing project configuration.

Do NOT duplicate the Play Store URL if it already exists centrally.

---

# Design

Reuse existing design system.

Prefer:

- one introductory section
- four ContentCards
- clean spacing
- meaningful icons
- consistent typography

Do not create new reusable components.

---

# Accessibility

Maintain:

- exactly one H1
- proper heading hierarchy
- semantic landmarks
- meaningful link text
- visible keyboard focus
- responsive layout
- decorative icons aria-hidden

---

# SEO

Naturally reinforce:

- nextCitizen
- U.S. Citizenship Test
- Google Play
- SanAkLabs

Do not keyword stuff.

---

# Out of Scope

Do not modify:

- Homepage
- Privacy Policy
- Disclaimer
- Footer layout
- App source code
- Analytics
- Structured data
- Other routes

---

# Validation

Run:

```bash
npm run check
npm run build
```

Verify:

- Exactly one H1
- Correct heading hierarchy
- Working mailto link
- Working Google Play link
- Base-aware URLs
- Mobile readability
- No placeholder content
- Footer navigation still works

---

# Report

Maximum 12 bullets.

Include only:

- Summary
- Files changed
- Contact channels implemented
- Validation
- Remaining risks
- Recommendation