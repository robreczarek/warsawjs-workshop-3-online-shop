import * as pageHeaderComponent from './pageHeader.component'
import * as pageFooterComponent from './pageFooter.component'
import * as shopLogoComponent from './shopLogo.component'
import * as productsListComponent from './productsList.component'
import * as productItemComponent from './productItem.component'

export const moduleName = 'components'
angular.module(moduleName, [])
  .component(pageHeaderComponent.name, pageHeaderComponent.properties)
  .component(pageFooterComponent.name, pageFooterComponent.properties)
  .component(shopLogoComponent.name, shopLogoComponent.properties)
  .component(productsListComponent.name, productsListComponent.properties)
  .component(productItemComponent.name, productItemComponent.properties)
