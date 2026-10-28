import { describe, expect, it } from 'vitest'
import { getContactChannels, getPageContent, listAllowlistedPages } from '@/lib/contentLoader'
import { isAllowlistedPage } from '@/content/manifest'

describe('content allowlist', () => {
  it('lists only Slice A pages', () => {
    expect(listAllowlistedPages().sort()).toEqual(
      ['about', 'activities', 'contact', 'home'].sort(),
    )
  })

  it('rejects unknown slugs', () => {
    expect(isAllowlistedPage('news')).toBe(false)
    expect(getPageContent('news')).toBeNull()
    expect(getPageContent('donate')).toBeNull()
    expect(getPageContent('../etc/passwd')).toBeNull()
  })

  it('loads allowlisted pages', () => {
    expect(getPageContent('home')?.slug).toBe('home')
    expect(getPageContent('contact')?.slug).toBe('contact')
  })
})

describe('contact channels gate', () => {
  it('starts unverified with no invented channel values', () => {
    const channels = getContactChannels()
    expect(channels.verified).toBe(false)
    expect(channels.phones).toEqual([])
    expect(channels.emails).toEqual([])
    expect(channels.addressLines).toEqual([])
    expect(channels.pendingMessage.length).toBeGreaterThan(0)
  })
})
