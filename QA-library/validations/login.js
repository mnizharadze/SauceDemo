async function validateLoginSuccess(page) {
  await page.waitForURL('**/inventory.html');
}

async function validateLoginError(page, expectedText) {
  const errorText = await page.textContent('[data-test="error"]');
  if (!errorText.includes(expectedText)) {
    throw new Error(`Expected error "${expectedText}", but got "${errorText}"`);
  }
}

module.exports = { validateLoginSuccess, validateLoginError };
