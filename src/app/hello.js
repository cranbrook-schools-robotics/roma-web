require('./hello.scss');

export const hello = {
  template: require('./hello.pug'),

  controller($log, Organization) {
    const self = this;
    self.state = {
      isLoading: true
    };
    self.organization = null;

    self.go = function (teamObj) {
      $log.info(teamObj);
    };

    Organization.findMine()
    .then(result => {
      self.organization = result;
      self.state.isLoading = false;
    });
  }
};
