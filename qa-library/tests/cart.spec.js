const { test } = require('@playwright/test');
const { loginAsStandardUser } = require('../actions/login');
const { addProductToCart, removeProductFromCart } = require('../actions/cart');
const { validateCartCount } = require('../validations/cart');

test('TC10 - Add item to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginAsStandardUser(page);
  await addProductToCart(page, 'Sauce Labs Backpack');
  await validateCartCount(page, 1);
});

test('TC15 - Remove item from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginAsStandardUser(page);
  await addProductToCart(page, 'Sauce Labs Backpack');
  await removeProductFromCart(page, 'Sauce Labs Backpack');
  await validateCartCount(page, 0);
});
