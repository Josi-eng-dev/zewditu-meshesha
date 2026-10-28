export type PageSlug = 'home' | 'about' | 'activities' | 'contact'

export interface PageContent {
  slug: PageSlug
  title: string
  description: string
  /** Constrained Markdown only — never unsanitized HTML from authors */
  bodyMarkdown: string
  /** When false, page may still route but body should show pending messaging */
  contentApproved: boolean
}

export interface ContactChannels {
  /** True only when org-verified values are present (U02/U03) */
  verified: boolean
  phones: string[]
  emails: string[]
  addressLines: string[]
  pendingMessage: string
}

export interface ContentManifest {
  pages: PageSlug[]
}
