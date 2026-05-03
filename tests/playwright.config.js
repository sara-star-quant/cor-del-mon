// Playwright config for Cor del Món tests.
// Boots a local static server (python http.server) on port 8765 before running tests.
// Tests target http://localhost:8765 by default. Override with BASE_URL env var to
// point at the deployed GitHub Pages URL or any other host.

import { defineConfig, devices } from '@playwright/test';

const PORT = 8765;
// Always end with a trailing slash so relative paths (test.html, _shared/...)
// resolve against the correct base, including when the deploy lives at a subpath
// like /cor-del-mon/.
const RAW_BASE = process.env.BASE_URL || `http://localhost:${PORT}`;
const BASE_URL = RAW_BASE.endsWith('/') ? RAW_BASE : RAW_BASE + '/';

export default defineConfig({
  testDir: '.',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : [['list']],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  // Only auto-start a server when targeting localhost. Skip it when BASE_URL points elsewhere.
  webServer: BASE_URL.startsWith('http://localhost') ? {
    command: `python3 -m http.server ${PORT}`,
    cwd: '..',
    port: PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 10_000,
  } : undefined,
});
