'use strict';

/**
 * A flatten method
 * You can use it like flattenDeep
 * flatten([[1,2,[3]],4]) -> [1,2,3,4]
 * Or you can flatten with depth
 * flatten([[1,2,[3]],4], { depth: 1 }) -> [1,2,[3],4]
 * @param {array} source The array to flatten
 * @param {Object} option some option
 * @param {number} [option.depth=Infinity] The maximum recursion depth.
 * @return {array} the flatten array
 */
function flatten(source, option) {
  const { depth = Infinity, result = [] } = option || {};
  if (!Array.isArray(source) || source.length === 0) {
    return result;
  }

  for (const value of source) {
    if (depth > 0 && Array.isArray(value)) {
      flatten(value, { depth: depth - 1, result });
    } else {
      result.push(value);
    }
  }

  return result;
}

module.exports = flatten;
