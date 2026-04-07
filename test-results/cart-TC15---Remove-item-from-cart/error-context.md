# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> TC15 - Remove item from cart
- Location: qa-library\tests\cart.spec.js:13:1

# Error details

```
TimeoutError: page.textContent: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('.shopping_cart_badge')

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
  1  | async function validateCartCount(page, expectedCount) {
> 2  |   const count = await page.textContent('.shopping_cart_badge');
     |                            ^ TimeoutError: page.textContent: Timeout 20000ms exceeded.
  3  |   const num = count ? parseInt(count) : 0;
  4  |   if (num !== expectedCount) {
  5  |     throw new Error(`Expected cart count ${expectedCount}, got ${num}`);
  6  |   }
  7  | }
  8  | 
  9  | module.exports = { validateCartCount };
  10 | 
```