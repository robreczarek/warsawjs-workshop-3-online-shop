class shopCartController {

  constructor() {
  }

  get cartTotal() {
    let cart = this.cart || []
    let total = cart.reduce(function(accumulator, currentValue, currentIndex, array) {
      return accumulator + (currentValue.product.price * currentValue.amount);
    }, 0)

    return total
  }

}

const template = `
<div>
  Cart: {{ $ctrl.cart.length }} products.
  Total: \$ {{ $ctrl.cartTotal }}
</div>`

export const name = 'shopCart'
export const properties = {
  bindings: {
    cart: '<items'
  },
  controller: shopCartController,
  template
}
