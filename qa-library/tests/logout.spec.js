const { test } = require('@playwright/test');
const { loginAsStandardUser } = require('../qa-library/actions/login');

test('Logout from inventory page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginAsStandardUser(page);
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
});
