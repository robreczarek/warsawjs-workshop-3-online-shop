class ShopLogoController {
  constructor() {
    this.source = './images/logo.png'
    //this.width = 'auto'
    this.sizes = new Map([['medium', '100px'], ['small', '30px']])
  }

  $onInit() {
    this.width = this.sizes.get(this.size) || '60px'
  }
}

export const name = 'shopLogo'
export const properties = {
  bindings: {
    size: '@'
  },
  controller: ShopLogoController,
  source: './images/logo.png',
  template: `<image ng-src="{{ $ctrl.source }}" width="{{ $ctrl.width }}">`
}

