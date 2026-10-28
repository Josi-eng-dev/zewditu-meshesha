# 04 — Content Inventory

Reconciled from `extracted_data/audit_documentation/04-content-inventory.md` and page/post Markdown under `extracted_data/`.

**Important:** Content below appears on the current public site / extraction. Republishing requires organizational approval. Impact statistics and donation details must be re-confirmed before launch.

## 1. Organizational identity (as published on site)

| Field | Content as published | Evidence class |
| --- | --- | --- |
| English name | Zewditu Meshesha Children and Family Welfare and Development Association (variants in Amharic transliteration also appear) | Verified in extraction |
| Amharic name | የዘውዲቱ መሸሻ የህፃናትና ቤተሰብ በጎ አድራጎትና ልማት ማህበር (and related spellings in pages) | Verified in extraction |
| Registration narrative | Agency of Charities and Societies; earlier number 3023 (2010), later Reg. No. 0528 | Verified as published text in About extraction |
| Founding | 1991 G.C.; founder named as Zewditu Meshesha / Emebereket Zewditu Meshesha in materials | Verified as published text |
| Impact claims | About text includes figures such as “over 250 children” fostered and other beneficiary counts | **Published claim — must re-verify before MVP republish; MVP excludes unverified statistics dashboards** |

## 2. Program themes (Activities / About)

As described in extracted Activities/About content:

- Daycare / early childhood care
- Foster / family-style care for orphans and vulnerable children
- Education / tutoring / school materials support
- Nutrition / feeding
- Family and community support; partnerships mentioned in news (e.g. hospitals, banks, Ethio Telecom)

Treat program wording as **candidate content** until an authorized reviewer approves exact text for the new site.

## 3. Donation information (Donate page extraction)

Observed in `extracted_data/pages/donate.md` / `raw_html/435_donate.html`:

- Commercial Bank of Ethiopia account number and SWIFT code as published
- Bank of Abyssinia dollar account number as published
- Contact phones and postal box as published on that page
- Pledge form PDF linked from Contact Us and present under `extracted_data/media/documents/`

### Inconsistency (must resolve)

| Claim | Where | Status |
| --- | --- | --- |
| Awash Bank / Telebirr donation channels | `extracted_data/audit_documentation/02-page-inventory.md`, `04-content-inventory.md`, `extracted_data/README.md` | **Not found** in extracted Donate page HTML/Markdown |
| CBE + Bank of Abyssinia | Donate page extraction | Present in page artifacts |

**Decision:** Do not treat Telebirr/Awash as verified for migration until confirmed by the organization or found in other approved source material.

## 4. Contact information (as published)

From Contact Us / footers in extraction:

- Address: Addis Ababa, Yeka Sub-city / Yeka woreda 12, House No. 1274 (Kotebe Mesalemia / around Kotebe Gebriel)
- Email: `zewdituassociation@gmail.com`
- Multiple phone numbers listed across pages (values differ slightly by page — see unknowns)

Historical note in About: previous Gulele rented house vacated; not the same as current published address.

## 5. News & stories

- **30** published posts in extraction
- Languages: predominantly Amharic; some English (e.g. vacancy post)
- Categories observed on posts: News, Blog, Vacancy, Uncategorized

## 6. Content not suitable for MVP without review

- Theme sample / Gutenberg demo pages (placeholder Latin filler text)
- Vacancy application workflows (MVP excludes vacancy management)
- Unapproved photographs of identifiable children
- Unverified numeric impact claims for dashboards or hero stats

## Source files

- Pages: `extracted_data/pages/*.md`, `json/`, `raw_html/`
- Posts: `extracted_data/posts/`
- Manifest: `extracted_data/site_manifest.json`
