const { test } = require('@playwright/test');
const { loginAsStandardUser } = require('../qa-library/actions/login');
const { addProductToCart } = require('../qa-library/actions/cart');
const { startCheckout, fillCheckoutForm, finishCheckout } = require('../qa-library/actions/checkout');
const { validateOrderComplete } = require('../qa-library/validations/checkout');

test('TC25 - Complete checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginAsStandardUser(page);
  await addProductToCart(page, 'Sauce Labs Backpack');
  await startCheckout(page);
  await fillCheckoutForm(page, 'John', 'Doe', '12345');
  await finishCheckout(page);
  await validateOrderComplete(page);
});
