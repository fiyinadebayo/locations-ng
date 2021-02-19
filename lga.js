const lgasData = require('./data/lgas.json');
const helpers = require('./lib/helpers');

/**
 * Returns all Local Government Areas (LGAs) in Nigeria.
 *
 * @since 1.0.0
 * @returns {Array} Returns an array.
 * @example
 *
 * all()
 * // => [
 * //      { state: 'Akwa Ibom', alias: 'akwa_ibom', cities: [ 'Eket', 'Ikot Ekpene', 'Oron', 'Uyo' ] },
 * //      { state: 'Bauchi', alias: 'bauchi', cities: [ 'Bauchi' ] },
 * //      { state: 'Benue', alias: 'benue', cities: [ 'Makurdi' ] },
 * //      ...
 * //      { state: 'Zamfara', alias: 'zamfara', cities: [ 'Gusau' ] }
 * //    ]
 *
 */
function all() {
  return lgasData
}

 /**
 * Returns all the cities for a state in Nigeria.
 *
 * @since 1.0.0
 * @param {string} state The state to search by.
 * @returns {Array} Returns an `array`.
 * @example
 *
 * cities('Akwa Ibom')
 * // => [ 'Eket', 'Ikot Ekpene', 'Oron', 'Uyo' ]
 *
 */
function cities(state) {
  const index = citiesData.findIndex(item => item.alias === helpers.formatQuery(state))

  if (index < 0) {
    return [`No cities found for '${state}'`]
  } else {
    return citiesData[index].cities
  }
}

module.exports = {
  all,
  cities
};
