import {organizationView} from './app/organization-view/organization-view';

export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const states = [
    {
      name: 'organization-view',
      url: '/{organizationURI}',
      component: 'organizationView',
      resolve: organizationView.resolve
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
