# ADR 004 — Contact Message Handling

- **Status:** Accepted for **v1.0 scope** — Option 1 (channels only)  
- **Date:** 2026-10-21  
- **Evidence:** [`HUMAN-APPROVAL-RECORD-2026-10-21.md`](../../review/HUMAN-APPROVAL-RECORD-2026-10-21.md)  
- **Named accountable owner for U04:** **TBD** (must still be assigned)  
- **Acceptance criteria:**  
  - (Met for v1.0 path) Project selected channels only; no form / no email backend.  
  - (Still open) Which phone/email/address strings are verified for display → U02/U03.  
  - (Still open) Named U04 owner confirmation recorded.

## Context

Extracted Contact Us page has no form fields. Fake “message sent” is forbidden.

## Decision (v1.0)

1. **Channels only** — display organizational contact channels that have been **verified and approved for publication**.  
2. **Excluded from v1.0:** contact form, email-delivery workflow, `POST /api/v1/contact-messages`, database inbox.  
3. UI must not imply submission or delivery.

## Options not selected for v1.0

2. Server-side email — requires new written approval (would move architecture toward Option B).  
3. Store in database only — rejected.

## Consequences

- No Spring Boot contact module in v1.0.  
- Playwright journeys: display and link channels; no form success path.  
- U01/U02/U03 still gate which values appear on the page.
