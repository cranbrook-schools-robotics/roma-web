import angular from 'angular';
import 'angular-mocks';
import {organization-view} from './organization-view';

describe('organization-view component', () => {
  beforeEach(() => {
    angular
      .module('organization-view', ['app/src/organization-view/organization-view.html'])
      .component('organization-view', organization-view);
    angular.mock.module('organization-view');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<organization-view></organization-view>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
