import angular from 'angular';
import './lb-services.generated';

import Organization from './Organization';
import Venue from './Venue';

export const moduleName = 'roma.models';
angular.module(moduleName, ['lbServices'])
  .service('Organization', Organization)
  .service('Venue', Venue)
;
