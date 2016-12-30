class TeamViewController {

}

export const teamView = {
  template: require('./team-view.pug'),
  controller: TeamViewController,
  bindings: {
    team: '<'
  },
  resolve: {
    team(Team, $stateParams) {
      return Team.findByURI($stateParams.teamURI).catch(() => null);
    }
  }
};
