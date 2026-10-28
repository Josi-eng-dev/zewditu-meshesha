# 08 — Current Problems & Opportunities

Evidence-backed where possible. Items marked **observation** are inferred from structure/content, not measured UX studies.

## Content & information architecture

| Problem | Evidence | Opportunity |
| --- | --- | --- |
| Theme sample / demo pages publicly reachable | 8 sample pages in page inventory; Gutenberg page contains placeholder filler | Drop from new IA; redirect or remove |
| Duplicate contact routes | `/contact/` and `/contact-us/` | Single Contact URL with redirects |
| Gallery slug `gallery-2` | Page slug in index | Clean `/gallery` with redirect |
| Vacancy content mixed with core marketing | Vacancy page + Vacancy category posts | Keep news archive decisions separate from MVP vacancy workflows |
| Donation channel documentation drift | Extraction audit text mentions Telebirr/Awash; Donate page extraction shows CBE + Bank of Abyssinia | Reconcile with organization before republish |
| Phone numbers differ across footers/pages | Multiple values in extracted pages | Single verified contact block |

## Functionality

| Problem | Evidence | Opportunity |
| --- | --- | --- |
| Contact “send a message” without form fields in extraction | `420_contact-us.html` has no `input`/`textarea` | Either verified delivery form or channels-only |
| No online donation checkout | Donate page is static instructions | Keep static model for MVP (intentional); improve clarity |
| Blog page body empty in extraction | `content_length: 0` for Blog page | Dedicated News listing in new site |

## Technical / maintainability (observation)

| Problem | Evidence | Opportunity |
| --- | --- | --- |
| Heavy Elementor markup | Large HTML lengths (Home ~74k, Gallery ~121k chars) | Cleaner semantic Vue pages |
| Media sprawl | 400 library items; 44 downloaded | Curated approved media set |
| WordPress + theme/plugin coupling | Futurio + Elementor stack | Decouple public site from WP for MVP rebuild |

## Trust, accessibility, safeguarding (open until tested)

| Problem | Status |
| --- | --- |
| Accessibility conformance of live site | Not measured in this repo — Unknown |
| Performance on mobile networks | Not measured — Unknown |
| Child image consent for gallery/news | Unknown — must confirm before reuse |
| Privacy / analytics practices | Not inventoried — Unknown |

## Risks if migrated blindly

- Republishing outdated bank details
- Republishing images without consent
- Shipping a non-functional contact form
- Carrying demo pages into production SEO indexes
