SauceDemo AI Driven QA Automation
🌐 Platform

SauceDemo Web Application
https://www.saucedemo.com/

🧠 Project Goal
Implement AI + QA Library approach
Create structured Test Cases
Build Automation Framework
Ensure Manual ↔ Automation synchronization
Generate Reports for test execution
📦 Project Structure
/qa-library       → reusable actions, validations, helper functions
/reports          → Playwright HTML reports
/test-results     → screenshots & videos of failed tests
/playwright.config.js → Playwright configuration
/package.json     → project dependencies
/README.md        → project documentation
🔹 QA Library
loginAsStandardUser(page)
addProductToCart(page, productName)
validateCartCount(page, expectedCount)
startCheckout(page)
Modular, reusable test steps
🔹 Test Cases
Stored in TestCases.xlsx
Covers Positive, Negative, Edge cases
Each test case mapped to automation script
🔹 Automation
Playwright + JavaScript
Page Object Model (POM)
Integration with QA Library
Test data abstracted in code
🔹 Reporting
Passed / Failed statuses
Error details
Screenshots & videos of failed tests
HTML report viewable via:
npx playwright show-report
🔹 Installation
git clone https://github.com/mnizharadze/SauceDemo.git
cd SauceDemo
npm install
🔹 Running Tests
npx playwright test      # Run all tests
npx playwright test <file>  # Run a specific test file
🔹 Viewing Reports
npx playwright show-report
🔹 GitHub Organization
/qa-library → reusable functions
/tests → test scripts
/test-data → manual test cases, input data
/reports → Playwright HTML reports
/test-results → screenshots & videos
