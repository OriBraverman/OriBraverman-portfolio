import { defineConfig, devices } from '@playwright/test'

const PROD_URL = process.env.PROD_URL || 'https://oribraverman.github.io/OriBraverman-portfolio/'

export default defineConfig({
  testDir: './e2e',
  testMatch: 'production.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: PROD_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
