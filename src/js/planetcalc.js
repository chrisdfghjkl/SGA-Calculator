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

  mercurySpan() {;
    this.mercuryLifeSpan = Number(parseFloat((this.mercuryExpectancy - this.mercuryAge).toFixed(2)));
    if (this.mercuryLifeSpan < 0) {
      this.mercuryLifeSpan = Math.abs(this.mercuryLifeSpan);
    }
  }

  venusSpan() {;
    this.venusLifeSpan = Number(parseFloat((this.venusExpectancy - this.venusAge).toFixed(2)));
    if (this.venusLifeSpan < 0) {
      this.venusLifeSpan = Math.abs(this.venusLifeSpan);
    }
  }

  marsSpan() {;
    this.marsLifeSpan = Number(parseFloat((this.marsExpectancy - this.marsAge).toFixed(2)));
    if (this.marsLifeSpan < 0) {
      this.marsLifeSpan = Math.abs(this.marsLifeSpan);
    }
  }

  jupiterSpan() {;
    this.jupiterLifeSpan = Number(parseFloat((this.jupiterExpectancy - this.jupiterAge).toFixed(2)));
    if (this.jupiterLifeSpan < 0) {
      this.jupiterLifeSpan = Math.abs(this.jupiterLifeSpan);
    }
  }
}
