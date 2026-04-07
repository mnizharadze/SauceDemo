const { test } = require('@playwright/test');
const { loginAsStandardUser, loginWithCredentials, loginAsLockedUser } = require('../actions/login');
const { validateLoginSuccess, validateLoginError } = require('../validations/login');

test('TC01 - Valid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginAsStandardUser(page);
  await validateLoginSuccess(page);
});

test('TC02 - Invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginWithCredentials(page, 'standard', 'wrong_password');
  await validateLoginError(page, 'Username and password do not match');
});

test('TC03 - Locked user login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginAsLockedUser(page);
  await validateLoginError(page, 'Sorry, this user has been locked out.');
});
