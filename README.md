# AI Driven QA Automation – SauceDemo

## 🌐 Project Overview

This project is a complete QA Automation framework for the [SauceDemo](https://www.saucedemo.com) web application. It leverages an **AI + QA Library** approach to create structured, reusable test cases and automate them using **Playwright**.

The framework includes:

- Modular QA Library with reusable actions and validation helpers
- Test cases aligned with manual documentation
- Automated test execution using Playwright
- Reporting with screenshots, videos, and HTML reports

---

## 🧠 Objective

The goal is to build a full QA system that covers:

- **Test Design** – QA Library approach with reusable, modular functions
- **Test Case Documentation** – Structured test cases (TC01–TC25+)
- **Test Automation** – Playwright-based automated execution
- **Reporting** – HTML reports, screenshots, and video recordings

---

## 🗂 Repository Structure

```
SauceDemo/
├── playwright-report/        # Latest Playwright HTML report (15/15 passing)
│   └── index.html
├── qa-library/               # Core test framework
│   ├── actions/              # Reusable page action helpers
│   │   ├── cart.js
│   │   ├── checkout.js
│   │   ├── login.js
│   │   └── products.js
│   ├── validations/          # Reusable assertion/validation helpers
│   │   ├── cart.js
│   │   ├── checkout.js
│   │   └── productsValidation.js
│   ├── test-data/            # Test data (JSON)
│   │   └── products.json
│   └── tests/                # Test spec files
│       ├── cart.spec.js
│       ├── checkout.spec.js
│       ├── inventory.spec.js
│       └── login.spec.js
├── test-results/             # Screenshots and videos per test run
├── README.md
├── package.json
├── package-lock.json
└── playwright.config.js
```

---

## 💻 Technologies

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | Test automation framework |
| JavaScript | Language |
| Node.js | Runtime environment |
| GitHub | Version control and report hosting |

---

## ⚙️ Installation

**1. Clone the repository:**
```bash
git clone https://github.com/mnizharadze/SauceDemo.git
cd SauceDemo
```

**2. Install dependencies:**
```bash
npm install
```

**3. Install Playwright browsers:**
```bash
npx playwright install
```

---

## 🧪 Running Tests

**Run all tests:**
```bash
npx playwright test
```

**Run a specific test file:**
```bash
npx playwright test qa-library/tests/login.spec.js
```

**Run tests with browser visible:**
```bash
npx playwright test --headed
```

---

## 📊 Test Reporting

**View the HTML report after a test run:**
```bash
npx playwright show-report
```

The report is located in `playwright-report/index.html` and includes:
- Pass/fail status per test
- Step-by-step execution details
- Screenshots on failure
- Video recordings for all tests

---

## 🛠 QA Library

All reusable logic lives in `qa-library/`. The framework is split into **actions** (what to do) and **validations** (what to assert).

**Example actions:**
```javascript
loginAsStandardUser(page)                             // Login with standard_user
addProductToCart(page, productName)                   // Add a product from inventory
addProductToCartFromDetail(page)                      // Add a product from detail page
removeProductFromCart(page, productName)              // Remove a product from cart
sortProducts(page, sortOption)                        // Sort product listing
startCheckout(page)                                   // Proceed to checkout
fillCheckoutForm(page, firstName, lastName, postalCode) // Fill checkout form
```

**Example validations:**
```javascript
validateProductCount(page, expectedCount)             // Assert number of products
validateCartCount(page, expectedCount)                // Assert cart badge count
validateProductDetails(page, name, description)       // Assert product detail page
validateOrderConfirmation(page)                       // Assert checkout completion
```

---

## 📋 Test Cases

| ID | Area | Description |
|----|------|-------------|
| TC01 | Login | Valid login with standard_user |
| TC02 | Login | Invalid password shows error |
| TC03 | Login | Locked user shows error |
| TC04 | Login | Empty username shows error |
| TC05 | Login | Empty password shows error |
| TC06 | Login | Both fields empty shows error |
| TC07 | Logout | Logout from inventory page |
| TC08 | Inventory | Product listing shows 6 products |
| TC09 | Inventory | View product details for Sauce Labs Backpack |
| TC10 | Inventory | Add item from detail page increments cart count |
| TC11 | Inventory | Sort products by price low to high |
| TC12 | Inventory | Sort products by name A–Z |
| TC13 | Inventory | Add single product increments cart badge to 1 |
| TC14 | Inventory | Add two products increments cart badge to 2 |
| TC15 | Inventory | Remove product decreases cart count |
| TC16 | Cart | Cart displays added product |
| TC17 | Cart | Cart displays correct product price |
| TC18 | Cart | Remove item from cart page |
| TC19 | Cart | Continue shopping returns to inventory |
| TC20 | Cart | Proceed to checkout from cart |
| TC21 | Checkout | Fill checkout form and continue |
| TC22 | Checkout | Empty first name shows error |
| TC23 | Checkout | Empty last name shows error |
| TC24 | Checkout | Empty postal code shows error |
| TC25 | Checkout | Complete checkout shows confirmation |

**Latest run: ✅ 15/15 tests passing**

---

## 🔗 Git Workflow

**Push local changes:**
```bash
git add .
git commit -m "Your message"
git push origin main
```

**If remote has changes:**
```bash
git stash
git pull origin main --rebase
git stash pop
git push origin main
```

---

## 📌 Notes

- `playwright-report/` always contains the latest test run report
- `test-results/` contains per-test screenshots and videos for debugging
- Use `--headed` mode to watch tests run in real time
- `node_modules/` is excluded from the repository via `.gitignore`
