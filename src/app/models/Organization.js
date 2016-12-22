
class Organization {

  constructor($log, LBOrganization) {
    const self = this;
    self.$log = $log;
    self.LBOrganization = LBOrganization;
    self.includeSpec = {
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
  }

  findMine() {
    const self = this;
    const findFilter = {filter: {include: self.includeSpec}};
    return self.LBOrganization.findOne(findFilter).$promise;
  }
}

export default Organization;
