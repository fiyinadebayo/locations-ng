/**
   * Joins string with _ and converts to lowercase.
   *
   * @private
   * @param {string} string The string to modify.
   * @returns {string} Returns modified `state`.
   */
  function formatQuery(text) {
    const s = text ? text.toLowerCase().split(' ').join('_') : text;
    return ['federal_capital_territory', 'abuja'].indexOf(s) >= 0 ? 'fct' : s;
  }

  module.exports = {
    formatQuery
  }