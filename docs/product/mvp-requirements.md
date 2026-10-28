# MVP Requirements — Zewditu Public Website

**Version:** 1.0 (proposed)  
**Status:** Draft for organizational / product review  
**Related:** [`docs/IMPLEMENTATION-PLAN.md`](../IMPLEMENTATION-PLAN.md), [`docs/audit/11-audit-summary.md`](../audit/11-audit-summary.md)

## 1. Objective

Deliver a responsive, accessible public website that accurately communicates the association's identity, activities, news, contact information, and existing donation process.

## 2. In scope (first release)

| Area | Requirement summary |
| --- | --- |
| Home | Organization introduction, approved featured activities, selected news, donation CTA, contact pointers |
| About | Verified history, mission, vision, identity; leadership only if confirmed |
| Activities | Approved program descriptions; approved photos where available |
| Donate | Verified bank details; approved mobile-money only if confirmed; pledge form download; clear offline instructions |
| Contact | Verified channels and location if approved; message workflow only if delivery confirmed |
| Gallery | Selected approved photographs with captions, alt text, sensible sizes |
| News | Listing, article pages, dates, category navigation as approved |

## 3. Explicitly out of scope (MVP)

- Online payment processing and payment gateways
- User registration, login, and donor accounts
- Custom staff admin portal or CMS
- Job application management and vacancy workflows
- Live chat, push notifications, and mobile applications
- Unverified organizational claims, statistics, or impact dashboards
- Advertising pixels / unnecessary visitor tracking (default off)

## 4. Donations & contact rules

- **Donations:** Existing static bank details and pledge form remain the method, subject to verifying accuracy and obtaining organizational approval (Unknown U01).
- **Contact (v1.0 recorded):** Verified contact channels only — no form, no email-delivery backend ([approval record](../review/HUMAN-APPROVAL-RECORD-2026-10-21.md)). Never imply a message was submitted or delivered. Channel **values** still require verification (U02/U03); named U04 owner remains TBD.

## 5. Success criteria (acceptance goals)

The MVP is successful when:

1. Visitors can find accurate organizational information and navigate all seven areas.
2. The website works on mobile, tablet, and desktop.
3. Approved content and images are migrated with correct attribution and context.
4. Important existing URLs are mapped to new URLs or redirected appropriately.
5. Contact and donation instructions work as documented.
6. The site passes accessibility, functional, security, and performance checks (targets to be quantified before testing).
7. An authorized organizational representative approves content and launch.

These are proposed acceptance goals. Exact numerical performance targets and accessibility conformance level must be written before testing begins (see [`docs/testing/acceptance-checklist.md`](../testing/acceptance-checklist.md)).

## 6. Non-functional requirements (initial)

| Area | Requirement |
| --- | --- |
| Accessibility | Semantic HTML, keyboard access, visible focus, contrast, labels, image alternatives; conformance target TBD |
| SEO | Unique titles/descriptions, canonical URLs, crawlable content strategy per ADR-003 |
| Performance | Optimized images; mobile-friendly weight; metrics TBD |
| Security | HTTPS, validated inputs, no secrets in repo, rate limits on any POST endpoint |
| Privacy / safeguarding | Minimum data collection; media consent for children; no default analytics |
| i18n | Support Amharic and English **where source material and org policy justify** (U12) |

## 7. User stories (concise)

1. As a visitor, I can understand who the association is from Home and About.  
2. As a visitor, I can learn what programs exist from Activities.  
3. As a supporter, I can follow offline donation instructions and download the pledge form.  
4. As a visitor, I can find how to reach the association.  
5. As a visitor, I can browse approved gallery images.  
6. As a reader, I can list and open news articles with dates.

## 8. Dependencies on unknowns

Critical: U01, U02, U03, U04, U06, U07, U15 in [`docs/audit/10-unknowns.md`](../audit/10-unknowns.md).
