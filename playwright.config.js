// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Folder where your tests are located (adjust path and case exactly!)
  testDir: './qa-library/tests',

  // Pattern to find test files
  testMatch: ['**/*.spec.js'],

  // Timeout for each test in milliseconds
  timeout: 30 * 1000,

  // Retries on failure (optional)
  retries: 1,

  // Reporter configuration - output HTML reports by default
  reporter: [['html', { outputFolder: 'reports/html-report', open: 'never' }]],

  // Shared settings for all tests
  use: {
    // Run tests headless or not
    headless: true,

    // Browser viewport size
    viewport: { width: 1280, height: 720 },

    // Base URL for tests - helps use relative URLs in tests
    baseURL: 'https://www.saucedemo.com',

    // Capture screenshot on failure
    screenshot: 'only-on-failure',

    // Collect trace for debugging failed tests
    trace: 'retain-on-failure',
  },

  // Projects allow running tests in multiple browsers/configs (optional)
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
};

module.exports = config;

});
