import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

test("test", async ({ page }) => {
  // Login
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.login("trutar", "trutar123");
  await page.waitForTimeout(3000);

  // Home
  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(3000);
  await home.goToCart();

  // Cart
  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Nexus 6");
  expect(await status).toBe(true);
});