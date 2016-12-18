export const hello = {
  template: require('./hello.html'),

  /** @ngInject */
  controller(Organization) {
    this.hello = 'Hello World';
    this.organizations = Organization.findOne({
      filter: {
        include: {
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
        }
      }
    });
  }
};
