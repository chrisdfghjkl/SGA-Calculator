import PlanetAge from './../src/js/planetcalc';

describe('PlanetAge', () => {

  let newAge;
  beforeEach(() => {
    newAge = new PlanetAge(30)
  });

  test('should create an object for user with inputted age', () => {
    expect(newAge.age).toEqual(30);
  }); 

  test('should return user ages on different planets', () => {
    expect(newAge.mercuryAge).toEqual(125);
    expect(newAge.venusAge).toEqual(48.39);
    expect(newAge.marsAge).toEqual(15.96);
    expect(newAge.jupiterAge).toEqual(2.53);
  });









});