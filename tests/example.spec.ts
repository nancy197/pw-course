import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//exercise 1
test('title contain text', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  //Expect page chưa title "Tài liệu học automation test
  const title = await page.title();
  await expect(title).toContain('Tài liệu học automation test');
});
//exercise 2
test("heading contain text", async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  //Truy cập link chứa text "Bài học 1: Register Page"
  await page.getByRole('link', { name: "Bài học 1: Register Page"}).click();
  //Expect page to have a heading contain text "User Registration"
  await expect(page.getByRole('heading', { name: "User Registration" })).toBeVisible();
})
