class DivisionViewController {

}

export const divisionView = {
  template: require('./division-view.pug'),
  controller: DivisionViewController,
  bindings: {
    division: '<division'
  },
  resolve: {
    division(Division, $stateParams) {
      return Division.findByURI($stateParams.divisionURI).catch(() => null);
    }
  }
};
