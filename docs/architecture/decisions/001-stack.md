# ADR 001 — Technology Stack

- **Status:** Accepted for **v1.0 Option A** (recorded 21 October 2026)  
- **Date:** 2026-10-21  
- **Recorded by:** Yoseph Fekadu (Back-end engineer) — project architecture path for v1.0  
- **Evidence:** [`docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md`](../../review/HUMAN-APPROVAL-RECORD-2026-10-21.md)  
- **Acceptance criteria (met for path selection):** Human chose Option A; Spring Boot not in approved v1.0 scope; contact = channels only.

## Context

Volunteer-built public website MVP. Content is infrequently updated. `frontend/` and `backend/` directories exist as placeholders; **backend is not required for approved v1.0**.

## Decision (v1.0)

| Layer | v1.0 choice |
| --- | --- |
| Frontend | Vue 3, TypeScript, Vite (**required**) |
| Routing | Vue Router |
| Styling | Tailwind CSS or lightweight token-based CSS (finalize at foundation) |
| Content | Version-controlled approved files + static media |
| Backend | **Deferred** — Java 21 / Spring Boot / Maven **not** in approved v1.0 scope |
| API | No `/api/v1` requirement for v1.0 |
| Database | None for v1.0 (see ADR-002) |
| Tests (when coding authorized) | Vitest / Vue Test Utils; Playwright for E2E |
| Packaging | Static hosting; Docker only if later justified |

## Options considered

| Option | Meaning | v1.0 |
| --- | --- | --- |
| **A** | Static Vue + VC content; channels-only contact | **Selected** |
| **B** | A + thin Spring Boot for approved server duties | Not selected; revisit only with new written approval |
| **C** | Spring Boot + PostgreSQL by default | Rejected for v1.0 |

## Consequences

- P3 (when authorized) scaffolds **frontend only**.  
- No SMTP/DB secrets required for v1.0 contact.  
- SEO/rendering still open (ADR-003).  
- Reintroducing Spring Boot requires a **separate** explicit authorization, not this ADR alone.
