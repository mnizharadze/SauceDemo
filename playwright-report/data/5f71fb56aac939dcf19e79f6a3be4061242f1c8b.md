# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> Logout from inventory page
- Location: qa-library\tests\logout.spec.js:4:1

# Error details

```
TimeoutError: page.click: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('#react-burger-menu-btn')

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
  1  | const { test } = require('@playwright/test');
  2  | const { loginAsStandardUser } = require('../actions/login');
  3  | 
  4  | test('Logout from inventory page', async ({ page }) => {
  5  |   await page.goto('https://www.saucedemo.com/');
  6  |   await loginAsStandardUser(page);
> 7  |   await page.click('#react-burger-menu-btn');
     |              ^ TimeoutError: page.click: Timeout 20000ms exceeded.
  8  |   await page.click('#logout_sidebar_link');
  9  | });
  10 | 
```