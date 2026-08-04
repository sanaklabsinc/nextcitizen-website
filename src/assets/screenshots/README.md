# Screenshot assets

Real nextCitizen app screenshots used by `src/components/home/Screenshots.astro`.

No image files exist in this folder yet. The Screenshots section renders
nothing at all until at least one of the files below is added — per this
project's rule against fabricated or placeholder product content (see
docs/CONTENT_STRATEGY.md), no fake or redrawn screens are created in the
meantime.

## Expected files

Add real device screenshots using these exact base filenames (any of
`.png` / `.jpg` / `.jpeg` / `.webp` — the component resolves whichever
extension is present):

| Filename            | Screen                | Notes                                                                                                    |
| -------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `dashboard.*`         | Home / dashboard      | Rendered as the larger, featured screenshot on desktop.                                                    |
| `study.*`             | Study / flashcards    |                                                                                                              |
| `mock-test.*`         | Mock test             |                                                                                                              |
| `local-answers.*`     | Local answers         |                                                                                                              |
| `interview-mode.*`    | Interview mode        | Always labeled "Coming Soon" in the caption unless the product owner confirms it's publicly available — update the `status` field in Screenshots.astro only then. |

## Format guidance

- Real device screenshots, portrait orientation, roughly 9:19–9:19.5
  aspect ratio (e.g. 1080×2340 or 1170×2532 px). Any resolution at that
  aspect ratio works — Astro's build-time image pipeline (`astro:assets`)
  resizes and optimizes automatically.
- PNG or JPG straight from the device is fine; no manual conversion to
  WebP is needed, the build pipeline handles that.
- Each screen is optional and independent — add one, three, or all five.
  The section only ever renders screens that have a matching file; it
  never pads the gallery with an empty phone frame.
