const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // console.log(names);
  let arr = [...new Set(names)];
  let result = [];
  for (el of arr) {
    let indexNameArr = Array.from(names.entries()).filter((i) => i[1] == el);
    // console.log(indexNameArr);
    for (item in indexNameArr) {
      // console.log(indexNameArr[item]);
      if (item > 0) {
        result[indexNameArr[item][0]] = `${indexNameArr[item][1]}(${item})`;
      } else {
        result[indexNameArr[item][0]] = `${indexNameArr[item][1]}`;
      }
    }
  }
  if (
    Math.max(...result.map((el) => result.filter((i) => i === el).length)) > 1
  ) {
    result = renameFiles(result);
  }

  return result;
}

module.exports = {
  renameFiles,
};
