import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-material';

import './app/models/models';
import {hello} from './app/hello';
import {organizationView} from './app/organization-view/organization-view';
import routesConfig from './routes';

import './index.scss';

export const app = 'roma';

angular
  .module(app, ['ui.router', 'ngMaterial', 'roma.models'])
  .config(routesConfig)
  .component('organization-view', organizationView)
  .component('hello', hello)
;
