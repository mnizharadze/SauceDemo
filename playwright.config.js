/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './qa-library/tests',
  timeout: 60000,           
  expect: { timeout: 10000 },
  reporter: [['html', { open: 'never' }]],

  use: {
    headless: false,         
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20000,    
    navigationTimeout: 30000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};

module.exports = config;