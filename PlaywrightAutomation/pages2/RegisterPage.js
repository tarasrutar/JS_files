exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.inputFirstName = "#input-firstname";
    this.inputLastName = "#input-lastname";
    this.inputEmail = "#input-email";
    this.inputTelephone = "#input-telephone";
    this.inputPass = "#input-password";
    this.inputPassConfirm = "#input-confirm";
  }

  async enterFirstName(firstname) {
    await this.page.fill(this.inputFirstName, firstname);
  }

  async enterLastName(lastname) {
    await this.page.fill(this.inputLastName, lastname);
  }

  async enterEmail(email) {
    await this.page.fill(this.inputEmail, email);
  }

  async enterTelephone(phone) {
    await this.page.fill(this.inputTelephone, phone);
  }

  async enterPass(password) {
    await this.page.fill(this.inputPass, password);
  }

  async enterPassConfirm(password) {
    await this.page.fill(this.inputPassConfirm, password);
  }

  async isSubscribeChecked() {
    const isChecked = await this.page.isChecked(
      "label[for='input-newsletter-no']"
    );
    return isChecked;
  }

  async clickTermAndCondition() {
    await this.page.click("label[for='input-agree']");
  }

  async clickContinueRegister() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click("input[value='Continue']"),
    ]);
  }
};
