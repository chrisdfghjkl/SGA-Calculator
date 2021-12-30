import PlanetAge from './../src/js/planetcalc';

describe('PlanetAge', () => {

  test('should create an object for user with inputted age', () => {
    const newAge = new PlanetAge(30);
    expect(newAge.age).toEqual(30);
  }); 

  test('should return user age on mercury', () => {
    const mercTest = new PlanetAge(30); 
    expect(mercTest.mercury()).toEqual(125.00);
  });







});