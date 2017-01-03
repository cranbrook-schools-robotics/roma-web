import './root-view.scss';

class RootViewController {

}

export const rootView = {
  template: require('./root-view.pug'),
  controller: RootViewController,
  bindings: {
    organizations: '<',
    venues: '<'
  },
  resolve: {
    organizations(Organization) {
      return Organization.list();
    },
    venues(Venue) {
      return Venue.list();
    }
  }
};
