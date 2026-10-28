# Zewditu Meshesha — Frontend (Slice A)

**Architecture:** Option A — Vue 3 + TypeScript + Vite  
**Authorized scope:** Home, About, Activities, Contact only  
**Authorization:** `docs/review/SLICE-A-AUTHORIZATION-2026-10-21.md`

## Requirements

- Node.js matching `.nvmrc` (24.x recommended)
- npm 10+

## Install

```bash
cd frontend
npm ci
```

If `node_modules` is missing after clone and `npm ci` fails, use `npm install` once to refresh the lockfile under separate Git authorization.

Install Playwright browsers once for E2E/a11y:

```bash
npx playwright install chromium
```

## Development

```bash
npm run dev
```

## Verification (Slice A)

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run preview          # terminal 1
PREVIEW_URL=http://127.0.0.1:4173 npm run check:links
npm run test:e2e         # starts preview via Playwright webServer
npm run check:a11y
```

## Content rules

- Live content lives under `src/content/` with an explicit allowlist in `src/content/manifest.ts`.
- Markdown is rendered with HTML disabled in the parser and sanitized with DOMPurify.
- Contact channels stay pending until `src/content/contact/channels.ts` is marked verified with approved values (U02/U03).
- `extracted_data/` is not used at runtime.
- News, Donate, and Gallery are **not** implemented in Slice A.

## Out of scope

Backend, database, auth, payments, contact form, email delivery, admin CMS, deployment, launch approval.
