class RootViewController {

}

export const rootView = {
  template: require('./root-view.pug'),
  controller: RootViewController,
  bindings: {
    organizations: '<'
  },
  resolve: {
    organizations(Organization) {
      return Organization.list();
    }
  }
};
