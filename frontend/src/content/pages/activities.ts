import type { PageContent } from '@/types/content'

export const activitiesPage: PageContent = {
  slug: 'activities',
  title: 'Activities',
  description: 'Programmes and activities — content pending organizational approval',
  contentApproved: false,
  bodyMarkdown: `
# Activities

This page will describe the association’s programmes once text is approved for publication.

No programme claims or photographs are loaded from the extraction archive at runtime.
`.trim(),
}
