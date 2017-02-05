export class ProductsService {
  constructor($http) {
    this.$http = $http
    this.apiUrl = 'http://localhost:8001/'
    this.productsStore = {
      normal: [],
      promoted: []

    }
  }

  get products() {
    return this.productsStore.normal
  }

  get promotedProducts() {
    return this.productsStore.promoted
  }

  loadProducts() {
    this.$http.get('http://localhost:8001/products')
      .then(response => response.data)
      .then(products => {
        this.productsStore.normal = products
        this.productsStore.promoted = products
      })

  }
}
