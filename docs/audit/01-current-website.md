# 01 — Current Website Audit

## Organization

**Organization:** Zewditu Meshesha Children and Family Welfare and Development Association  

**Current public website:** https://zewditumeshesha.org/

## Audit purpose

Understand the organization's existing public digital presence before designing and implementing the replacement MVP public website.

## Current-state principle

The existing website is the source of discovery. Private backend systems, hosting contracts, admin access, and payment capabilities must not be guessed.

## Verified public platform summary

| Item | Finding | Evidence class |
| --- | --- | --- |
| CMS | WordPress with public REST API (`/wp-json/wp/v2/`) | Verified via successful structured extraction |
| Theme / builder | Futurio theme; most core pages marked Elementor in extraction metadata | Verified in page indexes |
| Pages | 17 total (9 core organizational, 8 theme sample templates) | Verified — `extracted_data/pages/pages_index.json` |
| Posts | 30 published | Verified — `extracted_data/posts/posts_index.json` |
| Categories | Blog (6), News (25), Vacancy (2), Uncategorized (5) — counts as category post counts in metadata | Verified — `extracted_data/metadata/categories.json` |
| Tags | 5 | Verified — `extracted_data/metadata/tags.json` |
| Media library | 400 attachments | Verified — `extracted_data/media/media_inventory.*` |
| Local downloads | 44 images + 3 documents under `extracted_data/media/` | Verified in repository |
| Donations on live site | Static bank instructions + pledge form download; no online checkout observed in extracted donate content | Verified for extracted page content; account numbers require organizational re-confirmation before republishing |
| Contact on live site | Phone, email, and address content present; no contact form fields found in extracted `contact-us` HTML | Verified for extraction artifact; live behavior beyond extraction is unknown |

## Discovery status (reconciled)

| Area | Status |
| --- | --- |
| Homepage | Inventoried (extraction) |
| About | Inventoried (extraction) |
| Activities | Inventoried (extraction) |
| News / Blog | Inventoried (30 posts) |
| Gallery | Inventoried (extraction) |
| Donate | Inventoried (extraction); details need org confirmation |
| Contact | Inventoried (extraction); delivery workflow unknown |
| URLs | Inventoried (47 unique URLs noted in extraction audit) |
| Content | Inventoried; approval/migration disposition pending |
| Functionality | Documented from extraction evidence — see `05-functionality-inventory.md` |
| Media | Inventoried; reuse consent unresolved |
| Backend / private hosting / auth | Unknown |
| Admin system | Unknown (WordPress admin assumed but not accessed) |

## MVP mapping (proposal — not current-site fact)

The approved rebuild MVP covers seven public areas: Home, About, Activities, Donate, Contact, Gallery, News. Theme sample pages and vacancy workflows are out of MVP scope. See [`docs/product/mvp-requirements.md`](../product/mvp-requirements.md).

## Important constraint

This document describes the publicly observable current system and repository extraction only.

## Next step

Use `02`–`10` for inventories and unknowns; treat `11-audit-summary.md` as the Phase 0 handoff.
