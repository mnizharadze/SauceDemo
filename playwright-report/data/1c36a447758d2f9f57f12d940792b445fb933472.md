# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> TC01 - Valid login
- Location: qa-library\tests\login.spec.js:5:1

# Error details

```
TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/inventory.html" until "load"
============================================================
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
  1  | async function validateLoginSuccess(page) {
> 2  |   await page.waitForURL('**/inventory.html');
     |              ^ TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
  3  | }
  4  | 
  5  | async function validateLoginError(page, expectedText) {
  6  |   const errorText = await page.textContent('[data-test="error"]');
  7  |   if (!errorText.includes(expectedText)) {
  8  |     throw new Error(`Expected error "${expectedText}", but got "${errorText}"`);
  9  |   }
  10 | }
  11 | 
  12 | module.exports = { validateLoginSuccess, validateLoginError };
  13 | 
```