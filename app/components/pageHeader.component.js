const template = `
<header>
  <div>
    <span>
      <shop-logo size="medium"></shop-logo>
      <h3 style="float: left;vertical-align: middle;">Meowtastic Shop</h3>
    </span>
    <div ng-transclude="controls"></div>
  </div>
  <div ng-transclude="bar"></div>
</header>`

export const name = 'pageHeader'
export const properties = {
  template, // equivalent od `template: template`
  transclude: {
    controls: 'pageHeaderControls',
    bar: 'pageHeaderBar'
  }
}
