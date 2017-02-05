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
    this.inCartProducts = [

    ]
  }

  addProductToCart(product, amount) {
    this.inCartProducts.push({product, amount})
    //console.log(`Adding ${amount} of ${product.name}.`)
    //console.log(this.inCartProducts)
  }

  removeProductFromCart(product) {
    this.inCartProducts = this.inCartProducts.filter(({id}) => id != product.id)
  }

}
