import type { PageContent } from '@/types/content'

/**
 * Scaffold copy for Slice A technical completion.
 * Not organizational content approval — replace after org sign-off.
 * No impact statistics or donation details included.
 */
export const homePage: PageContent = {
  slug: 'home',
  title: 'Home',
  description: 'Zewditu Meshesha Children and Family Welfare and Development Association',
  contentApproved: false,
  bodyMarkdown: `
# Zewditu Meshesha Children and Family Welfare and Development Association

Welcome to the public website rebuild (Slice A technical scaffold).

Approved organizational narrative, programme highlights, and verified contact details will appear here after content review.

This page does not publish donation account numbers, impact statistics, or photographs pending authorization.
`.trim(),
}
