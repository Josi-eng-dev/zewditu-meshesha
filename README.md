# Zewditu Meshesha Digital Platform

A complete digital platform rebuild for Zewditu Meshesha Children and Family Welfare and Development Association.

This project is being developed as a volunteer charitable contribution to modernize the organization's digital presence and supporting systems.

## Project Status

**Phase:** Documentation alignment after human approval (Option A) · **P3 not authorized**  

**Status:** Review gate accepted with conditions — **application implementation not started**

**MVP (locked):** Public website only — Home, About, Activities, Donate, Contact, Gallery, News  

**v1.0 stack (recorded):** Vue 3 + TypeScript + Vite · version-controlled content · **Spring Boot deferred** (not in approved v1.0 scope) · contact = verified channels only  

**Approval record:** [`docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md`](docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md)

## Start here

| Document | Purpose |
| --- | --- |
| [`docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md`](docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md) | Human decisions and authorized scope |
| [`docs/CURRENT-STATE.md`](docs/CURRENT-STATE.md) | Snapshot of repo and live-site extraction status |
| [`docs/IMPLEMENTATION-PLAN.md`](docs/IMPLEMENTATION-PLAN.md) | Phased roadmap P0–P6 |
| [`docs/product/mvp-requirements.md`](docs/product/mvp-requirements.md) | MVP scope and acceptance goals |
| [`docs/audit/`](docs/audit/) | Reconciled Phase 0 audit |
| [`docs/architecture/system-design.md`](docs/architecture/system-design.md) | System design (Option A) |

## Objective

Rebuild the organization's digital platform with a modern, accessible, responsive, maintainable, and secure architecture.

**Near-term delivery** is the public website MVP above. Later phases may add admin CMS, richer workflows, and other capabilities — only with approved requirements.

Longer-term platform themes (not all in MVP):

* Public website
* Backend API
* Administrative dashboard (post-MVP)
* Content and media management (post-MVP CMS)
* News and stories
* Programs and projects
* Gallery
* Contact handling
* Donation-related information (static in MVP)
* Authentication and authorization (post-MVP)
* SEO, accessibility, performance, testing, production infrastructure

## Core Principles

1. Build around the organization's real needs.
2. Preserve important existing content and organizational information.
3. Do not invent organizational facts.
4. Prioritize accessibility and mobile usability.
5. Keep the architecture maintainable.
6. Minimize unnecessary technical complexity.
7. Protect organizational and user data.
8. Document important technical decisions.
9. Test before production deployment.
10. Make the final system maintainable after handover.

## Repository Structure

```text
docs/             Project documentation and specifications
extracted_data/   Preserved WordPress extraction evidence (do not treat as approved publish set)
frontend/         Public Vue site (scaffold only after separate P3 authorization)
backend/          Reserved placeholder — Spring Boot deferred; not in approved v1.0 scope
admin/            Administrative dashboard (out of MVP)
infra/            Deployment and infrastructure configuration
scripts/          Development and operational scripts
tests/            Cross-system testing
assets/           Project assets used during development
```

## Current Phase

### Documentation alignment (authorized) · P3 unauthorized

Human approval recorded Option A and channels-only contact. See `docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md`.

* Align docs with Option A — **in progress / applied**
* Assign named owners for U01, U04, U06, U15 — **still TBD**
* Downstream: donation verification, child-media authorization, content disposition, URL migration, launch testing
* **Do not** scaffold application code until a separate P3 authorization

No production migration or destructive changes.

## Documentation

See:

* `docs/audit/` — Current system audit
* `docs/product/` — Product requirements
* `docs/architecture/` — System architecture and ADRs
* `docs/operations/` — Runbook
* `docs/testing/` — Acceptance checklist
* `docs/api/` — API documentation (to expand with OpenAPI later)
* `docs/design/` — Design system and UX (to expand in P2)
* `docs/development/` — Development standards (to expand in P3)
* `docs/deployment/` — Deployment documentation (see also operations runbook)

## Important

This repository is a volunteer project created to support the organization's mission.

Any production deployment, credentials, organizational data, payment configuration, or third-party service integration must be handled with appropriate authorization from the organization.
