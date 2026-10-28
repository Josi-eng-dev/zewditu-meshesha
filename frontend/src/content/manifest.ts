import type { ContentManifest, PageSlug } from '@/types/content'

/** Explicit allowlist of Slice A page slugs. Unknown slugs must not render. */
export const contentManifest: ContentManifest = {
  pages: ['home', 'about', 'activities', 'contact'],
}

export function isAllowlistedPage(slug: string): slug is PageSlug {
  return (contentManifest.pages as string[]).includes(slug)
}
