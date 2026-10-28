# Slice A dependency record

Recorded at scaffold time (21 October 2026). Exact versions are pinned in `package-lock.json`. Use `npm ci` after clone.

## Runtime

| Package | Role |
| --- | --- |
| `vue` | UI framework |
| `vue-router` | Client routing |
| `markdown-it` | Constrained Markdown (`html: false`) |
| `dompurify` | HTML sanitization after Markdown |

## Tooling

| Package | Role |
| --- | --- |
| `vite` / `@vitejs/plugin-vue` / `typescript` / `vue-tsc` | Build & typecheck |
| `vitest` / `@vue/test-utils` / `jsdom` | Unit tests |
| `eslint` / `typescript-eslint` / `eslint-plugin-vue` | Lint |
| `@playwright/test` / `@axe-core/playwright` | E2E + a11y smoke |

Node: see `.nvmrc` (24).
