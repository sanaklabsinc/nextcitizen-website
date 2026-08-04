# nextCitizen Website Engineering Standards

## 1. Purpose

This document defines the engineering standards for the nextCitizen website.

The site is a production product website owned by SanAkLabs. It must remain maintainable, accessible, fast, SEO-friendly, and suitable for long-term evolution.

The current implementation is the approved baseline. New work must extend the existing architecture rather than replace it without evidence.

## 2. Product and Engineering Principles

Prefer:

- evidence over assumptions
- composition over duplication
- reuse over one-off components
- native HTML over custom JavaScript
- small, reviewable changes over broad rewrites
- deletion over unnecessary abstraction
- production behavior over demo behavior
- plain English over marketing language
- verified product facts over unsupported claims

Do not create abstractions before a real duplication or maintenance problem exists.

## 3. Technology Baseline

The approved stack is:

- Astro
- TypeScript in strict mode
- static site generation
- plain CSS
- minimal JavaScript
- GitHub Pages-compatible deployment

Do not add React, Vue, Angular, Tailwind CSS, Bootstrap, jQuery, a backend, a database, authentication, or a UI framework unless explicitly approved.

Do not add a dependency when the platform or existing code can solve the requirement cleanly.

## 4. Existing Architecture Is the Default

Reuse the existing project structure and shared components.

Approved shared primitives currently include, where present:

- `Button`
- `Badge`
- `ContentCard`
- `Container`
- `Icon`
- `Section`
- `SectionHeader`
- `PageHero`
- `PhoneFrame`
- `StructuredData`
- shared layouts
- shared route metadata
- base-aware URL helpers

Before creating a new component:

1. Search for an existing component that already solves the need.
2. Extend an existing component only when the extension remains generic and coherent.
3. Create a new component only when it has a clear responsibility and current consumer.

Do not create duplicate card, icon, button, container, section, metadata, or structured-data implementations.

## 5. Component Design Rules

Each component must have one clear responsibility.

Prefer:

- small public APIs
- meaningful names
- typed props
- composition through slots
- low coupling
- reusable behavior without product-specific assumptions

Avoid:

- large variant matrices
- boolean prop combinations that are difficult to reason about
- product copy embedded in generic UI primitives
- CSS selectors that depend on unrelated page structure
- speculative props with no current consumer

When a component has non-obvious behavior, include a concise documentation header covering:

- purpose
- props
- dependencies
- reuse expectations
- accessibility considerations

Do not add comments that merely restate the code.

## 6. Page and Route Rules

Use shared layouts and page-level primitives.

Do not duplicate:

- page hero markup
- canonical URL logic
- metadata logic
- route-specific navigation logic
- legal or disclaimer content across pages

Derive the current route from Astro when possible. Avoid manually passing path values that can become inconsistent.

External product URLs, including Google Play, must come from shared configuration rather than repeated raw strings.

All internal links must be base-aware and work under both the GitHub Pages project path and the future custom domain.

## 7. CSS and Design-System Rules

Use existing design tokens for:

- color
- spacing
- typography
- border radius
- shadows
- containers
- focus styles

Do not introduce arbitrary values when an approved token exists.

Do not create a new visual pattern when an existing pattern can be reused.

Avoid:

- gradients unless explicitly approved
- glassmorphism
- excessive shadows
- animation libraries
- decorative effects that reduce trust or readability
- CSS duplication across section components

Keep global CSS consolidated until file size or ownership creates a real maintenance problem. Split styles only with a clear architecture and measurable benefit.

## 8. Accessibility Standards

Target WCAG 2.2 AA-oriented implementation.

Required practices:

- exactly one `h1` per page
- sequential heading hierarchy
- semantic landmarks
- keyboard-accessible controls
- visible focus states
- minimum comfortable touch targets
- adequate color contrast
- descriptive link text
- meaningful image alt text
- decorative icons hidden from assistive technology
- reduced-motion support
- no essential content available only through JavaScript

Prefer native HTML before ARIA.

Examples:

- use `<details>` and `<summary>` before building a custom accordion
- use `<button>` for actions
- use `<a>` for navigation
- use `<figure>` and `<figcaption>` for product screenshots

Do not add ARIA that duplicates or conflicts with native semantics.

## 9. SEO Standards

SEO must support users first.

