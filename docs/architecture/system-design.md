# System Design — MVP Public Website (v1.0 Option A)

**Status:** Aligned with human approval record (21 October 2026)  
**v1.0 stack:** Vue 3 + TypeScript + Vite · version-controlled content · **no Spring Boot**  
**Contact:** Verified channels only  
**Related:** ADRs `001`–`004` · [`HUMAN-APPROVAL-RECORD-2026-10-21.md`](../review/HUMAN-APPROVAL-RECORD-2026-10-21.md)

## 1. Context

Public website MVP for Zewditu Meshesha Children and Family Welfare and Development Association: seven areas, static donate instructions (after org verification), channels-only contact. No CMS admin, payments, auth, or backend process in approved v1.0.

## 1.1 Spring Boot for v1.0

**Not in approved scope.** Deferred unless a later written approval justifies Option B.

| Duty | v1.0 approach |
| --- | --- |
| Pages / news / gallery / donate text | Version-controlled content in the Vue app (or build-time JSON) |
| Donation instructions | Static, org-verified copy + pledge file download |
| Contact | Display verified channels only — **no** form POST |
| Auth, CMS, payments | Out of MVP |

## 2. Logical architecture (v1.0)

```text
Visitor browser
    │  HTTPS
    ▼
Vue 3 public site (static build / CDN or web server)
    │
    ├── Version-controlled approved content (Markdown/JSON in repo)
    ├── Static media (approved images/documents only)
    └── Contact: displayed phone / email / address (no message API)

(Spring Boot / PostgreSQL / /api/v1 — deferred; not deployed for v1.0)
```

## 3. Frontend responsibilities

- Seven public areas + shared layout/navigation/footer  
- Responsive UI, accessibility, SEO metadata (strategy per ADR-003)  
- Loading/empty/error states for content fetch from local/static modules  
- Static assets under `public/` or CDN  
- No client-side fake “message sent” affordance  
- No global state library unless a real need appears  

Proposed structure (scaffold **only** when P3 is separately authorized):

```text
frontend/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── features/{news,gallery,donations,contact}/
│   ├── content/          # version-controlled approved content
│   ├── router/
│   ├── styles/
│   └── types/
├── tests/
├── package.json
└── vite.config.ts
```

## 4. Backend (deferred)

No Spring Boot modules or `/api/v1` endpoints are part of approved v1.0.

If a future approval selects Option B, document modules and endpoints in a new revision of this file and ADR-001 — do not assume them now.

## 5. Persistence

**None for v1.0.** File-based content only. See [ADR-002](decisions/002-persistence.md).

## 6. Deployment sketch (v1.0)

- Build Vue to static assets; host on static web host / CDN / simple web server  
- HTTPS and DNS  
- Secrets: none required for contact form (there is no form)  
- No application database  
- Provider TBD (U09)  

See [`docs/operations/runbook.md`](../operations/runbook.md).

## 7. Security & safeguarding baseline

HTTPS; no default analytics/ad pixels; child media consent before publishing; no collection of contact-form PII in v1.0.

## 8. Out of scope

Admin app, microservices, payment gateways, OAuth/user accounts, mobile apps, Spring Boot/Postgres for v1.0, contact form.
