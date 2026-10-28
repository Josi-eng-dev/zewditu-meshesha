# ADR 002 — Persistence for MVP

- **Status:** Accepted for **v1.0** — version-controlled content only; **no PostgreSQL**  
- **Date:** 2026-10-21  
- **Aligned with:** Option A ([`HUMAN-APPROVAL-RECORD-2026-10-21.md`](../../review/HUMAN-APPROVAL-RECORD-2026-10-21.md))  
- **Decision owner (named):** TBD for ongoing org data policy; path recorded with architecture approval  
- **Acceptance criteria (met for v1.0):** Explicit “none for MVP v1.0” — no entities stored in Postgres.

## Context

MVP has no admin CMS and no contact-form submissions in approved v1.0. A database must not be added to justify a backend.

## Decision

- **v1.0:** Option 1 — version-controlled content + static media only.  
- **Do not** create Page/Article/Media/ContactSubmission schemas for v1.0.  
- Revisit only if a later approved requirement needs persistence (e.g. future contact logging under a new Option B approval).

## Consequences

- Content updates ship via git + static redeploy.  
- No DB backups required for application data in v1.0 (media/file backups still apply).  
- Spring Boot is not required for persistence in v1.0.
