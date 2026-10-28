# Website & System Audit

## Purpose

This directory contains the discovery and audit of the existing Zewditu Meshesha public digital presence.

The audit is the foundation for the MVP public website rebuild. It documents what currently exists on `https://zewditumeshesha.org/` and what remains unknown.

## Evidence sources

| Source | Role |
| --- | --- |
| Live site (public) | Source of discovery at extraction time |
| `extracted_data/` | Structured extraction (pages, posts, media, metadata) dated October 2026 |
| `extracted_data/audit_documentation/` | First-pass inventories produced during extraction |
| `docs/audit/` (this folder) | Reconciled, project-canonical audit set |

Prefer this folder for project decisions. Keep `extracted_data/` unchanged as raw evidence.

## Rule

Distinguish:

- **Verified** — observed in extraction artifacts or live public responses recorded in inventory
- **Observation** — inferred from structure or content patterns without organizational confirmation
- **Assumption** — working hypothesis; not a fact
- **Unknown** — not verified; see `10-unknowns.md`
- **Proposal** — intended future behavior for the rebuild (not current-site fact)

Do not invent organizational facts, donation details, contact channels, or media permissions.

## Audit documents

| Document | Purpose | Status |
| --- | --- | --- |
| `01-current-website.md` | Overall current-state description | Updated |
| `02-page-inventory.md` | All discovered pages | Reconciled from extraction |
| `03-url-inventory.md` | URL and route inventory | Reconciled from extraction |
| `04-content-inventory.md` | Existing organizational content | Reconciled; claims flagged |
| `05-functionality-inventory.md` | Existing functionality | Written from extraction evidence |
| `06-media-inventory.md` | Images and other media | Reconciled from extraction |
| `07-user-journeys.md` | Visitor journeys (current + MVP intent) | Written |
| `08-current-problems.md` | Problems and opportunities | Written |
| `09-technical-observations.md` | Technical findings + Git baseline | Written |
| `10-unknowns.md` | Questions awaiting confirmation | Written |
| `11-audit-summary.md` | Consolidated findings and exit criteria | Updated |

## Related docs

- Project snapshot: [`docs/CURRENT-STATE.md`](../CURRENT-STATE.md)
- Implementation roadmap: [`docs/IMPLEMENTATION-PLAN.md`](../IMPLEMENTATION-PLAN.md)
- MVP requirements: [`docs/product/mvp-requirements.md`](../product/mvp-requirements.md)

## Audit status

**Status:** Phase 0 documentation package completed for handoff review  
**Start:** 2026-09-28  
**Reconciled:** 2026-10-21  

**Exit gate:** Organization/product owner reviews `11-audit-summary.md` and open items in `10-unknowns.md` before implementation coding begins.
