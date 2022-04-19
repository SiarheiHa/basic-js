const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let addition = "";
  let separator = "+";
  let additionSeparator = "|";

  if (options.addition !== undefined) addition = String(options.addition);
  if (options.separator !== undefined) separator = options.separator;
  if (options.additionSeparator !== undefined)
    additionSeparator = options.additionSeparator;

  const repeatBlock =
    str +
    (addition + additionSeparator).repeat(options.additionRepeatTimes - 1) +
    addition;
  const result =
    (repeatBlock + separator).repeat(options.repeatTimes - 1) + repeatBlock;

  console.log(result);
  return result;
}

module.exports = {
  repeater,
};
