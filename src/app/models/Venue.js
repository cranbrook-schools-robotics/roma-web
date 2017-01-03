class Venue {
  constructor(LBVenue) {
    this.LBVenue = LBVenue;
  }

  list() {
    return this.LBVenue.find().$promise;
  }
}

export default Venue;
