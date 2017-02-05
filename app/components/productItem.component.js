class ProductItemController {

  constructor() {
    this.cart = 0;
    this.count = 1;
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
    <div>
      <h2>
        {{ $ctrl.product.name }} - \${{ $ctrl.product.price }}
      </h2>
      <form name="itemForm" ng-model="$ctrl.count" min="1" max="99">
        <input type="number" ng-model="$ctrl.count" min="1" value="1" style="width: 2.5em">
        <button ng-disabled="itemForm.$invalid" ng-click="$ctrl.countPicked($ctrl.count)">Add to cart</button>
      </form>

      <p>
        {{ $ctrl.product.description }}
      </p>
    </div>
  `
}
