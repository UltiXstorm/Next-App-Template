import { test, expect } from '@playwright/test';

test.describe('Init app', () => {

  test('Check Title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Create Next App/);
  });
});
