
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

  findOne(filter) {
    if (!filter) {
      filter = {};
    }
    if (!filter.include) {
      filter.include = this.includeSpec;
    }
    return this.LBOrganization.findOne({filter}).$promise;
  }

  findMine() {
    return this.findOne();
  }

  findByURI(uri) {
    return this.findOne({where: {uri}});
  }

  list() {
    return this.LBOrganization.find().$promise;
  }
}

export default Organization;
