const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = String(n)
  let max = 0
  for(let i = 0; i < n.length; i++) {
    let current = Number(n.substr(0,i) + n.substr(i+1))
    max < current ? max = current : max = max
  }
  return max
}

module.exports = {
  deleteDigit
};
