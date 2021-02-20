const lga = require('../lga');
const lgaResponse = require('./responses/lgas.json');

describe('lga.all', () => {
  test('it returns all lgas count', () => {
    expect(lga.all().length).toBe(37)
  });

  test('it returns all lgas', () => {
    expect(lga.all()).toEqual(lgaResponse)
  });
});

describe('lga.lgas', () => {
  describe('when state is not found', () => {
    test('it returns error message', () => {
      expect(lga.lgas('unknown state')).toEqual([`No LGAs found for 'unknown state'`])
    })
  });

  describe('when state is found', () => {
    test('it returns the lgas count for state', () => {
      expect(lga.lgas('Lagos').length).toBe(20)
    });

    test('it returns the lgas for state', () => {
      expect(lga.lgas('Lagos')).toEqual([
        'Agege', 'Ajeromi/ifelodun', 'Alimosho', 'Amuwo-odofin', 'Apapa',
        'Badagry', 'Epe', 'Eti-osa', 'Ibeju/lekki', 'Ifako/ijaiye',
        'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland',
        'Mushin', 'Ojo', 'Oshodi/isolo', 'Shomolu', 'Surulere'
     ])
    })
  })
});

describe('lga.localities', () => {
  describe('when no argument is passed', () => {
    test('it returns an error message', () => {
      expect(lga.localities()).toEqual(['You must enter a state and lga.'])
    });

    test('it returns an error message', () => {
      expect(lga.localities('Kano')).toEqual(['You must enter a state and lga.'])
    });

    test('it returns an error message', () => {
      expect(lga.localities(null, 'Kano')).toEqual(['You must enter a state and lga.'])
    })
  });

  describe('when state is not found', () => {
    test('it returns an error message', () => {
      expect(lga.localities('logos', 'South West')).toEqual([`'logos' state not found`])
    })
  });

  describe('when lgas for a state is not found', () => {
    test('it returns an error message', () => {
      expect(lga.localities('Abia', 'Isiala Ngwa')).toEqual([`'Isiala Ngwa' LGA not found for 'Abia' state.`])
    })
  });

  describe('when localities are found for lga', () => {
    test('it returns localities for LGAs in a state', () => {
      expect(lga.localities('Abia', 'Aba North')).toEqual([
        'Ariaria', 'Asaokpoja', 'Asaokpulor',
        'Eziama  ward', 'Industrial', 'Ogbor 1',
        'Ogbor 2', 'Old GRA', 'Osusu 1', 'Osusu 2',
        'St. Eugene', 'Umuogor', 'Umuola', 'Uratta'
      ])
    })
  })
})
