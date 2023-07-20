import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has a correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Next.js Starter/);
  });
});
