export default class ApplicationController {

  constructor(productsService, cartService) {
    this.productsService = productsService
    this.inCartProducts = cartService.cart
  }

  $onInit() {
    this.productsService.loadProducts()
  }

  get products() {
    return this.productsService.products
  }

  get promotedProducts() {
    return this.productsService.promotedProducts
  }

  addProductToCart(product, amount) {
    this.inCartProducts.push({product, amount})
  }

  removeProductFromCart(product) {
    this.inCartProducts = this.inCartProducts.filter(({id}) => id != product.id)
  }

}
