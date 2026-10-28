import { describe, expect, it } from 'vitest'
import { renderSafeMarkdown } from '@/lib/markdown'

describe('renderSafeMarkdown', () => {
  it('renders headings and paragraphs from markdown', () => {
    const html = renderSafeMarkdown('# Hello\n\nA paragraph.')
    expect(html).toContain('<h1>')
    expect(html).toContain('Hello')
    expect(html).toContain('<p>')
  })

  it('does not execute raw HTML from the source string', () => {
    const html = renderSafeMarkdown('Safe text <script>alert(1)</script> **bold**')
    expect(html).not.toContain('<script>')
    expect(html).toContain('<strong>')
    expect(html).toContain('Safe text')
  })

  it('does not create an actionable javascript: hyperlink', () => {
    const html = renderSafeMarkdown('[link](javascript:alert(1))')
    expect(html).not.toMatch(/href=["']javascript:/i)
    expect(html).not.toMatch(/<a\b[^>]*javascript:/i)
  })
})


