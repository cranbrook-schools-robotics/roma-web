export const hello = {
  template: require('./hello.html'),

  /** @ngInject */
  controller($log, Organization) {
    const self = this;
    this.state = {
      isLoading: true
    };
    const includeSpec = {
      relation: 'divisions',
      scope: {
        include: {
          relation: 'teams',
          scope: {
            include: {
              relation: 'members'
            }
          }
        }
      }
    };
    this.organization = null;
    Organization.findOne({filter: {include: includeSpec}}).$promise
    .then(result => {
      $log.info(result);
      self.organization = result;
      self.state.isLoading = false;
    });
  }
};
