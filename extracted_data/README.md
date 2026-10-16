# Extracted Site Data — Zewditu Meshesha Children and Family Welfare Association

> **Self-Contained Extraction Workspace**  
> Source: [https://zewditumeshesha.org/](https://zewditumeshesha.org/)  
> Extracted Date: October 2026  
> Workspace Folder: `extracted_data/`

---

## 📌 Executive Summary

This folder contains a complete extraction of all publicly accessible structured data, content, taxonomies, and media assets from the live WordPress website of **Zewditu Meshesha Children and Family Welfare and Development Association** (`https://zewditumeshesha.org/`).

All data has been parsed, cleaned, and organized into both developer-friendly formats (JSON, raw HTML) and human-readable Markdown (`.md`) documents. This repository subfolder is completely isolated so you and your teammates can collaborate without merge conflicts.

---

## 📊 Extraction Statistics

| Item | Count | Description / Details |
|---|---|---|
| **Pages** | 17 | 9 active organizational pages (Home, About Us, Activities, Donate, Contact, Gallery, etc.) + 8 theme sample pages |
| **Published Posts** | 30 | Full articles in Amharic & English covering news, events, partnerships, and announcements |
| **Categories** | 4 | News (25), Blog (6), Uncategorized (5), Vacancy (2) |
| **Tags** | 5 | Content classification tags |
| **Media Attachments** | 400 | Complete inventory of all registered media items in the WordPress media library |
| **Official Documents** | 3 | Official Pledge Form PDF, Pledge Form DOCX, and organization PDF |
| **Brand Assets** | 2 | Official site logo (`g2.png`) and site icon / favicon (`cropped-g2.png`) |
| **Core Images Downloaded** | 44+ | Post featured images, recent event photos, hero banners, and gallery assets |

---

## 📂 Directory Layout

```text
extracted_data/
├── README.md                      # This comprehensive documentation guide
├── site_manifest.json             # Master manifest with metadata, stats, and key asset URLs
│
├── metadata/                      # Site-wide settings and taxonomies
│   ├── site_info.json             # Site title, tagline, namespaces, and core config
│   ├── categories.json            # WordPress categories with post counts
│   └── tags.json                  # WordPress tags
│
├── pages/                         # All 17 pages from the website
│   ├── pages_index.json           # Index table of all pages with metadata and content length
│   ├── all_pages_raw.json         # Raw untouched JSON payload from WordPress REST API
│   │
│   ├── home.md                    # Clean Markdown: Hero, stats, mission, call-to-actions
│   ├── about-us.md                # Clean Markdown: Founding history (1991), registration 0528, vision
│   ├── activities.md              # Clean Markdown: Daycare, foster care, tutoring, feeding
│   ├── donate.md                  # Clean Markdown: Bank accounts (CBE, Telebirr) & pledge forms
│   ├── contact-us.md              # Clean Markdown: Addis Ababa address, phone, email, map
│   ├── gallery-2.md               # Clean Markdown: Complete gallery photo links and captions
│   ├── job-vacancy-storekeeper.md # Clean Markdown: Job posting requirements and deadlines
│   │
│   ├── raw_html/                  # Raw rendered HTML for each page (including Elementor markup)
│   └── json/                      # Full REST API JSON object for each page
│
├── posts/                         # All 30 published blog & news articles
│   ├── posts_index.json           # Catalog of all posts (titles, dates, slugs, categories, featured media)
│   ├── all_posts_raw.json         # Complete raw JSON payload of all posts
│   │
│   ├── post_{id}.md               # Clean Markdown version of each post with Amharic & English text
│   ├── raw_html/                  # Rendered HTML article body for each post
│   └── json/                      # Full REST API JSON payload for each post
│
├── media/                         # Media assets, inventories, and downloaders
│   ├── media_inventory.json       # Metadata for all 400 media library items (URLs, dimensions, dates)
│   ├── media_inventory.csv        # Spreadsheet format for easy viewing in Excel or Google Sheets
│   ├── download_all_media.py      # Standalone script to download all 400 media items on demand
│   │
│   ├── documents/                 # Downloaded official documents
│   │   ├── የተስፋ-ሰነድ_Pledge-Form.pdf  # Official sponsorship pledge form (PDF, 78 KB)
│   │   ├── የተስፋ-ሰነድ_Pledge-Form.docx # Editable pledge form (Word DOCX)
│   │   └── m2-agents.pdf          # Organization PDF document
│   │
│   └── images/                    # Key brand and featured images downloaded locally
│       ├── logo_g2.png            # Site logo
│       ├── favicon_cropped_g2.png # Site favicon / icon
│       ├── post_*_featured.jpg    # Featured images for all news posts
│       └── media_*                # Recent high-resolution gallery and event images
│
└── audit_documentation/           # Formatted audit reports ready for `docs/audit/`
    ├── 02-page-inventory.md       # Complete audited page inventory table
    ├── 03-url-inventory.md        # Canonical URL inventory
    ├── 04-content-inventory.md    # Content map and organizational facts
    ├── 06-media-inventory.md      # Media audit breakdown
    └── 11-audit-summary.md        # Executive audit summary
```

---

## 🏢 Key Verified Organizational Facts

*(Preserved directly from the live site for the platform rebuild)*

- **Organization Name:** Zewditu Meshesha Children and Family Welfare and Development Association  
  *(የዘውዲቱ መሸሻ የህፃናትና ቤተሰብ በጎ አድራጎትና ልማት ማህበር)*
- **Registration Number:** Reg. No. **0528** (initially registered as 3023 in 2010 by Agency for Civil Society Organizations / ACSO)
- **Year Established:** **1991 G.C.**
- **Founder:** **Emebereket Zewditu Meshesha** (Celebrated 85th birthday recently in 2026)
- **Impact to Date:** Fostered over **250** orphan and vulnerable children with family-style care, food, education, and shelter.
- **Physical Address:** Addis Ababa, Ethiopia (Gulele Sub-city).
- **Core Programs:**
  1. *Daycare Program:* Support for infants and toddlers of low-income mothers.
  2. *Foster Family Care:* Providing loving family-based upbringing for orphans.
  3. *Education & Tutoring:* School uniforms, supplies, school fees, and after-school tutoring.
  4. *Nutrition & Feeding:* Balanced daily meals and community bread/food sharing during holidays.
  5. *Health & Psycho-social Support:* Medical checkups in partnership with hospitals (e.g. St. Peter's Hospital) and counseling.
  6. *Women & Family Empowerment:* Financial literacy and livelihood training in collaboration with partners (e.g. Enat Bank).

---

## 💡 How to Use This Data in Your Project

### 1. For Building the Frontend (`frontend/`)
- Use the clean Markdown files in `pages/` (`home.md`, `about-us.md`, `activities.md`, `donate.md`, `contact-us.md`) as the primary copy and structure for your Next.js / React components.
- Use the downloaded images in `media/images/` and documents in `media/documents/` as static assets (`public/assets/` or CMS assets).
- Use `posts/posts_index.json` and the markdown posts in `posts/` to populate your blog/news pages.

### 2. For Collaborating with Your Teammate
- This entire folder (`extracted_data/`) is self-contained. It will not interfere with any work your teammate is doing on `docs/`, `frontend/`, or `backend/`.
- If your teammate wants to review or update the audit documentation, the ready-to-use drafts are in `extracted_data/audit_documentation/` and can be copied directly into `docs/audit/`.

### 3. Downloading All 400 Media Files
If you or your teammate need all 400 media items offline (including all historical gallery photos):
```powershell
cd extracted_data\media
python download_all_media.py
```
This script will concurrently download all 400 files into `extracted_data/media/all_downloads/` and skip files that are already downloaded.
