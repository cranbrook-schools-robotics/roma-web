require('./organization-view.scss');

class OrganizationViewController {

  constructor($log) {
    self.$log = $log;
  }

  go(teamObj) {
    self.$log.info(teamObj);
  }
}

export const organizationView = {
  template: require('./organization-view.pug'),
  controller: OrganizationViewController,
  bindings: {
    organization: '<organization'
  },
  resolve: {
    organization(Organization, $stateParams) {
      return Organization.findByURI($stateParams.organizationURI).catch(() => null);
    }
  }
};

