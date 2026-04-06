// QA-library/Actions/products.js
async function openInventoryPage(page) {
  await page.goto('https://www.saucedemo.com/inventory.html');
}

async function getProductCount(page) {
  return await page.locator('.inventory_item').count();
}

async function openProductDetails(page, productName) {
  await page.locator('.inventory_item_name', { hasText: productName }).click();
}

async function addProductToCart(page, productName) {
  const product = page.locator('.inventory_item').filter({ hasText: productName });
  await product.locator('button').click();
}

async function removeProductFromCart(page, productName) {
  const product = page.locator('.inventory_item').filter({ hasText: productName });
  await product.locator('button').click();
}

async function sortProducts(page, sortOption) {
  await page.selectOption('.product_sort_container', sortOption);
}

module.exports = {
  openInventoryPage,
  getProductCount,
  openProductDetails,
  addProductToCart,
  removeProductFromCart,
  sortProducts
};
