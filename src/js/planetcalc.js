export default class PlanetAge {
  constructor (age) {
    this.age = age;
  }

  ageConverter() {
    this.mercuryAge = this.age / .24;
    return this.mercuryAge;
  }

}
