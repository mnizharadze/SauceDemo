async function validateOrderComplete(page) {
  const text = await page.textContent('.complete-header');
  if (!text.includes('Thank you for your order')) {
    throw new Error('Order not completed successfully');
  }
}

module.exports = { validateOrderComplete };
