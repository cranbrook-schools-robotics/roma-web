import {rootView} from './app/root-view/root-view';
import {organizationView} from './app/organization-view/organization-view';
import {divisionView} from './app/division-view/division-view';
import {teamView} from './app/team-view/team-view';

export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const states = [
    {
      name: 'root',
      url: '/',
      component: 'rootView',
      resolve: rootView.resolve
    },
    {
      name: 'organization',
      url: '/{organizationURI}',
      component: 'organizationView',
      resolve: organizationView.resolve
    },
    {
      name: 'organization.division',
      url: '/{divisionURI}',
      component: 'divisionView',
      resolve: divisionView.resolve
    },
    {
      name: 'organization.division.team',
      url: '/{teamURI}',
      component: 'teamView',
      resolve: teamView.resolve
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
