const states = require('./data/states.json');
const city = require('./city');
const lga = require('./lga');
const helpers = require('./lib/helpers');

/**
 * Returns all the states in Nigeria with their respective capital.
 *
 * @since 1.0.0
 * @returns {Array} Returns an `array`.
 * @example
 *
 * all()
 * // => [
 * //      { name: 'Abia', capital: 'Umuahia' },
 * //      { name: 'Adamawa', capital: 'Yola' },
 * //      ...
 * //      { name: 'Yobe', capital: 'Damaturu' },
 * //      { name: 'Zamfara', capital: 'Gusau' }
 * //    ]
 *
 */
function all() {
  return states.map(state => (
    {name: state.name, capital: state.capital}
  ))
}

 /**
 * Returns details of a state in Nigeria.
 *
 * @since 1.0.0
 * @param {string} state The state to search by.
 * @returns {Object} Returns an `object`.
 * @example
 *
 * details('Lagos')
 * // => { ... , cities: [...], lgas: [...]}
 *
 */
function details(state) {
  const index = states.findIndex(s => s.alias === helpers.formatQuery(state));

  if (index < 0) {
    return {
      message: `No state found for '${state}'`,
      status: 404
    }
  } else {
    return {
      ...states[index],
      cities: city.cities(state),
      lgas: lga.lgas(state)
    }
  }
}

/**
 * Returns the capital of a state in Nigeria.
 *
 * @since 1.0.0
 * @param {string} state The state to search by.
 * @returns {string} Returns a `string`.
 * @example
 *
 * capital('Lagos')
 * // => Ikeja
 *
 */
function capital(state) {
  const index = states.findIndex(s => s.alias === helpers.formatQuery(state));

  if (index < 0) {
    return `No state found for '${state}'`
  } else {
    return states[index].capital
  }
}

module.exports = {
  all,
  details,
  capital
};
