const template = `
  <product-item
    ng-repeat="product in $ctrl.products"
    item="product"
    on-add-to-cart="$ctrl.addToCart(product, amount)">
  </product-item>
  <p ng-if="!$ctrl.products.length">
    No items yet. Subscribe to our fantastic newsletter!
  </p>
`

class ProductsListController {
  addToCart(product, amount) {
    console.log('It works in the product list!')
    this.requestAddToCart({ product: product, amount: amount })
  }
}

export const name = 'productsList'
export const properties = {
  bindings: {
    products: '<items',
    requestAddToCart: '&onAddToCart'
  },
  controller: ProductsListController,
  template
}
