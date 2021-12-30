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

  mars() {
    this.marsAge = this.age / 1.88;
    return this.marsAge;
  }

  jupiter() {
    this.jupiterAge = this.age / 11.86;
    return this.jupiterAge;
  }

}
