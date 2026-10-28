# Operations Runbook (MVP Draft — Option A)

**Status:** Outline — provider and owners TBD (Unknown U09)  
**Scope (v1.0):** Static Vue site on HTTPS; **no** Spring Boot API; **no** application database  
**Aligned with:** [`HUMAN-APPROVAL-RECORD-2026-10-21.md`](../review/HUMAN-APPROVAL-RECORD-2026-10-21.md)

## 1. Environments

| Environment | Purpose |
| --- | --- |
| Local | Developer machines (Vue build/preview when coding authorized) |
| Staging | Content and integration verification |
| Production | Public static site |

Use separate configuration per environment. Never commit secrets.

## 2. Runtime topology (v1.0)

- Frontend: static build on web server or CDN  
- Backend application process: **none** for approved v1.0  
- Database: **none** for approved v1.0  
- TLS at CDN or reverse proxy  
- Health: static uptime check on homepage (no `/actuator` required)  

Docker/Kubernetes are not required for v1.0 static hosting.

## 3. Secrets & configuration

- No SMTP/DB credentials required for v1.0 contact (channels only).  
- If later Option B is approved, store mail secrets outside git.  
- Do not commit `.env` files with real values.

## 4. Deployment (to refine with provider)

1. CI builds frontend (when CI exists and P3+ authorized)  
2. Deploy static assets to staging  
3. Smoke-test critical journeys (nav, donate display, contact channels)  
4. Promote to production with change record  
5. Document rollback (previous static artifact)  

## 5. Backups & recovery

- Content: git history  
- Media: durable storage backups for approved assets  
- No application DB restore procedure for v1.0  

## 6. Monitoring & incidents

- Uptime check on public homepage  
- Incident contacts — assign before launch (U09 / U15)  

## 7. Ownership after handover

Document named owners for domain renewal, hosting payments, dependency updates, content approval, incident response.

## 8. Provider selection checklist

Verify: price, static hosting / CDN support, regional accessibility, TLS, backup costs, and the organization’s ability to operate the service. Java hosting is **not** required for Option A v1.0.
