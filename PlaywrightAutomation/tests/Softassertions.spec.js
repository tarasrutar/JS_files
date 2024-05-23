const { test, expect } = require("@playwright/test");

test("Soft assertions", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  //   //Hard assertions
  //   awaitexpect(page).toHaveTitle("STORE123");
  //   await expect(page).toHaveURL("https://demoblaze.com/index.html");
  //     await expect(page.locator(".navbar-brand")).toBeVisible();

  //Soft assertions
  await expect.soft(page).toHaveTitle("STORE123");
  await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");
  await expect.soft(page.locator(".navbar-brand")).toBeVisible();
});
