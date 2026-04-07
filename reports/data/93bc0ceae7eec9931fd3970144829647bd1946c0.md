# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.js >> TC25 - Complete checkout
- Location: qa-library\tests\checkout.spec.js:7:1

# Error details

```
TimeoutError: page.click: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('#checkout')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | async function startCheckout(page) {
> 2  |   await page.click('#checkout');
     |              ^ TimeoutError: page.click: Timeout 20000ms exceeded.
  3  | }
  4  | 
  5  | async function fillCheckoutForm(page, firstName, lastName, postalCode) {
  6  |   await page.fill('#first-name', firstName);
  7  |   await page.fill('#last-name', lastName);
  8  |   await page.fill('#postal-code', postalCode);
  9  |   await page.click('#continue');
  10 | }
  11 | 
  12 | async function finishCheckout(page) {
  13 |   await page.click('#finish');
  14 | }
  15 | 
  16 | module.exports = { startCheckout, fillCheckoutForm, finishCheckout };
  17 | 
```