export default themesConfig;

function themesConfig($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('teal')
    .warnPalette('red')
    .backgroundPalette('grey');
}
