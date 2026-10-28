import type { PageContent } from '@/types/content'

export const aboutPage: PageContent = {
  slug: 'about',
  title: 'About',
  description: 'About the association — content pending organizational approval',
  contentApproved: false,
  bodyMarkdown: `
# About

This About section is reserved for verified organizational history, mission, and identity.

Extracted WordPress text is not used as live runtime content. Approved copy will replace this scaffold after review.

Unverified impact statistics are intentionally omitted.
`.trim(),
}
