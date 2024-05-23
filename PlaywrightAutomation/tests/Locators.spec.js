// const { test, expect } = require("@playwright/test")
import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // click on the login button - property
  //   await page.locator("id=login2").click();
  await page.click("id=login2");

  // provide username - CSS
  //   await page.locator("loginusername").fill("trutar");
  await page.fill("#loginusername", "trutar");
  // await page.type("#loginusername", "trutar");

  // provide password
  await page.fill("input[id='loginpassword']", "trutar123");

  // click on the login button - Xpath
  await page.click("//button[normalize-space()='Log in']");

  //verify logout link presence - XPath
  const logoutlink = await page.locator("//a[normalize-space()='Log out']");

  await expect(logoutlink).toBeVisible();

  await page.close();
});
