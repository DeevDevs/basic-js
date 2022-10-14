const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let obj = {};
  for (let i = 0; i < matrix[0].length; i++) {
    obj[i] = [];
  }
  matrix.forEach((element) => {
    element.forEach((int, ind) => {
      obj[ind].push(int);
    });
  });
  return Object.values(obj)
    .map((el) => {
      // console.log(el.indexOf(0));
      return el
        .slice(0, el.indexOf(0) !== -1 ? el.indexOf(0) : el.length)
        .reduce((sum, val) => (sum += val), 0);
    })
    .reduce((sum, val) => (sum += val), 0);
}

module.exports = {
  getMatrixElementsSum,
};
