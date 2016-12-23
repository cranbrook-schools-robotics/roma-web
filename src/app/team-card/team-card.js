class TeamCardController {
  constructor($log) {
    $log.debug(this.team);
  }
}

export const teamCard = {
  template: require('./team-card.pug'),
  controller: TeamCardController,
  bindings: {
    team: '<team'
  }
};

