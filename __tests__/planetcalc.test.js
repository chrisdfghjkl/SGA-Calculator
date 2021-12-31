import PlanetAge from './../src/js/planetcalc';

describe('PlanetAge', () => {

  test('should create an object for user with inputted age', () => {
    const newAge = new PlanetAge(30);
    expect(newAge.age).toEqual(30);
  }); 

  test('should return user age on on different planets', () => {
    const planetsAge = new PlanetAge(30);
    planetsAge.ageConverter();
    expect(planetsAge.mercuryAge).toEqual(125.00);
    expect(planetsAge.venusAge).toEqual(48.39);
    expect(planetsAge.marsAge).toEqual(15.96);
    expect(planetsAge.jupiterAge).toEqual(2.53);
  });
});