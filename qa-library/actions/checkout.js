async function startCheckout(page) {
  await page.click('#checkout');
}

async function fillCheckoutForm(page, firstName, lastName, postalCode) {
  await page.fill('#first-name', firstName);
  await page.fill('#last-name', lastName);
  await page.fill('#postal-code', postalCode);
  await page.click('#continue');
}

async function finishCheckout(page) {
  await page.click('#finish');
}

module.exports = { startCheckout, fillCheckoutForm, finishCheckout };
