const { test } = require('@playwright/test');
const { loginAsStandardUser } = require('../qa-library/actions/login');
const { addProductToCart, removeProductFromCart } = require('../qa-library/actions/cart');
const { validateCartCount } = require('../qa-library/validations/cart');

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
