# SauceDemo QA Automation Project

## 📘 Project Overview
This project is a **full QA automation framework** for the [SauceDemo](https://www.saucedemo.com/) web application.  
It leverages **AI-driven QA Library** methodology, modular test cases, and Playwright automation to cover all critical user flows.

**Main goals:**
- Design structured and reusable Test Cases
- Implement an automated testing framework
- Synchronize manual and automated tests
- Generate detailed test reports

---

## 🌐 Platform
- **Application under test:** SauceDemo (https://www.saucedemo.com/)
- **Browsers supported:** Chromium, Firefox, WebKit
- **Test runner:** Playwright Test

---

## 🧠 Project Objectives
- Reusable QA Library with **actions** and **validation helpers**
- Full coverage of critical user flows:
  - Login
  - Inventory (Products)
  - Cart
  - Checkout (Step 1, Step 2, Complete)
  - Logout
- Automated reporting with screenshots and video recordings

---

## 📦 Project Structure


/qa-library
/actions # Reusable test actions (login, cart, checkout)
/validations # Validation helpers (assertions, checks)
/tests # Test scripts
/test-data # Test input data
/reports # Playwright test reports (screenshots, videos, HTML reports)
/pages # Optional: Page Object Model (POM) files
README.md
playwright.config.js
package.json


---

## 🔹 QA Library Highlights
Example reusable actions:

```javascript
// login
loginAsStandardUser(page);

// cart
addProductToCart(productName);
validateCartCount(expectedCount);

// checkout
startCheckout(page);
fillCheckoutForm(page, firstName, lastName, postalCode);
completeCheckout(page);
Purpose: Make test scripts modular, readable, and maintainable.
🔹 Test Case Documentation
Format: Excel (.xlsx)
Minimum 20–30 test cases
Columns: ID | Title | Preconditions | Steps | Test Data | Expected Result | Priority
Includes:
Positive scenarios
Negative scenarios
Edge cases
Linked to QA Library actions
🔹 Automation Implementation
Framework: Playwright + JavaScript
Architecture: Page Object Model (POM) + QA Library
Features:
Headless / headed mode
Screenshots on failure
Video recording for failed tests (optional for all tests)
Modular and reusable code
Test data abstraction

Sample configuration (playwright.config.js):

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
    video: 'retain-on-failure', // change to 'on' to record all tests
  },
};

module.exports = config;
🔹 Running Tests
Install dependencies:
npm install
Run all tests:
npx playwright test
Run a specific test:
npx playwright test qa-library/tests/login.spec.js
🔹 Reporting
Playwright automatically generates:
HTML report
Screenshots for failed tests
Video recordings for failed tests
Open HTML report:
npx playwright show-report
Video files are located in:
test-results/<test-name>/video.webm
Play videos in a browser or VLC Media Player.
🔹 GitHub Repository

Repository structure:

node_modules/
playwright-report/
qa-library/
reports/
test-results/
README.md
package-lock.json
package.json
playwright.config.json

Instructions to push updates:

git add .
git commit -m "Add automation framework and tests"
git push -f origin main
🔹 Bonus Features (Optional)
CI/CD integration (GitHub Actions)
Parallel test execution
Cross-browser testing
Data-driven testing
