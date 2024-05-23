const { test, expect } = require("@playwright/test");
const { waitForDebugger } = require("inspector");

test("handle checkbox", async ({ page }) => {
  await page.goto("https://formstone.it/components/checkbox/");

  // single checkbox
  await page.locator("//input[@id='checkbox-1']").check();
  //   await page.check("//input[@id='checkbox-1']");

  await expect(await page.locator("//input[@id='checkbox-1']")).toBeChecked;
  await expect(await page.locator("//input[@id='checkbox-1']").isChecked())
    .toBeTruthy;

  await expect(await page.locator("//input[@id='checkbox-4']").isChecked())
    .toBeFalsy;
  await page.waitForTimeout(5000);

  //Multiple checknoxes
  const checkboxesLocators = [
    "//input[@id='checkbox-1",
    "//input[@id='checkbox-2",
  ];
  //Select multiple checkboxes
  for (const locator of checkboxesLocators) {
    await page.locator(locator).check();
  }
  // Unselected multiple checkboxes, whichare already selected
  if (await page.locator(locator).isChecked()) {
    await page.locator(locator).uncheck();
  }
});
