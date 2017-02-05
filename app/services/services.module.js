import {ProductsService} from './products.service'
import {CartService} from './cart.service'

export const moduleName = 'services'
angular.module(moduleName, [])
  .service('productsService', ProductsService)
  .service('cartService', CartService)
