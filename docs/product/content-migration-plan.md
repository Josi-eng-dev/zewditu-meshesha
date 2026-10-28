# Content Migration Plan

**Status:** Draft — disposition columns require organizational approval  
**Source material:** `extracted_data/` (do not modify as the archive of record)  
**Approved publishable set (future):** to be curated under paths such as `assets/approved-media/` (not created in this docs pass)

## 1. Principles

1. Extraction is **candidate** content, not automatic approval.  
2. Separate organizational content from theme demos.  
3. Verify donation, contact, registration, and history claims with an authorized source.  
4. Record an explicit action per item: **keep / revise / merge / archive / remove / redirect / confirm**.  
5. Do not republish images of identifiable children without consent confirmation (U06).  
6. Prefer reproducible migration scripts later; this document defines decisions first.

### Publication freeze (migration safety)

Until U06 and content approval clear:

- **Do not** put child-identifiable photos, unapproved posts, or theme-demo pages into any staging/production publish set.  
- Default for uncleared media: **exclude**.  
- Default for sample template URLs: **redirect or 404**, never promote as org content.  
- Donation numbers on the new site must match **org-confirmed** values (U01), not secondary audit prose.

## 2. Workflow

1. Inventory pages, posts, documents, media, URLs (done in audit).  
2. Identify core vs sample content (done).  
3. Review Amharic/English text, dates, links.  
4. Verify donation/contact/history with organization.  
5. Fill disposition tables below.  
6. Prepare migration process and test against approved set.  
7. Compare counts, links, and media references to inventory.

## 3. Page disposition (initial proposal)

| ID | Slug | Proposal | Final (org) |
| --- | --- | --- | --- |
| 31 | home | **Keep** — revise for MVP Home | |
| 414 | about-us | **Keep** — revise; strip unverified stats until confirmed | |
| 427 | activities | **Keep** — revise | |
| 435 | donate | **Keep** — only after U01 confirmation | |
| 420 | contact-us | **Keep** — merge into channels-only Contact (v1.0: **no** form / no delivery workflow); **verify** phone/email/address values before publish (U02/U03); named U04 owner still TBD | |
| 73 | contact | **Merge/redirect** → Contact | |
| 572 | gallery-2 | **Keep** curated subset → `/gallery` | |
| 56 | blog | **Replace** with News listing IA | |
| 1201 | job-vacancy-storekeeper | **Archive/redirect** — no vacancy workflow in MVP | |
| 93–120 | sample templates | **Remove** from IA; redirect or 404 | |

## 4. Posts disposition

| Set | Count | Proposal |
| --- | --- | --- |
| All published posts | 30 | Candidate for News; each needs keep/revise/exclude |
| Vacancy-categorized | 2 | Likely archive for MVP (U13) |
| News/Blog | remainder | Prefer keep with editorial review |

Detailed per-post table should be filled during content workshops using `extracted_data/posts/posts_index.json`.

## 5. Media disposition

| Set | Proposal |
| --- | --- |
| Logo + favicon | Keep if brand-approved |
| Pledge form PDF/DOCX | Keep if still current (U01) |
| `m2-agents.pdf` | Confirm purpose before publish |
| `mov_bbb.mp4` | Likely exclude (sample-like) unless proven organizational |
| Gallery/news photos | Curate approved subset only after U06 |
| Remaining ~350+ remote-only items | Download only if approved; do not hotlink indefinitely |

## 6. URL mapping skeleton

| Old | New (proposal) | Redirect |
| --- | --- | --- |
| `/` | `/` | — |
| `/about-us/` | `/about` or `/about-us` | Yes if slug changes |
| `/activities/` | `/activities` | Optional trailing-slash normalize |
| `/donate/` | `/donate` | |
| `/contact-us/`, `/contact/` | `/contact` | Yes |
| `/gallery-2/` | `/gallery` | Yes |
| `/blog/` | `/news` | Yes |
| `/YYYY/MM/DD/{slug}/` | `/news/{stable-slug}` | Yes (map table) |
| Sample templates | `/` or 404 | Decision required |
| Vacancy URLs | Archive page or notice | Decision required (U13) |

## 7. Verification checklist (pre-launch)

- [ ] Approved page count matches published pages  
- [ ] Approved posts render with correct dates/titles  
- [ ] No broken internal links  
- [ ] Redirects tested for high-traffic legacy URLs  
- [ ] Donation block matches org-confirmed values  
- [ ] Contact block matches org-confirmed values  
- [ ] Media alt text and captions present for approved images  
- [ ] No demo/theme pages indexed  

## 8. Inconsistencies to resolve during migration

1. Telebirr/Awash mentioned in extraction README/audit notes but absent from Donate page extraction.  
2. Phone number variance across footers.  
3. Impact statistics in About — require confirmation before Home/About hero use.
