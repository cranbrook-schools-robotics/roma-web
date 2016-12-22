import angular from 'angular';
import './lb-services.generated';

import Organization from './Organization';

export const moduleName = 'roma.models';
angular
// export default angular
  .module(moduleName, ['lbServices'])
  .service('Organization', Organization)
  // .name
;
