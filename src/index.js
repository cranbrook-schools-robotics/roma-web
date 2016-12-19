import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-material';

import './generated/lb-services.generated';
import {hello} from './app/hello';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'ngMaterial', 'lbServices'])
  .config(routesConfig)
  .component('app', hello);
