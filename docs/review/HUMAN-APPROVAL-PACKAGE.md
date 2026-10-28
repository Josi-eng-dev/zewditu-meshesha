# Human Approval Package — Pre-P3

**Status:** Human decisions recorded — see [`HUMAN-APPROVAL-RECORD-2026-10-21.md`](HUMAN-APPROVAL-RECORD-2026-10-21.md)  
**Based on:** [`FINAL-REVIEW-GATE-2026-10-21.md`](FINAL-REVIEW-GATE-2026-10-21.md) (ACCEPT WITH CONDITIONS)  
**Authorized work:** Documentation alignment with Option A + channels-only contact  
**P3:** **NOT AUTHORIZED**

---

## 1. Critical unknowns (owners remain TBD)

Source: [`docs/audit/10-unknowns.md`](../audit/10-unknowns.md).

| ID | Question (existing) | Acceptance criteria (existing) | Owner status | Project note (21 Oct 2026) |
| --- | --- | --- | --- | --- |
| **U01** | Which bank accounts, SWIFT codes, and mobile-money numbers are currently valid? | Written confirmation of channels to publish; Telebirr/Awash only if explicitly confirmed | **TBD** | Still blocks Donate **publication** |
| **U04** | Online contact form required? Recipient mailbox? Who monitors? | ADR-004 Accepted Option 1 or 2; if Option 2, mailbox + monitor named | **TBD** | **v1.0 path chosen:** channels only (no form). Named owner still TBD; channel **values** still need U02 verification |
| **U06** | Which media (esp. children) have consent for republication? | Approved media ID list; all others excluded | **TBD** | Still blocks gallery/news image publish |
| **U15** | Who has final content and launch approval authority? | Named approver recorded | **TBD** | Still blocks P6 launch |

| ID | Named owner | Date assigned | Decision / evidence link |
| --- | --- | --- | --- |
| U01 | _TBD_ | | |
| U04 | _TBD_ | | |
| U06 | _TBD_ | | |
| U15 | _TBD_ | | |

---

## 2. Architecture decision (recorded)

| Item | Decision |
| --- | --- |
| v1.0 architecture | **Option A** — Static Vue + version-controlled content |
| Contact | **Channels only** (no form / no backend delivery) |
| Spring Boot / DB / auth / payments | **Out of approved v1.0 scope** |
| Record | [`HUMAN-APPROVAL-RECORD-2026-10-21.md`](HUMAN-APPROVAL-RECORD-2026-10-21.md) |
| Decision-maker | Yoseph Fekadu (Back-end engineer), 21/10/2026 |

---

## 3. Documents aligned with this decision

Aligned in the documentation-alignment pass (same date as record):

| Document | Alignment |
| --- | --- |
| `README.md` | Stack = Vue required; Spring Boot deferred for v1.0 |
| `docs/IMPLEMENTATION-PLAN.md` | Option A; P3 still not authorized |
| `docs/architecture/decisions/001-stack.md` | Option A recorded for v1.0 |
| `docs/architecture/system-design.md` | Static Vue topology; backend deferred |
| `docs/architecture/decisions/002-persistence.md` | File-based for v1.0 |
| `docs/architecture/decisions/003-rendering-seo.md` | Still Open; no Spring dependency for v1.0 |
| `docs/architecture/decisions/004-contact-handling.md` | Option 1 for v1.0 scope |
| `docs/operations/runbook.md` | Static hosting topology |
| `docs/CURRENT-STATE.md` | Status pointers |

---

## 4. P3 authorization

**P3 NOT AUTHORIZED.** Documentation alignment only.

Separate written authorization is required before any application scaffolding.

---

## 5. Downstream gates (unchanged — still open)

Donation verification (U01), child media (U06), URL migration, content disposition, measurable launch tests, hosting (U09), named owners for U01/U04/U06/U15.
