# nextCitizen Brand Guidelines

**Company:** SanAkLabs
**Product:** nextCitizen
**Document status:** Single source of truth for all future UI implementation
**Applies to:** nextcitizen-website (and, where applicable, the nextCitizen Android app)

---

# Brand Overview

nextCitizen exists to help people prepare for the USCIS Civics Test and the U.S. Citizenship Interview with confidence. The website is not a marketing gimmick — it is a long-term, production-grade, SEO-first product website whose job is to earn trust quickly and guide qualified users to download the Android app on Google Play.

**Primary audience:**

- People preparing for the USCIS Civics Test
- People preparing for the U.S. Citizenship Interview
- Immigrants whose first language may not be English
- Family members helping applicants study
- Citizenship teachers
- Libraries
- Community organizations

Every design and content decision should be measured against one question: *does this reduce stress and build the user's confidence that they can trust and succeed with this product?*

---

# Brand Personality

The brand communicates:

- **Trust** — the site should feel credible enough to recommend to a nervous applicant.
- **Confidence** — calm authority, never uncertainty or hype.
- **Professionalism** — polish without corporate coldness.
- **Simplicity** — nothing decorative that doesn't serve understanding.
- **Encouragement** — supportive, never condescending.
- **Calmness** — a stressful life event deserves a calm interface.
- **Inclusiveness** — welcoming to non-native English speakers and all backgrounds.

**Brand metaphor:** nextCitizen should feel like *a knowledgeable coach helping users succeed* — not *a flashy marketing website*. When in doubt, design and write for the coach, not the salesperson.

---

# Brand Positioning

nextCitizen is **not** simply another civics quiz app.

**Positioning statement:**
> "Your Smart Companion for U.S. Citizenship Success."

Positioning emphasizes:

- Smart preparation
- Confidence
- Guided learning
- Efficient study
- Long-term retention

All copy, imagery, and UI decisions should reinforce this positioning rather than competing on features or gimmicks.

---

# Color Palette

The palette is deliberately restrained: one dominant trust color, one disciplined accent for urgency, one accent for achievement, and a small set of neutrals. Avoid introducing new colors outside this table without a documented reason.

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| Primary | Navy Blue | `#1B365D` | Primary buttons, headers, links, primary brand moments. Conveys trust, government, professionalism. |
| Secondary | American Red | `#C0392B` | Sparingly — important actions, highlights, notifications only. Never as a large background. |
| Accent | Gold | `#D4A017` | Achievements, premium moments, success milestones. |
| Success | Green | `#2E7D32` | Confirmations, correct answers, positive system feedback. |
| Background | Off-white | `#F8FAFC` | Page background. |
| Card | White | `#FFFFFF` | Card and surface background. |
| Primary Text | Charcoal | `#1F2937` | Body copy, headings. |
| Secondary Text | Gray | `#6B7280` | Captions, helper text, metadata. |

**Color rules:**

