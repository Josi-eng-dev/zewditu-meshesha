import { isAllowlistedPage } from '@/content/manifest'
import { homePage } from '@/content/pages/home'
import { aboutPage } from '@/content/pages/about'
import { activitiesPage } from '@/content/pages/activities'
import { contactPage } from '@/content/pages/contact'
import { contactChannels } from '@/content/contact/channels'
import type { ContactChannels, PageContent, PageSlug } from '@/types/content'

const pages: Record<PageSlug, PageContent> = {
  home: homePage,
  about: aboutPage,
  activities: activitiesPage,
  contact: contactPage,
}

export function getPageContent(slug: string): PageContent | null {
  if (!isAllowlistedPage(slug)) {
    return null
  }
  return pages[slug]
}

export function getContactChannels(): ContactChannels {
  return contactChannels
}

export function listAllowlistedPages(): PageSlug[] {
  return Object.keys(pages) as PageSlug[]
}
