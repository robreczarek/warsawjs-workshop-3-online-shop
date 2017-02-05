export const name = 'productsList'
export const properties = {
  bindings: {
    products: '<items'
  },
  template: `
    {{ $ctrl.products | json }}
    <product-item></product-item>

  `
}
