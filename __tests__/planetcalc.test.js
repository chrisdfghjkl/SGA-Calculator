import PlanetAge from './../src/js/planetcalc';

describe('PlanetAge', () => {

  test('should create an object for user with inputted age', () => {
    const newAge = new PlanetAge(30);
    expect(newAge.age).toEqual(30);
  }); 

  test('should return user age on mercury', () => {
    const mercTest = new PlanetAge(32); 
    expect(mercTest.mercury()).toEqual(133.33333333333334);
  });

  test('should return user age on venus', () => {
    const venusTest = new PlanetAge(32);
    expect(venusTest.venus()).toEqual(51.612903225806452)
  });

  test('should return user age on mars', () => {
    const marsTest = new PlanetAge(32);
    expect(marsTest.mars()).toEqual(17.021276595744681)
  });

  test('should return user age on jupiter', () => {
    const jupiterTest = new PlanetAge(32);
    expect(jupiterTest.jupiter()).toEqual(2.69814502529511)
  });





});