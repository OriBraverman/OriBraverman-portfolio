import { test, expect } from '@playwright/test'

test.describe('Portfolio — Production E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Ori Braverman/)
  })

  test('hero section renders correctly', async ({ page }) => {
    await expect(page.getByText("Hi, I'm")).toBeVisible()
    await expect(page.getByText('Ori Braverman', { exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'View Projects' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'GitHub Profile' })).toBeVisible()
  })

  test('all navigation links are present and clickable', async ({ page }) => {
    const navLinks = ['About', 'Tech', 'Testimonials']
    for (const label of navLinks) {
      const link = page.getByRole('link', { name: label, exact: true }).first()
      await expect(link).toBeVisible()
    }
    await expect(page.getByRole('link', { name: 'Projects', exact: true }).first()).toBeVisible()
  })

  test('all project filter buttons render and function', async ({ page }) => {
    const filters = ['All', 'Web', 'Games', 'ML', 'Systems']
    for (const f of filters) {
      await expect(page.getByTestId(`filter-btn-${f}`)).toBeVisible()
    }

    // Get initial project count
    const initialCount = await page.getByTestId('project-card').count()
    expect(initialCount).toBeGreaterThan(0)

    // Test each filter
    for (const f of filters) {
      await page.getByTestId(`filter-btn-${f}`).click()
      const count = await page.getByTestId('project-card').count()
      if (f === 'All') {
        expect(count).toBe(initialCount)
      } else {
        expect(count).toBeLessThanOrEqual(initialCount)
        expect(count).toBeGreaterThan(0)
      }
    }
  })

  test('filter returns to full list when All is clicked', async ({ page }) => {
    const initialCount = await page.getByTestId('project-card').count()

    await page.getByTestId('filter-btn-Games').click()
    const filtered = await page.getByTestId('project-card').count()
    expect(filtered).toBeLessThan(initialCount)

    await page.getByTestId('filter-btn-All').click()
    const restored = await page.getByTestId('project-card').count()
    expect(restored).toBe(initialCount)
  })

  test('about section is rendered', async ({ page }) => {
    await expect(page.getByText('Building software that matters')).toBeVisible()
  })

  test('tech stack section is rendered', async ({ page }) => {
    await expect(page.getByText('Technologies I work with')).toBeVisible()
  })

  test('testimonials section is rendered', async ({ page }) => {
    await expect(page.getByText('What people say')).toBeVisible()
  })

  test('footer renders with copyright', async ({ page }) => {
    await expect(page.getByText(/© \d{4} Ori Braverman/)).toBeVisible()
  })

  test('GitHub links open correctly', async ({ page }) => {
    const ghLink = page.getByRole('link', { name: 'GitHub Profile' })
    await expect(ghLink).toHaveAttribute('href', 'https://github.com/OriBraverman')
    await expect(ghLink).toHaveAttribute('target', '_blank')
  })

  test('project cards contain GitHub links', async ({ page }) => {
    const codeLinks = page.getByRole('link', { name: 'Code' })
    const count = await codeLinks.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const href = await codeLinks.nth(i).getAttribute('href')
      expect(href).toContain('github.com/OriBraverman')
    }
  })
})
