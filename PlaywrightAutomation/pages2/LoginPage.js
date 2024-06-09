exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async login(email, password) {
    await this.enterEmail(email);
    await this.enterLoginPassword(password);
    await this.clickLoginBtn();
  }

  async enterEmail(emailaddress) {
    await this.page.locator("//input[@id='input-email']").fill(emailaddress);
  }

  async enterLoginPassword(password) {
    await this.page.locator("//input[@id='input-password']").fill(password);
  }

  async clickLoginBtn() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click("//input[@value='Login']"),
    ]);
  }
};
