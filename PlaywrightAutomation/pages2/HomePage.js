exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
  }
  async clickOnSpecialHotMenu() {
    await this.page.waitForNavigation({ waitUntil: "load", timeout: 60000 });
    await this.page.click(
      "body > div:nth-child(1) > div:nth-child(5) > header:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    );
  }
};
