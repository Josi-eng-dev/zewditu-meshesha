import { expect, test } from '@playwright/test'

test.describe('Slice A routes', () => {
  test('primary navigation reaches Home, About, Activities, Contact', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL(/\/about/)
    await expect(page.getByRole('heading', { level: 1, name: 'About' })).toBeVisible()

    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Activities' }).click()
    await expect(page).toHaveURL(/\/activities/)

    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Contact' }).click()
    await expect(page).toHaveURL(/\/contact/)
    await expect(
      page.getByRole('main').getByText(/being confirmed/i),
    ).toBeVisible()
    await expect(page.locator('form')).toHaveCount(0)
  })

  test('unknown paths are not found', async ({ page }) => {
    await page.goto('/news/secret-post')
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
  })

  test('skip link is present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeAttached()
  })
})
