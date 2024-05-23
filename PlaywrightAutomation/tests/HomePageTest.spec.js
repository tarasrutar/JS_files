const { test, expect } = require("@playwright/test");

test("Home Page", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const pageTitle = page.title();
  console.log("Page title is:", pageTitle);

  await expect(page).toHaveTitle("STORE");

  const pageURL = page.url();
  await expect(page).toHaveURL("https://demoblaze.com/");

  await page.close;
});
