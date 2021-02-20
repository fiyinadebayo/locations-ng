const lgasData = require('./data/lgas.json');
const helpers = require('./lib/helpers');

/**
 * Returns all Local Government Areas (LGAs) in Nigeria.
 *
 * @since 1.0.0
 * @returns {Array} Returns an `array`.
 * @example
 *
 * all()
 * // => [
 * //      {
 * //        state: 'Abia',
 * //        state_alias: 'abia',
 * //        lgas: [
 * //           'Aba North',
 * //           ...
 * //        ],
 * //        locality: [
 * //           {}
 * //        ]
 * //      },
 * //      ...
 * //    ]
 *
 */
function all() {
  return lgasData
}

 /**
 * Returns all the LGAs for a state in Nigeria.
 *
 * @since 1.0.0
 * @param {string} state The state to search by.
 * @returns {Array} Returns an `array`.
 * @example
 *
 * lgas('fct')
 * // => [ 'Abaji', 'Amac', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali' ]
 *
 */
function lgas(state) {
  const index = lgasData.findIndex(l => l.state_alias === helpers.formatQuery(state))

  if (index < 0) {
    return [`No LGAs found for '${state}'`]
  } else {
    return lgasData[index].lgas
  }
}

/**
 * Returns all the cities for a state in Nigeria.
 *
 * @since 1.0.0
 * @param {string} state The state to search by.
 * @param {string} lga The lga to search by.
 * @returns {Array} Returns an `array`.
 * @example
 *
 * localities('Abia', 'Aba North')
 * // => [
 * //      'Ariaria',    'Asaokpoja',
 * //      'Asaokpulor', 'Eziama  ward',
 * //      'Industrial', 'Ogbor 1',
 * //      'Ogbor 2',    'Old GRA',
 * //      'Osusu 1',    'Osusu 2',
 * //      'St. Eugene', 'Umuogor',
 * //      'Umuola',     'Uratta'
 * //    ]
 *
 */
function localities(state, lga) {
  if (!state || !lga)
    return ['You must enter a state and lga.']

  const stateIndex = lgasData.findIndex(s => s.state_alias === helpers.formatQuery(state));

  if (stateIndex < 0)
    return [`'${state}' state not found`]

  const lgaIndex = lgasData[stateIndex].locality.findIndex(l => l.lga_alias === helpers.formatQuery(lga));

  if (lgaIndex < 0)
    return [`'${lga}' LGA not found for '${state}' state.`]

  return lgasData[stateIndex].locality[lgaIndex].localities
}

module.exports = {
  all,
  lgas,
  localities
};
