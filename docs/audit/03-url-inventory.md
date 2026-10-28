# 03 — URL Inventory

Reconciled from `extracted_data/audit_documentation/03-url-inventory.md`, page index, and posts index.

**Evidence class:** Verified as URLs present in extraction indexes and extraction-side URL audit (status “200 OK” recorded there at audit time). Re-verification at launch is still required.

## Summary

- **17** page routes (including sample templates)
- **30** post routes
- Extraction audit note: **47** unique URLs across pages and published posts

## Primary page routes

| Type | Title | Canonical URL | Notes |
| --- | --- | --- | --- |
| Page | Home | https://zewditumeshesha.org/ | Core |
| Page | Blog | https://zewditumeshesha.org/blog/ | Core listing |
| Page | Contact | https://zewditumeshesha.org/contact/ | Legacy secondary |
| Page | ABOUT US | https://zewditumeshesha.org/about-us/ | Core |
| Page | Contact Us | https://zewditumeshesha.org/contact-us/ | Core |
| Page | ACTIVITIES | https://zewditumeshesha.org/activities/ | Core |
| Page | DONATE | https://zewditumeshesha.org/donate/ | Core |
| Page | Gallery | https://zewditumeshesha.org/gallery-2/ | Core; slug is `gallery-2` |
| Page | Job Vacancy: Storekeeper | https://zewditumeshesha.org/home/job-vacancy-storekeeper/ | Vacancy; nested under `/home/` |
| Page | (8 sample templates) | See `02-page-inventory.md` | Theme demos |

## Post routes

Full list: `extracted_data/posts/posts_index.json` (30 items). Pattern observed: `/YYYY/MM/DD/{slug}/` with many Amharic URL-encoded slugs.

Representative recent posts (from index):

| ID | Date | Title (short) | Path pattern |
| --- | --- | --- | --- |
| 1224 | 2026-10-14 | Enat Bank financial literacy training | `/2026/10/14/...` |
| 1218 | 2026-10-14 | Founder 85th birthday | `/2026/10/14/...` |
| 1207 | 2026-09-28 | Volunteer orientation | `/2026/09/28/...` |
| 1198 | 2026-09-18 | Vacancy notice (Amharic) | `/2026/09/18/...` |
| 1194 | 2026-09-18 | Job Vacancy: Storekeeper | `/2026/09/18/job-vacancy-storekeeper/` |

## MVP URL strategy (proposal)

| Current | Proposed new (illustrative) | Action needed |
| --- | --- | --- |
| `/` | `/` | Keep |
| `/about-us/` | `/about` or `/about-us` | Prefer stable slug; redirect old |
| `/activities/` | `/activities` | Keep meaning |
| `/donate/` | `/donate` | Keep |
| `/contact-us/` | `/contact` | Redirect `/contact/` and `/contact-us/` |
| `/gallery-2/` | `/gallery` | Redirect `gallery-2` |
| `/blog/` + post permalinks | `/news` + `/news/{slug}` | Map/redirect old date-based URLs |
| Sample templates | — | Redirect to home or 410/404 |
| Vacancy URLs | — | Out of MVP workflows; redirect or archive page |

Exact redirect table to be completed during content migration approval.
