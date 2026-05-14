const { test, expect } = require('@playwright/test');

test('Add to Cart button should be visible on a product page', async ({ page }) => {
  await page.goto('/collections/all');
  
  // Dawn themes use card-wrapper for product links
  const card = page.locator('.card-wrapper').first();
  await card.click();
  
  // Verify Add to Cart button
  const addToCartButton = page.locator('form[data-type="add-to-cart-form"] button[type="submit"]');
  await expect(addToCartButton).toBeVisible();
});
