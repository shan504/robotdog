import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  workers: 2,
  reporter: [['list']],
  outputDir: '/tmp/robotdog-playwright-results',
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4321',
    viewport: { width: 1440, height: 1000 },
    browserName: 'chromium',
    launchOptions: {
      executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
      args: ['--no-sandbox', '--disable-dev-shm-usage'],
    },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
