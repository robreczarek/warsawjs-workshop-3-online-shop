const template = `
<div>
  Cart: {{ $ctrl.cart.length }} products.
</div>`

export const name = 'shopCart'
export const properties = {
  bindings: {
    cart: '<items'
  },
  template
}
