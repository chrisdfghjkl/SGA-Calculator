import PlanetAge from './../src/js/planetcalc';

describe('PlanetAge', () => {

  let newAge;
  beforeEach(() => {
    newAge = new PlanetAge(30)
  });

  test('should create an object for user with inputted age', () => {
    expect(newAge.age).toEqual(30);
  }); 









});