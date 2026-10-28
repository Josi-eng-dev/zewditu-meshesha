# Implementation Plan — Zewditu Public Website MVP

**Version:** 1.1  
**Date:** 2026-10-21  
**Rule:** Documentation and organizational confirmations before application scaffolding.  
**Human record:** [`docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md`](review/HUMAN-APPROVAL-RECORD-2026-10-21.md)

## Locked decisions (v1.0)

- MVP areas: Home, About, Activities, Donate, Contact, Gallery, News  
- Out: payments, auth/accounts, admin CMS, vacancy workflows, chat/apps, unverified stats  
- **Architecture: Option A** — Vue 3 + TypeScript + Vite; version-controlled content; **no Spring Boot / database in approved v1.0 scope**  
- Contact: **verified channels only** (no form, no email-delivery backend)  
- Donations: static instructions + pledge form **after** organizational verification (U01)  
- Spring Boot / `/api/v1` / Postgres: **deferred** until a separate written approval justifies them  

## Git baseline

| Branch | Role |
| --- | --- |
| `main` (`f676b59`) | **Canonical** integration tip (PR #1 merge); tree identical to `zewditu` |
| `zewditu` (`c4bdd7d`) | Extraction feature branch; already contained in `main` tree |

Details: [`docs/audit/09-technical-observations.md`](audit/09-technical-observations.md).

## Phased roadmap

### P0 — Discovery & audit completion

- Inventories and unknowns documented  
- **Exit:** Audit handoff accepted for planning — **met for planning; org unknowns remain**  

### P1 — Product requirements

- MVP requirements and migration plan drafted  
- **Exit:** Requirements approved — **in progress** (content/donate/media still need org confirmation)  

### P2 — Architecture & UX

- **Option A recorded** (21 Oct 2026); ADR-001/002/004 aligned for v1.0; ADR-003 (SEO rendering) still open  
- **Exit:** Architecture path for v1.0 recorded; design system and SEO choice still needed before coding  

### P3 — Foundation (first coding milestone)

- **Status: NOT AUTHORIZED**  
- When separately authorized: scaffold **frontend only** (Vue 3 + Vite), lint, tests, CI for static site — **not** backend unless a later approval changes Option A  

### P4 — Public website implementation

- Seven areas with approved content; channels-only contact; static donate after U01  

### P5 — Content migration & QA

- Approved material only; redirects; a11y/security/responsive/performance  

### P6 — Organizational acceptance & launch

- Requires named U15 approver and launch checklist  

## Documentation map

| Deliverable | Path |
| --- | --- |
| Human approval record | `docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md` |
| Audit set | `docs/audit/` |
| MVP requirements | `docs/product/mvp-requirements.md` |
| Migration plan | `docs/product/content-migration-plan.md` |
| System design | `docs/architecture/system-design.md` |
| ADRs | `docs/architecture/decisions/` |
| Runbook | `docs/operations/runbook.md` |
| Acceptance checklist | `docs/testing/acceptance-checklist.md` |
| Current snapshot | `docs/CURRENT-STATE.md` |

## What is authorized now

1. Keep documentation consistent with Option A and channels-only contact.  
2. Assign named owners for U01, U04, U06, U15 (do not invent names).  
3. Progress downstream content/safeguarding/URL gates.  

## What is not authorized

- P3 application scaffolding  
- Frontend or backend code, Docker/CI for apps, database schemas  
- Publishing unverified donation details or uncleared media  
