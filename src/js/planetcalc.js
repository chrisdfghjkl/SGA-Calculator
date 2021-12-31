export default class PlanetAge {
  constructor (age) {
    this.age = age;
  }

  mercury() {
    this.mercuryAge = parseFloat((this.age / .24).toFixed(2));
    return this.mercuryAge;
  }

  venus() {
    this.venusAge = parseFloat((this.age / .62).toFixed(2));
    return this.venusAge;
  }

  mars() {
    this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
    return this.marsAge;
  }

  jupiter() {
    this.jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
    return this.jupiterAge;
  }

  ageConverter() {
    this.mercuryAge = parseFloat((this.age / .24).toFixed(2));
    this.venusAge = parseFloat((this.age / .62).toFixed(2));
    this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
  }

}
