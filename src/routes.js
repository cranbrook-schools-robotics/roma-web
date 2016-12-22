export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const states = [
    {
      name: 'organization-view',
      url: '/',
      component: 'organization-view'
      // resolve: {
      //   organization(ROrganization) {
      //     return ROrganization.findMine();
      //   }
      // }
    },
    {
      name: 'hello',
      url: '/hello',
      component: 'hello'
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
