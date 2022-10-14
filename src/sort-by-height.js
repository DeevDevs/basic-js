const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = [];
  let newArr = arr
    .filter((int, index) => {
      if (int === -1) indexes.push(index);
      return int !== -1;
    })
    .sort((a, b) => a - b);
  indexes.forEach((ind) => newArr.splice(ind, 0, -1));
  return newArr;
}

module.exports = {
  sortByHeight,
};
