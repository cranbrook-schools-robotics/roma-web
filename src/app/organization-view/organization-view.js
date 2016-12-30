// import buildToggler from 'angular-material';

require('./organization-view.scss');

class OrganizationViewController {

  constructor($log, $mdSidenav) {
    this.$log = $log;
    this.isSidenavOpen = true;
    function buildToggler(navID) {
      return function () {
        $mdSidenav(navID).toggle();
      };
    }
    this.toggleSidenav = buildToggler('organization-sidenav');
  }

  go(teamObj) {
    this.$log.info(teamObj);
  }
}

export const organizationView = {
  template: require('./organization-view.pug'),
  controller: OrganizationViewController,
  bindings: {
    organization: '<'
  },
  resolve: {
    organization(Organization, $stateParams) {
      return Organization.findByURI($stateParams.organizationURI).catch(() => null);
    }
  }
};

