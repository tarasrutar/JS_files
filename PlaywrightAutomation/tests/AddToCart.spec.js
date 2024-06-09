import { expect, test } from "@playwright/test";
import { HomePage } from "../pages2/HomePage";
import { LoginPage } from "../pages2/LoginPage";
import { RegisterPage } from "../pages2/RegisterPage";
import { SpecialHotPage } from "../pages2/MegaMenuHeadphonesPage";

const email = "Koushik03@mailinator.com";
const password = "Koushik@123";

test.describe("Page object test demo", async () => {
  test("Register test_01", async ({ page }) => {
    const register = new RegisterPage(page);
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    );
    await register.enterFirstName("Koushik");
    await register.enterLastName("Chatterjee");
    await register.enterEmail(email);
    await register.enterPass(password);
    await register.enterPassConfirm(password);
    expect(await register.isSubscribeChecked()).toBe(true);
    await register.clickTermAndCondition();
    await register.clickContinueRegister();
  });

  test("Login test_02", async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.clickLoginBtn();
    expect(await page.title()).toBe("My Account");
  });

  test("Add to cart test_03", async ({ page }) => {
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const special = new SpecialHotPage(page);
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    await login.login(email, password);

    await special.addFirstProductToTheCart();
    // const isCartVisible = await special.isToastVisible();
    // expect(isCartVisible).toBe(true);
  });
});