Required practices:

- unique page titles
- useful meta descriptions
- correct canonical URLs
- base-aware Open Graph and social image URLs
- crawlable server-rendered content
- clear heading hierarchy
- meaningful internal links
- sitemap and robots configuration
- structured data only when the corresponding visible content and facts exist

Do not:

- keyword stuff
- create thin pages only to target a phrase
- hide SEO content
- duplicate visible copy solely for crawlers
- create schema for content not visible on the page
- add fake ratings, reviews, downloads, pricing, or testimonials

Generate structured data from the same source used for visible content whenever practical.

USCIS must be identified as the authoritative source for official immigration and citizenship information.

## 10. Product-Fact Standards

Only state facts that are verified by the current product or approved documentation.

Current product rules include:

- nextCitizen is an independent educational product.
- It is not affiliated with, endorsed by, or sponsored by USCIS or another U.S. government agency.
- Interview Mode must be described as `Coming Soon` until confirmed publicly available.
- Do not invent iOS availability.
- Do not invent pricing, free status, ads, offline support, languages, account requirements, ratings, reviews, users, downloads, certifications, or guarantees.
- Do not imply that using the app guarantees test or interview success.

When uncertain, omit the claim and report the uncertainty.

## 11. Copy and Content Standards

Use:

- plain English
- short paragraphs
- clear labels
- calm, supportive language
- wording suitable for readers whose first language may not be English

Avoid:

- hype
- artificial urgency
- exaggerated superlatives
- legal jargon where simpler wording works
- unsupported comparisons
- aggressive conversion language

The preferred voice is a knowledgeable and encouraging study companion, not a salesperson.

## 12. Performance Standards

Maintain a fast, static-first website.

Required practices:

- no unnecessary client-side JavaScript
- no client-side framework without approval
- no runtime data fetching for static content
- optimized responsive images
- intrinsic image dimensions to prevent layout shift
- lazy loading for below-the-fold images
- minimal dependencies
- no animation libraries
- no third-party scripts without a documented business requirement

New work must not knowingly create CLS, block rendering unnecessarily, or reduce accessibility.

## 13. Validation Requirements

Every implementation phase must run:

```bash
npm run check
npm run build
```

Do not report success unless the commands actually completed successfully.

When relevant, inspect generated output to verify:

- metadata
- canonical URLs
- structured data
- heading hierarchy
- internal links
- external URLs
- base-path handling
- absence of unexpected executable JavaScript

Report new warnings. Do not repeatedly report known unchanged warnings unless their severity changes.

## 14. Scope Discipline

Each phase must implement only the approved scope.

Do not:

- redesign approved sections without a verified defect
- combine unrelated refactors with feature work
- create future infrastructure with no current consumer
- rewrite copy merely because an alternative sounds better
- revisit completed phases without evidence of a defect

When a better architecture is discovered, stop and explain the evidence, cost, and migration impact before implementing it.

## 15. Review Priorities

Review work in this order:

1. factual correctness
2. broken behavior
3. accessibility
4. security and privacy implications
5. SEO correctness
6. performance
7. maintainability
8. visual polish

Cosmetic preference must not override product correctness or accessibility.

## 16. Claude Working Rules

Before changing files:

- inspect the relevant existing implementation
- read the documents referenced by the task
- identify reusable components
- flag conflicts instead of guessing

After implementation, provide a concise report with no more than 15 bullets covering:

- summary
- files changed
- validation results
- issues fixed
- remaining risks
- next recommendation

Only explain architecture in detail when architecture changed.

Do not generate long restatements of these standards.

## 17. Prohibited Actions Unless Explicitly Approved

Do not:

- initialize Git
- commit
- push
- deploy
- configure a custom domain
- add analytics
- add cookie consent
- add a contact-form provider
- add authentication
- add a backend
- add payment functionality
- add a CMS
- add a new framework
- create fake product assets
- fabricate legal, product, or business facts

## 18. Definition of Done

A phase is complete only when:

- the approved scope is implemented
- existing architecture is reused appropriately
- facts are verified
- accessibility is preserved
- SEO behavior is preserved
- no unnecessary dependency or JavaScript was introduced
- `npm run check` passes
- `npm run build` passes
- remaining risks are documented

---

This document is part of the SanAkLabs Engineering & Design Standards.
