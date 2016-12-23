import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-material';

import './app/models/models';
import {rootView} from './app/root-view/root-view';
import {organizationView} from './app/organization-view/organization-view';
import {divisionView} from './app/division-view/division-view';
import {teamView} from './app/team-view/team-view';
import {teamCard} from './app/team-card/team-card';
import routesConfig from './routes';

import './index.scss';

export const app = 'roma';

angular
  .module(app, ['ui.router', 'ngMaterial', 'roma.models'])
  .config(routesConfig)
  .component('rootView', rootView)
  .component('organizationView', organizationView)
  .component('divisionView', divisionView)
  .component('teamView', teamView)
  .component('teamCard', teamCard)
;

