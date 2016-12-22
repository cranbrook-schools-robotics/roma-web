require('./organization-view.scss');

class OrganizationViewController {

  constructor($log, $stateParams, Organization) {
    const self = this;
    self.$log = $log;
    self.state = {
      isLoading: true
    };
    self.organization = null;
    Organization.findMine()
    .then(result => {
      self.organization = result;
      self.state.isLoading = false;
    });
  }

  go(teamObj) {
    const self = this;
    self.$log.info(teamObj);
  }
}

export const organizationView = {
  template: require('./organization-view.pug'),
  controller: OrganizationViewController
};

