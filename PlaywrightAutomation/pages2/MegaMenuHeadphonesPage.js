exports.SpecialHotPage = class SpecialHotPage {
  constructor(page) {
    this.page = page;
  }

  async addFirstProductToTheCart() {
    await this.page.hover("//span[normalize-space()='Mega Menu']");
    const headphonesLink = await this.page.locator("a[title='Headphones']");
    await headphonesLink.click();
    await this.page.hover("//div[@class='image']/a", {
      strict: false,
    });
    await this.page.locator("(//button[@title='Add to Cart'])").nth(0).click();
  }
  async isToastVisible() {
    // await this.page.waitFor
    const toast = this.page.locator("//a[.='View Cart ']");
    await toast.waitFor({ state: "visible" });
    return toast;
  }
};
