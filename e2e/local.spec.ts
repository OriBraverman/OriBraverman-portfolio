import { test, expect } from '@playwright/test'

test.describe('Portfolio — Local E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Ori Braverman/)
  })

  test('hero section is visible', async ({ page }) => {
    await expect(page.getByText("Hi, I'm")).toBeVisible()
    await expect(page.getByText('Ori Braverman', { exact: true })).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Tech' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Projects', exact: true }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'Testimonials' })).toBeVisible()
  })

  test('project filter buttons are rendered', async ({ page }) => {
    const filterContainer = page.getByTestId('project-filter')
    await expect(filterContainer).toBeVisible()

    await expect(page.getByTestId('filter-btn-All')).toBeVisible()
    await expect(page.getByTestId('filter-btn-Web')).toBeVisible()
    await expect(page.getByTestId('filter-btn-Games')).toBeVisible()
    await expect(page.getByTestId('filter-btn-ML')).toBeVisible()
    await expect(page.getByTestId('filter-btn-Systems')).toBeVisible()
  })

  test('clicking filter changes displayed projects', async ({ page }) => {
    // Initially "All" is active — count all cards
    const allCards = page.getByTestId('project-card')
    const initialCount = await allCards.count()
    expect(initialCount).toBeGreaterThan(0)

    // Click "Games" filter
    await page.getByTestId('filter-btn-Games').click()
    const gamesCards = page.getByTestId('project-card')
    const gamesCount = await gamesCards.count()
    expect(gamesCount).toBeLessThan(initialCount)
    expect(gamesCount).toBeGreaterThan(0)

    // Click "All" to reset
    await page.getByTestId('filter-btn-All').click()
    const resetCards = page.getByTestId('project-card')
    const resetCount = await resetCards.count()
    expect(resetCount).toBe(initialCount)
  })

  test('filter to ML shows only ML projects', async ({ page }) => {
    await page.getByTestId('filter-btn-ML').click()
    const cards = page.getByTestId('project-card')
    const count = await cards.count()
    expect(count).toBeGreaterThan(0)

    // Verify Deep Learning project is shown
    await expect(page.getByText('Deep Learning for NLP')).toBeVisible()
  })

  test('about section is present', async ({ page }) => {
    await expect(page.getByText('Building software that matters')).toBeVisible()
  })

  test('tech stack section is present', async ({ page }) => {
    await expect(page.getByText('Technologies I work with')).toBeVisible()
  })

  test('testimonials section is present', async ({ page }) => {
    await expect(page.getByText('What people say')).toBeVisible()
  })

  test('footer is present', async ({ page }) => {
    await expect(page.getByText(/© \d{4} Ori Braverman/)).toBeVisible()
  })
})
