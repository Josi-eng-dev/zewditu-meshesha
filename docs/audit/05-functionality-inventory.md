# 05 — Functionality Inventory

Based on extracted page HTML/Markdown and public WordPress API usage during extraction. No WordPress admin access was used.

## Public content delivery

| Function | Observation | Evidence |
| --- | --- | --- |
| Static/marketing pages | Elementor-rendered pages for Home, About, Activities, Donate, Contact Us, Gallery | Page metadata `is_elementor: true` |
| Blog listing | `/blog/` route exists; extracted page content length 0 | `pages_index.json` |
| Single posts | Standard WP post permalinks with dates | `posts_index.json` |
| Media files | Served from `/wp-content/uploads/...` | Media inventory URLs |
| Public REST API | `/wp-json/wp/v2/` used successfully for extraction | Extraction artifacts |

## Navigation & IA (observation)

Primary organizational destinations present as public routes: Home, About, Activities, Donate, Contact Us, Gallery, Blog. Exact menu widget configuration was not separately exported; treat menu structure as **observation pending live menu capture**.

## Donations

| Function | Present? | Notes |
| --- | --- | --- |
| Display bank / account instructions | Yes (in extracted Donate content) | Static text |
| Download pledge form (PDF/DOCX) | Yes | Files in media library + local copies |
| Online payment / gateway checkout | Not observed | No payment processor flow in extracted donate content |
| Donor accounts / receipts | Not observed | |

## Contact

| Function | Present? | Notes |
| --- | --- | --- |
| Display phone / email / address | Yes | Multiple pages |
| Download pledge form from Contact page | Yes | Button link to PDF |
| HTML contact form fields (`input`/`textarea`) | **Not found** in extracted `420_contact-us.html` | Page copy invites messages/calls, but extracted body lacks form controls |
| Confirmed message delivery (email plugin, CRM) | Unknown | Not observable from extraction |

## Gallery

| Function | Present? | Notes |
| --- | --- | --- |
| Image gallery page | Yes | Large Elementor gallery page |
| Lightbox / gallery plugin details | Partially observable via markup | Exact plugin set not inventoried |

## Search, auth, admin, vacancies

| Function | Present? | Notes |
| --- | --- | --- |
| Site search | Unknown | Not confirmed in extraction package |
| User registration / login (public) | Not observed in extracted public pages | WP admin login path unknown/not probed |
| Job vacancy page + posts | Yes | Out of MVP workflow scope |
| Online job application system | Not observed | Content-only vacancy posts/page |

## External services (observation)

- Google Maps or embed: mentioned in earlier narrative; **map embed presence not confirmed** in the contact extraction snippet reviewed — mark Unknown if not verified in full HTML.
- Email provider for `zewdituassociation@gmail.com`: Unknown
- CDN / analytics / pixels: Not inventoried — treat as Unknown; MVP default is no advertising pixels

## Implications for MVP rebuild

- Donation UX can mirror **static instructions + pledge download** without payment APIs.
- Contact form must not be implemented as “message sent” unless a verified delivery path exists (see ADR `004-contact-handling.md`).
- News and gallery need content APIs or static content serving; no CMS required for MVP.
