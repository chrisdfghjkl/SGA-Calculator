import PlanetAge from './../src/js/planetcalc';

describe('PlanetAge', () => {

  test('should create an object for user with inputted age', () => {
    const newAge = new PlanetAge(30);
    expect(newAge.age).toEqual(30);
  }); 

  test('should return user age on mercury', () => {
    const mercTest = new PlanetAge(32); 
    expect(mercTest.mercury()).toEqual(133.33);
  });

  test('should return user age on venus', () => {
    const venusTest = new PlanetAge(32);
    expect(venusTest.venus()).toEqual(51.61)
  });

  test('should return user age on mars', () => {
    const marsTest = new PlanetAge(32);
    expect(marsTest.mars()).toEqual(17.02)
  });

  test('should return user age on jupiter', () => {
    const jupiterTest = new PlanetAge(32);
    expect(jupiterTest.jupiter()).toEqual(2.70)
  });





});