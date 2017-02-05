class ProductItemController {

  constructor() {
    this.cart = 0;
  }

  countPicked(count) {
    this.addToCart({amount: count})
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
    <h2>
      {{ $ctrl.product.name }} - \${{ $ctrl.product.price }}
    </h2>
    <div>
      <button ng-click="$ctrl.countPicked(1)">Add to cart</button>
    </div>
    <div>
      <image ng-src="{{ $ctrl.product.image }}" width="200" style="clear:both;">
    </div>
    <div>
      {{ $ctrl.product.description }}
    </div>
  `
}
