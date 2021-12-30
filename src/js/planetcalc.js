export default class PlanetAge {
  constructor (age) {
    this.age = age;
  }

  mercury() {
    this.mercuryAge = this.age / .24;
    return this.mercuryAge;
  }

  venus() {
    this.venusAge = this.age / .62;
    return this.venusAge;
  }

}
