import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('accessibility smoke', () => {
  for (const path of ['/', '/about', '/activities', '/contact']) {
    test(`no serious/critical axe violations on ${path}`, async ({ page }) => {
      await page.goto(path)
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
      const serious = results.violations.filter((v) =>
        ['serious', 'critical'].includes(v.impact ?? ''),
      )
      expect(serious, JSON.stringify(serious, null, 2)).toEqual([])
    })
  }
})
