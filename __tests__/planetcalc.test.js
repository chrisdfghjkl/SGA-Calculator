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

  test('should calculate life expectancy on each planet', () =>{
    const lifespan = new PlanetAge(30);
    lifespan.planetExpectancy();
    expect(lifespan.mercuryExpectancy).toEqual(302.50);
    expect(lifespan.venusExpectancy).toEqual(117.10);
    expect(lifespan.marsExpectancy).toEqual(38.62);
    expect(lifespan.jupiterExpectancy).toEqual(6.12);
  });

  test('should calculate years left to live on Mercury', () => {
    const leftToLive = new PlanetAge(30);
    leftToLive.ageConverter();
    leftToLive.planetExpectancy();
    leftToLive.mercurySpan();
    expect(leftToLive.mercuryLifeSpan).toEqual(177.50);
  });

  test('should return years past life expectancy lived on Mercury', () => {
    const leftToLive = new PlanetAge(80);
    leftToLive.ageConverter();
    leftToLive.planetExpectancy();
    leftToLive.mercurySpan();
    expect(leftToLive.mercuryLifeSpan).toEqual(30.83);
  });

  test('should return years left to live on Venus', () => {
    const leftToLiveVenus = new PlanetAge(30);
    leftToLiveVenus.ageConverter();
    leftToLiveVenus.planetExpectancy();
    leftToLiveVenus.mercurySpan();
    expect(leftToLive.venusLifeSpan).toEqual(68.71);
  });

  test('should return years past life expectancy lived on Venus', () => {
    const leftToLiveVenus = new PlanetAge(80);
    leftToLiveVenus.ageConverter();
    leftToLiveVenus.planetExpectancy();
    leftToLiveVenus.mercurySpan();
    expect(leftToLive.venusLifeSpan).toEqual(11.93);
  });
});