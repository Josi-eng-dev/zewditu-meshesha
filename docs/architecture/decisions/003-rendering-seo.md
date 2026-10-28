# ADR 003 — Frontend Rendering & SEO

- **Status:** Open — evaluate before locking frontend foundation (v1.0 is Option A static Vue; **no Spring Boot**)  
- **Date:** 2026-10-21  
- **Decision owner:** Tech lead (volunteer) — name TBD  
- **Acceptance criteria:** For Home and one News article, a crawler/view-source check shows correct title, description, and primary content without requiring a human to execute client JS; choice (CSR / prerender / SSR) recorded as Accepted with that evidence.  
- **Context:** Vue 3 + Vite under Option A. Public charity sites need reliable page-specific titles, descriptions, and crawlable content for the seven MVP areas.

## Options

1. **CSR only** — SPA with client-updated meta tags.  
2. **Prerender** — generate static HTML for known routes at build time (**preferred candidate** for Option A if CSR fails crawler checks).  
3. **SSR** — server-render Vue (e.g. Nuxt) — only if prerender is insufficient; not tied to Spring Boot.

## Decision criteria

- Search engines and link unfurls receive correct title/description/canonical per route  
- Amharic content renders correctly in previews  
- Complexity remains maintainable for volunteers  
- Fits static hosting (Option A)  

## Interim guidance

- Do **not** assume CSR alone is sufficient.  
- When frontend work is authorized, prototype meta tags + crawler view for at least Home and one News article.  
- If CSR fails criteria, prefer **prerender of public routes** before full SSR/Nuxt.

## Consequences

- May affect `frontend/` tooling and deployment artifact shape.  
- Final choice must be recorded by updating this ADR to Accepted/Rejected with evidence.
