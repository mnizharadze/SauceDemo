async function validateProductCount(page, expectedCount) {
  const count = await page.locator('.inventory_item').count();
  if (count !== expectedCount) {
    throw new Error(`Expected ${expectedCount} products, got ${count}`);
  }
}

async function validateProductDetails(page, expectedName, expectedDescription) {
  const name = await page.textContent('.inventory_details_name');
  if (name !== expectedName) {
    throw new Error(`Expected product name "${expectedName}", got "${name}"`);
  }
  const description = await page.textContent('.inventory_details_desc');
  if (description !== expectedDescription) {
    throw new Error(`Expected description "${expectedDescription}", got "${description}"`);
  }
}

async function validateCartCount(page, expectedCount) {
  if (expectedCount === 0) {
    const badge = page.locator('.shopping_cart_badge');
    const visible = await badge.isVisible();
    if (visible) {
      throw new Error(`Expected cart to be empty but badge is visible`);
    }
    return;
  }
  const count = await page.textContent('.shopping_cart_badge');
  const num = count ? parseInt(count) : 0;
  if (num !== expectedCount) {
    throw new Error(`Expected cart count ${expectedCount}, got ${num}`);
  }
}

module.exports = { validateProductCount, validateProductDetails, validateCartCount };
