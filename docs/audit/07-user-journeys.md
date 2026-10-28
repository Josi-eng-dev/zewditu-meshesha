# 07 — User Journeys

## Audience (observation + MVP proposal)

| Audience | Goal |
| --- | --- |
| General visitor | Understand who the association is and what it does |
| Prospective donor / supporter | Find verified donation instructions and pledge form |
| Prospective volunteer / visitor | Find contact channels and location information |
| News reader | Read updates and stories |
| Job seeker | Find vacancies (current site has vacancy content; **MVP excludes vacancy workflows**) |

## Current-site journeys (as inferred from public routes)

### J1 — Learn about the organization

1. Land on Home  
2. Navigate to About and/or Activities  
3. Optionally open Gallery or News  

**Friction (observation):** Elementor-heavy pages; long pages; theme sample URLs may confuse if discovered via search.

### J2 — Donate

1. Navigate to Donate  
2. Read static bank instructions  
3. Optionally download pledge form (also linked from Contact)  
4. Complete transfer/pledge offline  

**Friction:** No online payment; must rely on clarity and accuracy of published details.

### J3 — Contact the organization

1. Navigate to Contact Us (or legacy `/contact/`)  
2. Call, email, or visit using published details  
3. Page copy references sending a message, but extracted HTML lacks form fields  

**Friction:** Dual contact URLs; unclear online message path.

### J4 — Follow news

1. Open Blog listing or Home news teasers  
2. Open individual post permalinks  

### J5 — Apply for a job (current site only)

1. Open vacancy page or vacancy posts  
2. Follow application instructions in content  

**MVP:** Not in scope as a managed workflow.

## MVP target journeys (proposal)

| ID | Journey | Success |
| --- | --- | --- |
| M1 | Home → About / Activities | Visitor understands mission and programs from approved text |
| M2 | Any page → Donate | Visitor can follow verified bank + pledge instructions |
| M3 | Any page → Contact | Visitor can use verified channels; form only if delivery confirmed |
| M4 | Gallery | Visitor can browse approved images with captions/alt text |
| M5 | News list → article | Visitor can read approved articles with dates |

Detailed acceptance criteria: [`docs/product/mvp-requirements.md`](../product/mvp-requirements.md) and [`docs/testing/acceptance-checklist.md`](../testing/acceptance-checklist.md).
