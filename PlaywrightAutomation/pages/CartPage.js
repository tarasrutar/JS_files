exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.noOfProducts = '//*[@id="tbodyid"]';
  }

  async checkProductInCart(productname) {
    const productsInCart = await this.page.$$(this.noOfProducts);
    for (const product of productsInCart) {
      console.log(await product.textContent());
      if (productname === (await product.textContent())) {
        return true;
        break;
      }
    }
  }
};
