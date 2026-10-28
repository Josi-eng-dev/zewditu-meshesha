# 06 — Media Inventory

Reconciled from `extracted_data/audit_documentation/06-media-inventory.md` and `extracted_data/media/`.

## Overview (WordPress media library)

| Metric | Count / detail | Evidence |
| --- | --- | --- |
| Total media items | 400 | `media_inventory.csv` / `.json` |
| JPEG | 387 | Extraction audit |
| PNG | 9 | Extraction audit |
| PDF | 2 | Pledge form + `m2-agents.pdf` |
| DOCX | 1 | Pledge form |
| Video | 1 | `mov_bbb.mp4` (sample-like name — review before reuse) |

## Locally downloaded in this repository

| Asset group | Count / files |
| --- | --- |
| Images under `extracted_data/media/images/` | 44 files |
| Documents under `extracted_data/media/documents/` | Pledge Form PDF, Pledge Form DOCX, `m2-agents.pdf` |
| Downloader script | `extracted_data/media/download_all_media.py` |

**Gap:** Most of the 400 library items are inventoried by URL/metadata only. Do not assume remote URLs remain available or that every item is approved for republishing.

## Key brand / document assets (as inventoried)

| Asset | Type | Source URL (as recorded) | Purpose |
| --- | --- | --- | --- |
| `g2.png` / `logo_g2.png` | PNG | `.../2021/11/g2.png` | Logo |
| `cropped-g2.png` / favicon | PNG | `.../2021/11/cropped-g2.png` | Icon |
| የተስፋ-ሰነድ_Pledge-Form.pdf | PDF | `.../2026/03/...` | Pledge form |
| የተስፋ-ሰነድ_Pledge-Form.docx | DOCX | `.../2026/03/...` | Editable pledge form |

## Safeguarding note

Many gallery and news images may depict identifiable children. **Reuse requires organizational media consent / safeguarding confirmation.** Until then, treat images as candidate assets only.

## Full catalog

- `extracted_data/media/media_inventory.csv`
- `extracted_data/media/media_inventory.json`
