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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let numbers = [];
  const arr = n.toString().split('');
  for (let i=0;i<arr.length;i++) {
    let arrCopy = n.toString().split('')
    console.log(arrCopy)
    arrCopy.splice(i, 1);
    console.log(arrCopy)
    let subInt = Number(arrCopy.join(''));
    numbers.push(subInt);
    // console.log(subInt)
  }
  numbers.sort(function(a, b){return b-a});
  return numbers[0]
}

module.exports = {
  deleteDigit
};
