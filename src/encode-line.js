const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let number = 1;
  // console.log(result)
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) number++;
    else {
      if (number > 1) {
        result = result + number.toString() + str[i];
      } else {
        result = result + str[i];
      }
      number = 1;
    }
    console.log(number);
  }
  return result;
}

module.exports = {
  encodeLine,
};
