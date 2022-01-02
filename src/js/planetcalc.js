export default class PlanetAge {
  constructor (age) {
    this.age = age;
    this.lifeExpectancy = 72.6
  }

  ageConverter() {
    this.mercuryAge = parseFloat((this.age / .24).toFixed(2));
    this.venusAge = parseFloat((this.age / .62).toFixed(2));
    this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
  }

  planetExpectancy() {
    this.mercuryExpectancy = parseFloat((this.lifeExpectancy / .24).toFixed(2));
    this.venusExpectancy = parseFloat((this.lifeExpectancy / .62).toFixed(2));
    this.marsExpectancy = parseFloat((this.lifeExpectancy / 1.88).toFixed(2));
    this.jupiterExpectancy = parseFloat((this.lifeExpectancy / 11.86).toFixed(2));
  }
}
