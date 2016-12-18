import angular from 'angular';

import {hello} from './app/hello';
import 'angular-ui-router';
import 'angular-resource';
import routesConfig from './routes';
import './generated/lb-services.generated';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'lbServices'])
  .config(routesConfig)
  .component('app', hello);
