# 10 — Unknowns

Questions that must be confirmed before or during MVP launch. Do not invent answers.

**Owner column** = responsible role until a named person is assigned.  
**Acceptance criteria** = what “resolved” means for the docs/P3 gate.

| ID | Question | Why it matters | Decision owner | Acceptance criteria (resolved when…) | Blocks |
| --- | --- | --- | --- | --- | --- |
| U01 | Which bank accounts, SWIFT codes, and mobile-money numbers are currently valid? | Donate accuracy; Telebirr/Awash **not** in Donate extraction | **Named: TBD** (role: Org finance / authorized officer) | Written confirmation of channels to publish; Telebirr/Awash only if explicitly confirmed | Donate publish |
| U02 | Which phone numbers and email are official for public display? | Numbers differ across pages | Org communications | Single approved contact block signed off | Contact/footer |
| U03 | Confirm physical address (Yeka woreda 12 / House 1274 as in extraction) | Trust / directions | Org | Address string approved for public site | Contact/footer |
| U04 | Online contact form required? Recipient mailbox? Who monitors? | Avoid fake “message sent” | **TBD** (role: Org + tech lead) | **v1.0 path recorded:** channels only ([approval record](../review/HUMAN-APPROVAL-RECORD-2026-10-21.md); ADR-004). Full close still needs named owner + verified channel values (U02/U03) | Form/backend remain out of v1.0; publish still needs verified channels |
| U05 | Which of the 30 posts are approved for migration? | News sensitivity | Org content approver | Per-post keep/revise/exclude list completed | News migration |
| U06 | Which media (esp. children) have consent for republication? | Safeguarding | **Named: TBD** (role: Org safeguarding / director) | Approved media ID list; all others excluded from publish set | Gallery + news images |
| U07 | Which impact statistics may be published? | MVP bans unverified stats | Org | Explicit allowed claims list (or “none on Home”) | Home/About |
| U08 | Legacy URLs: keep vs new + redirects? | SEO / bookmarks | Product + tech | Redirect map table filled for core + posts | Launch redirects |
| U09 | Hosting, domain, TLS, budget, handover owners? | Operations | Org + tech | Provider chosen; named ops owner; cost accepted | Production deploy |
| U10 | PostgreSQL vs version-controlled content only? | Complexity | Tech lead (ADR-002) | ADR-002 Accepted with chosen option | Backend data layer |
| U11 | CSR vs prerender/SSR for SEO? | Discoverability | Tech lead (ADR-003) | ADR-003 Accepted with evidence from crawler check | Frontend foundation |
| U12 | Amharic / English / bilingual policy? | Content scope | Org | Language matrix for seven areas | Content model |
| U13 | Vacancy pages/posts at launch? | Out of MVP workflows | Org | Archive or redirect decision recorded | URL cleanup |
| U14 | Privacy / child safeguarding policy for web publish? | Compliance | Org | Policy reference or written rules for site | Launch gate |
| U15 | Who has final content and launch approval authority? | Acceptance | **Named: TBD** (role: Org board/director) | Named approver recorded | P6 launch |

## Critical path before P3 scaffolding

**P3 is NOT authorized** by the 21 Oct 2026 approval record (documentation alignment only).

| Decision | Status for Option A v1.0 |
| --- | --- |
| Architecture Option A | Recorded — static Vue; Spring Boot out |
| U04 / ADR-004 | Channels-only path recorded; named owner still TBD |
| U10 / ADR-002 | No Postgres for v1.0 |
| U11 / ADR-003 | Still open — choose CSR vs prerender before locking frontend |
| U01 / U06 | May remain open for empty shell later, but **block content publish** |
| Separate P3 written authorization | **Required** before any scaffolding |

Do **not** invent owners for U01/U04/U06/U15.

## How to resolve

1. Assign a **named** person into Decision owner.  
2. Record answer, date, and evidence link.  
3. Update migration plan / ADR status to Accepted.  
4. Do not guess U01–U04/U06 values in published content.
