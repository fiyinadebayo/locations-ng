const states = require('../data/states.json');

/**
   * Joins string with _ and converts to lowercase.
   *
   * @private
   * @param {string} string The string to modify.
   * @returns {string} Returns `text`.
   */
function formatQuery(text) {
  return text ? text.toLowerCase().split(' ').join('_') : text
}

/**
 * Returns all the states in Nigeria with their respective capital.
 *
 * @since 1.0.0
 * @param {Object} object The object to inspect.
 * @returns {boolean} Returns an array.
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
 * Returns all the states in Nigeria with their respective capital.
 *
 * @since 1.0.0
 * @param {string} state The state to search by.
 * @returns {Object} Returns an object.
 * @example
 *
 * details('Lagos')
 * // => { ... , cities: [...], lgas: [...]}
 *
 */
function details(state) {
  const index = states.findIndex(item => item.alias === formatQuery(state))
  console.log(index)

  if (index < 0) {
    return {
      message: `No state found for '${state}'`,
      status: 404
    }
  } else {
    return states[index]
  }
}

module.exports = {
  all,
  details
};
