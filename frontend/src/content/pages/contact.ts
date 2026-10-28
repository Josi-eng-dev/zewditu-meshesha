import type { PageContent } from '@/types/content'

export const contactPage: PageContent = {
  slug: 'contact',
  title: 'Contact',
  description: 'Contact channels — pending verification (U02/U03)',
  contentApproved: false,
  bodyMarkdown: `
# Contact

Use the channels below when they have been verified and approved for publication.

There is no contact form on this site in v1.0. Messages are not submitted or delivered through this page.
`.trim(),
}
