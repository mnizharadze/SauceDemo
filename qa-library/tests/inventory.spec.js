// tests/inventory.spec.js
const { test } = require('@playwright/test');
const {
  openInventoryPage,
  getProductCount,
  openProductDetails,
  addProductToCart,
  removeProductFromCart,
  sortProducts
} = require('../QA-library/Actions/products');

const {
  validateProductCount,
  validateProductDetails,
  validateCartCount
} = require('../QA-library/validations/productsValidation');

const products = require('../test-data/products.json');

test.beforeEach(async ({ page }) => {
  // Login as standard user before each test
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await openInventoryPage(page);
});

test('TC08 - View product listing shows 6 products', async ({ page }) => {
  await validateProductCount(page, 6);
});

test('TC09 - View product details for Sauce Labs Backpack', async ({ page }) => {
  const product = products.find(p => p.name === 'Sauce Labs Backpack');
  await openProductDetails(page, product.name);
  await validateProductDetails(page, product.name, product.description);
});

test('TC10 - Add item from product detail page increments cart count', async ({ page }) => {
  const product = products.find(p => p.name === 'Sauce Labs Backpack');
  await openProductDetails(page, product.name);
  await addProductToCart(page, product.name);
  await validateCartCount(page, 1);
});

test('TC11 - Sort products by price low to high', async ({ page }) => {
  await sortProducts(page, 'lohi');
  // Additional validations for sorting order can be implemented here
});

test('TC12 - Sort products by name A-Z', async ({ page }) => {
  await sortProducts(page, 'az');
  // Additional validations for sorting order can be implemented here
});

test('TC13 - Add single product to cart increments cart badge to 1', async ({ page }) => {
  const product = products.find(p => p.name === 'Sauce Labs Backpack');
  await addProductToCart(page, product.name);
  await validateCartCount(page, 1);
});

test('TC14 - Add two different products to cart increments cart badge to 2', async ({ page }) => {
  const product1 = products.find(p => p.name === 'Sauce Labs Backpack');
  const product2 = products.find(p => p.name === 'Sauce Labs Bike Light');
  await addProductToCart(page, product1.name);
  await addProductToCart(page, product2.name);
  await validateCartCount(page, 2);
});

test('TC15 - Remove product from cart decreases cart count', async ({ page }) => {
  const product = products.find(p => p.name === 'Sauce Labs Backpack');
  await addProductToCart(page, product.name);
  await removeProductFromCart(page, product.name);
  await validateCartCount(page, 0);
});
