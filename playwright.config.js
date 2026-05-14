const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:9292', // Assuming Shopify CLI local dev port
    headless: true,
  },
});
