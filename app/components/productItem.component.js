class ProductItemController {

  constructor() {
    this.cart = 0;
  }

  countPicked(count) {
    this.addToCart({amount: count})
    console.log('It works in product item!')
  }

}

export const name = 'productItem'
export const properties = {
  bindings: {
    product: '<item',
    addToCart: '&onAddToCart'
  },
  controller: ProductItemController,
  template: `
    <div>
      {{ $ctrl.product.name }} - \${{ $ctrl.product.price }}
    </div>
    <div>
      <image ng-src="{{ $ctrl.product.image }}" width="200" style="clear:both;">
    </div>
    <div>
      {{ $ctrl.product.description }}
    </div>
    <div>
      <button ng-click="$ctrl.countPicked()">Add to cart</button>
    </div>
  `
}