- Navy is the workhorse color. When unsure which color to use, use Navy.
- Red is reserved for genuinely important moments (errors, urgent CTAs, notifications) — overuse destroys its meaning and reads as alarming to an anxious audience.
- Gold marks achievement/success states, not routine UI chrome.
- Never pair Red and Gold directly against each other; both are accents and compete for attention.
- All text/background combinations must meet WCAG AA contrast (4.5:1 for body text, 3:1 for large text) — see [Accessibility](#accessibility).

---

# Typography

**Primary font:** Inter
**Fallback:** `system-ui`

Typography prioritizes readability over decoration, because a meaningful share of users are non-native English speakers reading dense, unfamiliar civic vocabulary.

**Guidance:**

- Prefer plain, direct sentence case over stylized casing (no all-caps body copy).
- Keep line length comfortable (roughly 60–75 characters per line) for long-form study content.
- Maintain generous line height for body copy (targeting ~1.5–1.6) to aid reading comprehension for ESL users.
- Use a clear, limited type scale (see below) rather than ad hoc font sizes.
- Never rely on font size or color alone to convey meaning (e.g., "red text = wrong answer") — pair with an icon or text label for accessibility.

**Suggested type scale** (for future implementation, consistent with the site's existing CSS custom properties):

| Token | Approx. size | Use |
| --- | --- | --- |
| `sm` | 0.875rem | Captions, helper text |
| `base` | 1rem | Body copy |
| `md` | 1.125rem | Lead paragraphs, subheadings |
| `lg` | 1.375rem | Section subheads |
| `xl` | 1.75rem | Section headings |
| `2xl` | 2.25rem | Page headings |
| `3xl` | 3rem | Hero headline |

---

# Spacing System

Spacing should feel generous and calm — cramped layouts increase perceived stress. Use a single consistent scale rather than arbitrary pixel values.

| Token | Approx. size | Typical use |
| --- | --- | --- |
| `3xs` | 0.25rem | Icon-to-label gaps |
| `2xs` | 0.5rem | Tight inline spacing |
| `xs` | 0.75rem | Compact padding |
| `sm` | 1rem | Default component padding |
| `md` | 1.5rem | Card padding, form field spacing |
| `lg` | 2rem | Section-internal spacing |
| `xl` | 3rem | Space between distinct sections |
| `2xl` | 4.5rem | Hero padding, major section breaks |
| `3xl` | 6rem | Top-level page rhythm on desktop |

**Rule of thumb:** when a layout feels "tight," move to the next step up in the scale rather than inventing a custom value.

---

# Buttons

**Primary Button**

- Filled Navy (`#1B365D`) background
- White text
- 12px corner radius
- Hover: subtle elevation only (small shadow lift) — no color-shifting animation, no bounce

**Secondary Button**

- White background
- Blue (Navy) border
- Blue (Navy) text
- Same 12px radius as the primary button for visual consistency

**General button rules:**

- Only one primary button per view/section — a page with three competing "primary" actions undermines trust.
- Never use Red as a default button fill; reserve Red for destructive or urgent-only actions.
- Buttons must have a visible, non-color-only focus state (see [Accessibility](#accessibility)).
- Minimum tap target of 44×44px for mobile.

---

# Cards

- 16px corner radius
- Very light shadow (barely-there elevation, not a heavy drop shadow)
- Generous internal padding — spacing should never feel cramped
- White (`#FFFFFF`) surface on the `#F8FAFC` page background, so cards read as distinct, calm surfaces
- Avoid stacking more than one shadow/border style on the same card

---

# Icons

**Use:**

- Simple outline icons
- Modern, professional icon sets (consistent stroke width across the whole site)

**Avoid:**

- Cartoons
- Emoji as functional UI elements
- Illustrative/decorative icon styles that clash with the outline system

Icons should clarify meaning, not decorate. Every icon used as a control (not purely decorative) needs an accessible label — see [Accessibility](#accessibility).

---

# Illustrations

**Style:** minimal, modern, professional.

**Appropriate subjects:**

- People studying
- Citizenship-related imagery (documents, flags, interviews) handled respectfully
- Mobile phones / app usage
- Learning moments
- American flag accents (used tastefully, not as an overwhelming motif)

**Avoid:**

- Clipart
- Busy, cluttered graphics
- Anything that reads as a stock "marketing template" illustration

---

# Photography

Photography should be:

- Professional
- Realistic (not overly staged or artificial)
- Inclusive — representative of the diversity of real applicants
- Friendly and approachable
- Natural lighting and settings over studio artificiality

Avoid photography that feels like generic corporate stock imagery disconnected from the citizenship-preparation context.

---

# Writing Style

**Use:**

- Short paragraphs
- Simple English
- Friendly tone
- Encouraging language

**Avoid:**

- Marketing hype
- Exaggeration
- Technical jargon

Because a meaningful portion of the audience is studying English *and* civics simultaneously, clarity is a trust signal. Every sentence should be understandable on a single read.

---

# Tone of Voice

**Preferred phrasing:**

- "Prepare with confidence."
- "Study smarter."
- "Build confidence before your interview."

**Avoid:**

- "The BEST app!"
- "Guaranteed success!"
- "Number one app!"

**Voice principle:** speak like a knowledgeable, patient coach — confident about the *method*, never boastful about the *brand*. Never make guarantees about test outcomes (this is also an accuracy/trust issue, not just a tone issue).

---

# Accessibility

The site follows WCAG AA principles throughout. Every new component or page must be checked against the following before shipping:

- **Keyboard navigation** — every interactive element must be reachable and operable via keyboard alone, in a logical order.
- **Visible focus** — focus states must be clearly visible (not suppressed) and must not rely on color alone.
- **Semantic HTML** — use native elements (`button`, `a`, `nav`, `header`, `main`, `footer`, form controls) instead of generic `div`/`span` with click handlers.
- **Proper headings** — one `<h1>` per page, with a logical, non-skipping heading hierarchy.
- **Color contrast** — minimum 4.5:1 for body text, 3:1 for large text, checked against the palette above in both light and dark contexts.
- **Alt text** — every meaningful image needs descriptive alt text; purely decorative images use empty `alt=""`.
- **Reduced motion** — all animation must respect `prefers-reduced-motion` and degrade to no motion.

Accessibility is treated as a first-class requirement, not a post-launch polish item, given the audience includes people newer to English and to U.S. digital services generally.

---

# Responsive Design

- **Mobile-first**, desktop second — most study sessions will happen on a phone.
- **Maximum content width:** 1200px, to keep line lengths and layouts comfortable on large screens.
- Maintain comfortable whitespace at every breakpoint; do not compress spacing just to fit more content above the fold.
- Touch targets, spacing, and type scale should all be re-verified at mobile widths, not just scaled down from desktop.

---

# Performance Principles

The design must support:

- Lighthouse scores of 90+ across Performance, Accessibility, Best Practices, and SEO
- Fast loading on modest mobile connections
- Minimal JavaScript — prefer static, server-rendered HTML and CSS over client-side interactivity
- Lazy-loaded images below the fold
- WebP image format by default, with appropriate fallbacks

Design decisions (illustrations, photography, animation) should always be weighed against their performance cost. A beautiful hero image that slows down a user on a low-end phone in a library works against the brand's own promise of trust and accessibility.

---

# Homepage Design Philosophy

This section documents the *purpose* of each future homepage area. It does not implement or prescribe pixel-level layout — that is a future implementation phase.

- **Navigation** — orient the user immediately: who this is for, and how to get the app. Should stay simple and never overwhelm with menu items.
- **Hero** — state the core promise ("Your Smart Companion for U.S. Citizenship Success") in plain language within seconds, paired with a single clear next step.
- **Why nextCitizen** — establish credibility and differentiate from "just another quiz app" by explaining the guided, confidence-building approach.
- **Features** — translate product capability into user benefit (e.g., "study smarter," "track your progress") rather than a dry feature list.
- **Screenshots** — show the real product experience, reinforcing that this is a real, professional tool (not vaporware).
- **FAQ** — proactively answer the practical and emotional questions applicants have (cost, accuracy, offline use, trustworthiness) to reduce anxiety before they leave the page.
- **Download CTA** — a single, clear, low-friction path to Google Play, repeated at natural decision points rather than aggressively pushed.
- **Footer** — legal, contact, and trust-supporting links (privacy, disclaimer, contact) that reinforce this is a legitimate, accountable product.

---

# Design Do's and Don'ts

**Do:**

- Use whitespace generously.
- Keep one clear primary action per screen.
- Write short, plain-English sentences.
- Use Navy as the default brand color.
- Reserve Red and Gold for their specific, narrow purposes.
- Design mobile-first.
- Test every screen for keyboard access and color contrast.

**Don't:**

- Don't use large red backgrounds or red as a default UI color.
- Don't use cartoon, emoji, or illustrative icon styles.
- Don't use marketing hype language ("best," "guaranteed," "#1").
- Don't add parallax, heavy animation, or flying/bouncing objects.
- Don't stuff keywords or write content that isn't genuinely useful to the reader.
- Don't introduce new colors, fonts, or spacing values outside this document without updating it first.
- Don't sacrifice accessibility or performance for visual flourish.

---

# Future Design Evolution

This document reflects the Phase 1 design language: a clean, minimal, trust-first foundation deliberately free of final marketing copy, imagery, or motion design.

As the product matures, expect this document to evolve to include:

- Finalized illustration and photography asset libraries
- A documented icon set (specific library/version) and usage guide
- Dark mode palette refinement (initial CSS variables already exist in the codebase and should be reconciled with this palette)
- Motion design specification (precise durations/easing for fade/slide/hover states)
- App-store asset guidelines (Google Play feature graphic, screenshots) consistent with this brand
- Localization/typography guidance if the product expands beyond English-language UI

Any future revision to color, type, spacing, or tone should be made as an update to this document first, so it remains the single source of truth for all UI implementation.

---

This document is part of the SanAkLabs Engineering & Design Standards.
