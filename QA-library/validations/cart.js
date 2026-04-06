async function validateCartCount(page, expectedCount) {
  const count = await page.textContent('.shopping_cart_badge');
  const num = count ? parseInt(count) : 0;
  if (num !== expectedCount) {
    throw new Error(`Expected cart count ${expectedCount}, got ${num}`);
  }
}

module.exports = { validateCartCount };
