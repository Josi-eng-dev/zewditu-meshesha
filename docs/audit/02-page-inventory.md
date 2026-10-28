# 02 — Page Inventory

Reconciled from `extracted_data/audit_documentation/02-page-inventory.md` and `extracted_data/pages/pages_index.json`.

**Evidence date:** October 2026 extraction  
**Live source:** https://zewditumeshesha.org/

## Summary

| Classification | Count |
| --- | --- |
| Total pages | 17 |
| Core organizational pages | 9 |
| Futurio / theme sample templates | 8 |

## Page table

| ID | Page Title | Slug | Live URL | Classification | Builder | HTML length (chars) |
| --- | --- | --- | --- | --- | --- | --- |
| 31 | Home | `home` | https://zewditumeshesha.org/ | Core | Elementor | 74,367 |
| 56 | Blog | `blog` | https://zewditumeshesha.org/blog/ | Core | Gutenberg/Core | 0 |
| 73 | Contact | `contact` | https://zewditumeshesha.org/contact/ | Core (legacy secondary) | Elementor | 6,648 |
| 414 | ABOUT US | `about-us` | https://zewditumeshesha.org/about-us/ | Core | Elementor | 28,369 |
| 420 | Contact Us | `contact-us` | https://zewditumeshesha.org/contact-us/ | Core | Elementor | 17,906 |
| 427 | ACTIVITIES | `activities` | https://zewditumeshesha.org/activities/ | Core | Elementor | 24,108 |
| 435 | DONATE | `donate` | https://zewditumeshesha.org/donate/ | Core | Elementor | 12,947 |
| 572 | Gallery | `gallery-2` | https://zewditumeshesha.org/gallery-2/ | Core | Elementor | 121,843 |
| 1201 | Job Vacancy: Storekeeper | `job-vacancy-storekeeper` | https://zewditumeshesha.org/home/job-vacancy-storekeeper/ | Core (vacancy) | Gutenberg/Core | 3,608 |
| 93 | Page with left sidebar | `page-with-left-sidebar` | https://zewditumeshesha.org/page-with-left-sidebar/ | Sample template | Gutenberg/Core | 7,128 |
| 95 | Page with right sidebar | `page-with-right-sidebar` | https://zewditumeshesha.org/page-with-right-sidebar/ | Sample template | Gutenberg/Core | 7,128 |
| 97 | Page with NO sidebar | `page-with-no-sidebar` | https://zewditumeshesha.org/page-with-no-sidebar/ | Sample template | Gutenberg/Core | 7,128 |
| 99 | Full Width page | `full-width-page` | https://zewditumeshesha.org/full-width-page/ | Sample template | Gutenberg/Core | 7,128 |
| 102 | Full Width page – no gaps | `full-width-page-no-gaps` | https://zewditumeshesha.org/full-width-page-no-gaps/ | Sample template | Gutenberg/Core | 8,366 |
| 104 | Custom featured image height | `custom-featured-image-height` | https://zewditumeshesha.org/custom-featured-image-height/ | Sample template | Gutenberg/Core | 7,128 |
| 115 | Full Width Page – No gaps, title, image, sidebar | `full-width-page-no-gaps-title-image-sidebar` | https://zewditumeshesha.org/full-width-page-no-gaps-title-image-sidebar/ | Sample template | Gutenberg/Core | 8,675 |
| 120 | Gutenberg page | `gutenberg-page` | https://zewditumeshesha.org/gutenberg-page/ | Sample template | Gutenberg/Core | 13,954 |

## Core page notes (from extraction)

1. **Home** — Landing content, programs/news highlights, donation CTA (Elementor).
2. **About Us** — History, registration narrative, mission/vision/structure content.
3. **Activities** — Program descriptions (daycare, foster care, education, feeding, family support).
4. **Donate** — Static bank instructions and related contact details; pledge form linked elsewhere / on site.
5. **Contact Us** — Phones, email, address (Yeka Sub-city in extracted content); pledge download link present.
6. **Gallery** — Large photo gallery page (`gallery-2`).
7. **Blog** — Listing route; extracted page body length 0.
8. **Contact (`/contact/`)** — Secondary/legacy contact page.
9. **Job Vacancy: Storekeeper** — Vacancy page (out of MVP scope for workflows; URL may need redirect/archive decision).

## Reconciliation notes

- Earlier narrative that Contact Us is in “Gulele Sub-city” is **not** supported by extracted contact/home/about footer content, which consistently cites **Yeka** woreda 12 / Kotebe. Gulele appears in About history as a former rented location that was vacated. Treat current address as Yeka pending organizational confirmation.
- Sample theme pages contain demo/placeholder content (verified in `gutenberg-page` extraction) and are not organizational MVP content.

## MVP disposition (proposal)

| Page | Proposed MVP action |
| --- | --- |
| Home, About, Activities, Donate, Contact Us, Gallery, Blog/News | Keep / migrate (subject to content approval) |
| Contact (`/contact/`) | Merge into Contact or redirect |
| Job vacancy page | Exclude vacancy workflow from MVP; decide archive vs redirect |
| 8 sample templates | Remove from IA; redirect or 404 per URL strategy |

Final keep/revise/redirect decisions: [`docs/product/content-migration-plan.md`](../product/content-migration-plan.md).
