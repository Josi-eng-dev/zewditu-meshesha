# Acceptance Checklist — MVP Launch Gate

**Status:** Draft — numerical a11y/performance targets TBD before test execution  
**Source:** MVP requirements § Success criteria

## A. Content

- [ ] Approved text on all seven areas  
- [ ] Dates, internal links, and images correct for approved set  
- [ ] Donation instructions match organization-confirmed values  
- [ ] Contact channels match organization-confirmed values  
- [ ] No unverified statistics published  
- [ ] No theme-demo pages in production IA  

## B. Frontend

- [ ] Navigation to all seven areas works  
- [ ] Responsive layouts: mobile, tablet, desktop  
- [ ] Loading / empty / error states behave correctly  
- [ ] Amharic script renders acceptably with chosen fonts  

## C. Backend / API

- [ ] Response contracts match OpenAPI  
- [ ] Validation and error format consistent  
- [ ] List endpoints paginated / bounded  
- [ ] Operational endpoints restricted  
- [ ] No auth endpoints exposed accidentally  

## D. Database (if used)

- [ ] Migrations apply cleanly  
- [ ] Constraints and integrity verified  
- [ ] Backup/restore tested  

## E. Contact

- [ ] If form enabled: successful delivery to monitored inbox  
- [ ] Invalid input rejected  
- [ ] Spam/abuse controls verified  
- [ ] Failure path does not claim success  
- [ ] If form disabled: channels-only UX clear  

## F. Accessibility

- [ ] Keyboard operation for primary journeys  
- [ ] Semantic structure and labels  
- [ ] Contrast and visible focus  
- [ ] Image alternatives for content images  
- [ ] Conformance target (e.g. WCAG 2.2 AA) decided and tested  

## G. SEO

- [ ] Titles, descriptions, canonicals per page  
- [ ] Crawlability strategy per ADR-003 validated  
- [ ] Sitemap / robots as applicable  

## H. Performance

- [ ] Images optimized and sized  
- [ ] Page weight acceptable on mobile target (metric TBD)  
- [ ] Critical pages meet agreed timing budget (TBD)  

## I. Security

- [ ] Dependency vulnerability review  
- [ ] No secrets in repository  
- [ ] HTTPS enforced  
- [ ] Public POST rate-limited if present  
- [ ] Common web vulnerability review performed  

## J. Migration

- [ ] Missing assets resolved  
- [ ] Broken links checked  
- [ ] Redirect coverage for important legacy URLs tested  

## K. Browser / E2E

- [ ] Critical journeys pass in supported desktop and mobile browsers (matrix TBD)  
- [ ] Playwright (or equivalent) suite green on staging  

## Launch gate (must all be true)

- [ ] All seven areas implemented and content-approved  
- [ ] No known critical/high defects unresolved  
- [ ] Critical journeys pass E2E  
- [ ] Contact + donation instructions verified  
- [ ] Important old URLs have documented outcomes  
- [ ] Production configuration reviewed  
- [ ] Backups tested if persistent data used  
- [ ] Authorized organizational representative approves release  
