import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'

const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: false,
})

const SAFE_HREF = /^(https?:|mailto:|tel:|#|\/)/i

md.validateLink = (url: string) => SAFE_HREF.test(url)

const defaultRender =
  md.renderer.rules.link_open ??
  ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  const hrefIndex = token.attrIndex('href')
  if (hrefIndex >= 0 && token.attrs) {
    const href = String(token.attrs[hrefIndex][1] ?? '')
    if (!SAFE_HREF.test(href)) {
      token.attrs[hrefIndex][1] = '#'
    } else if (href.startsWith('http')) {
      token.attrSet('rel', 'noopener noreferrer')
    }
  }
  return defaultRender(tokens, idx, options, env, self)
}

const ALLOWED_TAGS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'p',
  'ul',
  'ol',
  'li',
  'strong',
  'em',
  'a',
  'br',
  'blockquote',
  'code',
  'pre',
]

const ALLOWED_ATTR = ['href', 'title', 'target', 'rel']

/**
 * Render constrained Markdown to sanitized HTML.
 * Author HTML in source is disabled at the Markdown parser.
 */
export function renderSafeMarkdown(source: string): string {
  const raw = md.render(source)
  return DOMPurify.sanitize(raw, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
  })
}
