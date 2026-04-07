AI Driven QA Automation – SauceDemo
🌐 Project Overview

This project is a complete QA Automation framework for the SauceDemo
 web application. It leverages AI + QA Library approach to create structured, reusable test cases and automate them using Playwright.

The framework includes:

Modular QA Library with reusable actions and validation helpers
Test cases aligned with manual documentation
Automated test execution using Playwright
Reporting with screenshots, videos, and HTML reports
🧠 Objective

The goal is to build a full QA system that covers:

Test Design (QA Library approach)
Test Case Documentation (Excel)
Test Automation (Code + Framework)
Reporting (HTML reports, screenshots, videos)
🗂 Repository Structure
node_modules/           # Project dependencies (auto-generated)
playwright-report/      # Playwright HTML report of last run
qa-library/             # Reusable actions and validation helpers
reports/                # Custom test reports folder
test-results/           # Screenshots and videos per test run
README.md               # Project documentation
package.json            # Project config and dependencies
package-lock.json       # Lock file for npm
playwright.config.json  # Playwright configuration
💻 Technologies
Automation Framework: Playwright
Language: JavaScript
Test Structure: QA Library, reusable functions, modular design
Reporting: Playwright HTML Report, screenshots, video recordings
⚙️ Installation
Clone the repository:
git clone https://github.com/mnizharadze/SauceDemo.git
cd SauceDemo
Install dependencies:
npm install
Ensure Playwright browsers are installed:
npx playwright install
🧪 Running Tests

Run all tests:

npx playwright test

Run tests in a specific file:

npx playwright test qa-library/tests/<test-file>.spec.js

Run tests headed (with browser visible):

npx playwright test --headed
📊 Test Reporting

After running tests:

HTML Report:
npx playwright show-report

Located in playwright-report/.

Screenshots & Videos:
Screenshots of failures and videos for all tests are saved in test-results/.
Each test has a folder with media attached for debugging.
Custom Reports:
reports/ folder can be used for any aggregated reports you generate.
🛠 QA Library

Reusable functions and actions are located in qa-library/. Example functions:

loginAsStandardUser(page) – logs in a standard user
addProductToCart(page, productName) – adds a product to the cart
validateCartCount(page, expectedCount) – validates cart item count
startCheckout(page) / fillCheckoutForm(page, firstName, lastName, postalCode) – checkout helpers

All test scripts in qa-library/tests/ use these functions to ensure modularity and reusability.

📋 Test Cases
Test cases are structured according to QA Library actions
Covers positive, negative, and edge cases
Minimum of 20–30 test cases, all aligned with the framework
🔗 GitHub Integration
Push your local changes:
git add .
git commit -m "Update project"
git push origin main
If remote changes exist:
git pull origin main
git push -f origin main
📌 Notes
Always check playwright-report/ and test-results/ for test results
Use --headed mode if you need to watch tests in real-time
Keep node_modules/ ignored if sharing repository publicly
