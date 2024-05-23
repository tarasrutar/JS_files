const { test, expect } = require("@playwright/test");

test("handle inputbox", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  //   //Inputbox - firstname
  //   await expect(await page.locator("//input[@id='LastName']")).toBeVisible();
  //   await expect(await page.locator("//input[@id='LastName']")).toBeEmpty();
  //   await expect(await page.locator("//input[@id='LastName']")).toBeEditable();

  //   await page.locator("//input[@id='name]").fill("Stepan");
  //   //   page.fill("//input[@id='name]", "Stepan");

  //Radio button
  await page.locator("//input[@id='gender-male']").check();

  await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
  expect(await page.locator("//input[@id='gender-male']").isChecked())
    .toBeTruthy;
  expect(await page.locator("//input[@id='gender-male']").isChecked).toBeTruthy;

  await page.waitForTimeout(5000); // Pause for 5 seconds
});
