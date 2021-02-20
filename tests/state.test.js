const state = require('../state');
const canonicalStates = require('./responses/canonical-states.json');

describe('state.all', () => {
  test('it returns 37 states in Nigeria', () => {
    expect(state.all().length).toBe(37)
  });

  test('it returns all canonical states, with name and capital', () => {
    expect(state.all()).toEqual(canonicalStates)
  });
});

describe('state.details', () => {
  describe('when state is not found', () => {
    test('it returns error message', () => {
      expect(state.details('Lago')).toEqual({
        message: `No state found for 'Lago'`,
        status: 404
      })
    })
  });

  describe('when state is found', () => {
    test('it returns detailed data for the state', () => {
      expect(state.details('Lagos')).toEqual({
        'minLat': 6.3936419,
        'name': 'Lagos',
        'capital': 'Ikeja',
        'latitude': 6.5243793,
        'minLong': 3.0982732,
        'maxLat': 6.7027984,
        'longitude': 3.3792057,
        'maxLong': 3.696727799999999,
        'area': 3345,
        'alias': 'lagos',
        'cities': ['Agege', 'Ikeja'],
        'lgas': ['Agege', 'Ajeromi/ifelodun', 'Alimosho',
                'Amuwo-odofin', 'Apapa', 'Badagry', 'Epe',
                'Eti-osa', 'Ibeju/lekki', 'Ifako/ijaiye',
                'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island',
                'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi/isolo',
                'Shomolu', 'Surulere']
      })
    })
  })
});

describe('state.capital', () => {
  describe('when state is not found', () => {
    test('it returns error message', () => {
      expect(state.capital('london')).toBe(`No state found for 'london'`)
    })
  });

  describe('when state is found', () => {
    test('it returns detailed data for the state', () => {
      expect(state.capital('Plateau')).toEqual('Jos')
    })
  })
}) 
