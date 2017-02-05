import ApplicationController from './application.controller'
import {moduleName as componentsModuleName} from './components/components.module'
import {moduleName as serviceModuleName} from './services/services.module'

export const moduleName = 'show'

angular.module(moduleName, [ componentsModuleName, serviceModuleName ])
  .controller('ApplicationController', ApplicationController)
