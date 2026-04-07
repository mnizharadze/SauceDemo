# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.js >> TC10 - Add item from product detail page increments cart count
- Location: qa-library\tests\inventory.spec.js:37:1

# Error details

```
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).locator('button')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - button "Go back Back to products" [ref=e16] [cursor=pointer]:
        - img "Go back" [ref=e17]
        - text: Back to products
    - generic [ref=e20]:
      - img "Sauce Labs Backpack" [ref=e22]
      - generic [ref=e23]:
        - generic [ref=e24]: Sauce Labs Backpack
        - generic [ref=e25]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
        - generic [ref=e26]: $29.99
        - button "Add to cart" [ref=e27] [cursor=pointer]
  - contentinfo [ref=e28]:
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Twitter" [ref=e31] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e32]:
        - link "Facebook" [ref=e33] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e34]:
        - link "LinkedIn" [ref=e35] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e36]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | // QA-library/Actions/products.js
  2  | async function openInventoryPage(page) {
  3  |   await page.goto('https://www.saucedemo.com/inventory.html');
  4  | }
  5  | 
  6  | async function getProductCount(page) {
  7  |   return await page.locator('.inventory_item').count();
  8  | }
  9  | 
  10 | async function openProductDetails(page, productName) {
  11 |   await page.locator('.inventory_item_name', { hasText: productName }).click();
  12 | }
  13 | 
  14 | async function addProductToCart(page, productName) {
  15 |   const product = page.locator('.inventory_item').filter({ hasText: productName });
> 16 |   await product.locator('button').click();
     |                                   ^ TimeoutError: locator.click: Timeout 20000ms exceeded.
  17 | }
  18 | 
  19 | async function removeProductFromCart(page, productName) {
  20 |   const product = page.locator('.inventory_item').filter({ hasText: productName });
  21 |   await product.locator('button').click();
  22 | }
  23 | 
  24 | async function sortProducts(page, sortOption) {
  25 |   await page.selectOption('.product_sort_container', sortOption);
  26 | }
  27 | 
  28 | module.exports = {
  29 |   openInventoryPage,
  30 |   getProductCount,
  31 |   openProductDetails,
  32 |   addProductToCart,
  33 |   removeProductFromCart,
  34 |   sortProducts
  35 | };
  36 | 
```