import _ from 'lodash';
import moment from 'moment';

import './division-view.scss';

class DivisionViewController {
  constructor($log) {
    this.$log = $log;
  }

  $onInit() {
    // this.$log.debug(this.division);
    const first = new Date(2017, 0, 14);
    this.meets = _.range(5).map(w => ({
      date: moment(first).add(w, 'weeks'),
      teams: this.randomTeams()
    }));
  }

  randomTeams() {
    const ts = [];
    this.division.teams.forEach(t => {
      if (Math.random() < 0.25) {
        ts.push(t);
      }
    });
    return ts;
  }

  isTeamGoing(team, meet) {
    return meet.teams.includes(team);
  }

  openMenu($mdOpenMenu, event) {
    this.menuEvent = event;
    $mdOpenMenu(event);
  }

  addMeet() {
    this.meets.push({
      date: moment(_.last(this.meets).date).add(1, 'w'),
      teams: this.randomTeams()
    });
  }

  deleteMeet(m) {
    this.meets.splice(this.meets.indexOf(m), 1);
  }
}

export const divisionView = {
  template: require('./division-view.pug'),
  controller: DivisionViewController,
  bindings: {
    division: '<'
  },
  resolve: {
    division(organization, $stateParams) {
      const targetURI = $stateParams.divisionURI;
      const thisDivision = organization.divisions.find(d => d.uri === targetURI);
      // $log.info(thisDivision);
      return Promise.resolve(thisDivision);
    }
  }
};
