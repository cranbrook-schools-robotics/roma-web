export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const states = [
    {
      name: 'organization-view',
      url: '/',
      component: 'organizationView'
      // resolve: {
      //   organization(ROrganization) {
      //     return ROrganization.findMine();
      //   }
      // }
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
