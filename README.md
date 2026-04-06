# SauceDemo QA Automation Framework

## Overview
This project is a **modular QA Automation framework** for the [SauceDemo](https://www.saucedemo.com) web application.  
It follows a **QA Library approach** to ensure reusable test steps, validations, and test data abstraction.  
The framework supports automated testing of core user flows including **login, inventory, cart, checkout, and logout**, while maintaining modularity and reusability.

The framework also integrates **manual test case documentation**, allowing **manual ↔ automated synchronization**.

---

## Folder Structure
/qa-library
/actions → reusable functions for login, cart, checkout, navigation
/validations → validation helpers for login, cart, checkout, UI
/test-data → JSON files for users, checkout scenarios
/tests → automated test scripts
/reports → HTML and screenshot reports from test runs
/tests/testCases.xlsx → documented manual test cases mapped to QA Library functions
README.md → project overview and instructions


---

## QA Library Overview

### Actions
Reusable functions for performing operations on the web app:

- `loginAsStandardUser()` → logs in as standard_user  
- `loginAsLockedUser()` → logs in as locked_out_user  
- `loginWithCredentials(userKey, passwordOverride)` → generic login function  
- `addProductToCart(productName)` → adds a product to the cart  
- `removeProductFromCart(productName)` → removes a product from the cart  
- `goToCart()` → navigates to the cart page  
- `continueShopping()` → returns to inventory from cart  
- `startCheckout()` → starts checkout from cart  
- `fillCheckoutForm(data)` → fills checkout step 1 form using JSON test data  
- `finishCheckout()` → completes the checkout process  
- `logout()` → logs out the current user  
- `refreshPage()` → refreshes the current page  

### Validations
Reusable functions to **verify expected outcomes**:

- `validateLoginSuccess(page)` → verifies successful login  
- `validateLoginError(message)` → verifies login error messages  
- `validateCartCount(expectedCount)` → verifies number of items in cart badge  
- `validateCartItems(products)` → verifies correct items are in cart  
- `validateOrderSummary(products, total)` → verifies checkout step 2 summary  
- `validateCheckoutComplete()` → verifies order completion message  
- `validateRedirect(url)` → verifies navigation to correct page  
- `validateUIElements()` → verifies all critical UI elements are present  
- `validateImageAltText()` → ensures all images have alt attributes for accessibility  

### Test Data
JSON files for modular and reusable data:

- **users.json** → all SauceDemo users:

```json
{
  "standard": {"username": "standard_user", "password": "secret_sauce"},
  "locked": {"username": "locked_out_user", "password": "secret_sauce"},
  "problem": {"username": "problem_user", "password": "secret_sauce"},
  "performance": {"username": "performance_glitch_user", "password": "secret_sauce"},
  "error": {"username": "error_user", "password": "secret_sauce"},
  "visual": {"username": "visual_user", "password": "secret_sauce"}
}

checkout.json → checkout form variations:
{
  "valid": {"first": "John", "last": "Doe", "zip": "12345"},
  "missing_first": {"first": "", "last": "Doe", "zip": "12345"},
  "missing_zip": {"first": "John", "last": "Doe", "zip": ""},
  "empty_data": {"first": "", "last": "", "zip": ""}
}
Test Cases
Total: 33 test cases
Coverage: login, inventory, cart, checkout, logout, UI validation, edge cases, error handling
Format: Excel (/tests/testCases.xlsx)
Mapping: Each test case maps to a QA Library action or validation function for modularity

Examples:

ID	Title	QA Library Mapping
TC01	Valid login	loginAsStandardUser(); validateLoginSuccess()
TC07	Add single product to cart	addProductToCart('Sauce Labs Backpack'); validateCartCount(1)
TC16	Complete order successfully	finishCheckout(); validateCheckoutComplete()
Installation
Clone the repository:
git clone https://github.com/<yourusername>/saucedemo-qa-framework.git
cd saucedemo-qa-framework
Install Node.js (v16+ recommended)
Install dependencies:
npm init -y
npm install -D @playwright/test
npx playwright install
Running Tests
To run all tests:
npx playwright test
To run a specific test file:
npx playwright test tests/login.spec.js
To generate HTML report:
npx playwright show-report
Screenshots of failed tests are saved automatically in /reports/screenshots.
Best Practices
All test scripts must call QA Library functions; no hardcoded selectors in test scripts.
Test data should be maintained in /qa-library/test-data for reusability.
Manual ↔ Automation sync: always update Excel test cases when automation changes.
GitHub Repository

Structure suggestion:

main/
├─ qa-library/
├─ tests/
├─ reports/
├─ README.md
Push all changes after every major update
Optional: create a automation branch for Playwright scripts before merging to main
Optional Enhancements (Bonus)
CI/CD using GitHub Actions to run tests on push
Parallel test execution
Cross-browser testing
Data-driven testing with additional JSON files
References
SauceDemo
Playwright Official Docs

Author: Mariam Nizharadze
Date: 2026-04-06
