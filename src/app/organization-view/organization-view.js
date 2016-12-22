class OrganizationViewController {

  /** @ngInject */
  constructor($log, $stateParams, ROrganization) {
    const self = this;
    self.$log = $log;
    $log.info($stateParams);
    self.state = {
      isLoading: false
    };
    self.organization = ROrganization.findMine();
  }

  go(teamObj) {
    self.$log.info(teamObj);
  }
}

export const organizationView = {
  template: require('./organization-view.pug'),
  controller: OrganizationViewController
};

