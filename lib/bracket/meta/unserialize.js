'use strict'

/**
 * Converts a loaded POJO into a state object ready for live execution.
 *
 * Part of the `meta` handler section.
 *
 * @memberOf module:Bracket
 * @param {object} loadedState - data from a DB
 * @returns {object} instanceState - ready for execution
 */
const unserialize = (loadedState = {}) => {
  const { args = {}, name, label, initialOrderFilled } = loadedState

  return {
    label,
    name,
    args,
    initialOrderFilled
  }
}

module.exports = unserialize
