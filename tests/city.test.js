const city = require('../city');
const citiesResponse = require('./responses/cities.json');

describe('city.all', () => {
  test('it returns all cities count', () => {
    expect(city.all().length).toBe(29)
  });

  test('it returns all cities', () => {
    expect(city.all()).toEqual(citiesResponse)
  });
});

describe('city.cities', () => {
  describe('when state is not found', () => {
    test('it returns error message', () => {
      expect(city.cities('Invalid state')).toEqual([`No cities found for 'Invalid state'`])
    })
  });

  describe('when state is found', () => {
    test('it returns the cities of a specific state', () => {
      expect(city.cities('Akwa ibom')).toEqual(['Eket', 'Ikot Ekpene', 'Oron', 'Uyo'])
    });

    test('it returns the cities for FCT', () => {
      expect(city.cities('Federal Capital Territory')).toEqual(['Abuja'])
    })
  })
});
