const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let result = [];
  let discard = false;
  let double = false;
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  arr.forEach((el, index) => {
   
    if (double === true) {
          // console.log(el)
      result.push(el)
      double = false
    }
    if (discard === true) {
      discard = false
    }    
    else if (el === '--discard-next') {
      arr[index + 2 ] !== '--discard-prev' ? discard = true : discard
    }
    else if (el === '--discard-prev') {
      result.pop()
    }
    else if (el === '--double-next') {
      double = true
    }
    else if (el === '--double-prev') {
      index !== 0 && arr[index - 2 ] !== '--discard-next' ? result.push(arr[index-1]) : result
      
    }
    else {
      result.push(el)
    }   
  })
  return result;
}
module.exports = {
  transform
};
