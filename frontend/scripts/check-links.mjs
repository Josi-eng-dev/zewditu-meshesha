/**
 * Checks that Slice A allowlisted routes respond 200 from the preview server.
 * Usage: start `npm run preview` (or rely on Playwright webServer) then:
 *   PREVIEW_URL=http://127.0.0.1:4173 npm run check:links
 */
const base = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4173'
const paths = ['/', '/about', '/activities', '/contact']

let failed = 0
for (const path of paths) {
  const url = new URL(path, base).href
  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.error(`FAIL ${url} → ${res.status}`)
      failed += 1
    } else {
      console.log(`OK   ${url}`)
    }
  } catch (err) {
    console.error(`FAIL ${url} → ${err.message}`)
    failed += 1
  }
}

if (failed) {
  process.exit(1)
}
