# 09 — Technical Observations

## Live public stack (from extraction-era discovery)

| Topic | Observation | Class |
| --- | --- | --- |
| CMS | WordPress | Verified via REST extraction |
| Page builder | Elementor on most core pages | Verified in page metadata |
| Theme | Futurio (per extraction audit summary) | Reported in extraction audit |
| API | Public WP REST API `/wp-json/wp/v2/` | Verified by extraction success |
| Hosting OS/web server | Apache/Linux claimed in extraction audit summary | Reported there; not independently re-verified in this docs pass |
| Languages | Amharic primary; some English | Verified in content samples |
| TLS / domain | Site served at `https://zewditumeshesha.org/` | Verified as URL scheme in artifacts |

## Repository technical state (2026-10-21 inspection)

| Topic | Finding |
| --- | --- |
| App code | `frontend/`, `backend/`, `admin/`, `infra/`, `scripts/`, `tests/` exist as empty scaffolds |
| Config stubs | `.env.example`, `docker-compose.yml`, `CONTRIBUTING.md`, `SECURITY.md` empty or placeholder |
| Extraction package | Present under `extracted_data/` (pages, posts, media, metadata, audit notes) |
| Docs | Audit stubs existed; this package fills them |

## Git baseline comparison (no merge performed)

Inspection performed on working tree (branch checked out at inspection time: `zewditu`).

| Ref | Tip commit | Notes |
| --- | --- | --- |
| `main` / `origin/main` | `f676b59` — Merge pull request #1 | Integration branch tip |
| `zewditu` / `origin/zewditu` | `c4bdd7d` — feat(extraction): add extracted site content… | Feature branch tip |
| Merge-base | `c4bdd7d` | Same as `zewditu` tip |
| Ahead/behind (`main`...`zewditu`) | main **1** / zewditu **0** | Only the merge commit |
| Tree hashes | **Identical** (`1083d72…`) | File trees match |

### Recommendation (canonical baseline)

- Treat **`main`** as the **canonical integration branch** for future merges and releases (already contains PR #1 merge commit).
- Treat **`zewditu`** as a historical feature branch whose content is already present in `main`’s tree.
- **Do not merge blindly** — trees already match; a merge would only replay history noise.
- Before coding, sync local checkouts to `origin/main` intentionally (manual, human-approved). This docs package does **not** switch branches.

Untracked at inspection: `docs/CURRENT-STATE.md` (must be preserved).

## Rebuild stack (historical proposal — superseded)

The following was an **early planning proposal** recorded during discovery. It is **not** the approved v1.0 architecture.

- Frontend: Vue 3, TypeScript, Vite  
- Backend: Java 21, Spring Boot, Maven, REST `/api/v1` *(historical proposal only)*  
- Modular monolith; PostgreSQL conditional *(historical proposal only)*  

**Approved v1.0:** Option A — static Vue 3 + TypeScript + Vite with version-controlled content; **no** Spring Boot backend, `/api/v1`, or database in currently approved scope. See [`docs/architecture/decisions/001-stack.md`](../architecture/decisions/001-stack.md) and [`docs/review/HUMAN-APPROVAL-RECORD-2026-10-21.md`](../review/HUMAN-APPROVAL-RECORD-2026-10-21.md).

## Limitations of this observation set

- No production server access, plugin list export, or performance lab results in-repo
- No confirmed SEO crawl report
- No confirmed email delivery path for contact messages
