export default class ApplicationController {

  constructor() {
    this.products = [
      {name: 'Orange', price: 10, image: './images/orange.png'},
      {name: 'Banana', price: 20, image: './images/banana.png'}
    ]
    this.promotedProducts = [
      {name: 'Apple', price: 5, image: './images/apple.png'},
      {name: 'Pineapple', price: 10, image: './images/pineapple.png'}
    ]
    this.cart = [

    ]
  }

  addProductToCart(product, amount) {
    this.cart.push({product, amount})
  }

}
