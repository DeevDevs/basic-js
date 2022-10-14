const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let obj = {};
  matrix.forEach((element, ind) => {
    obj[ind] = element;
    obj[ind] = obj[ind].map(() => 0);
  });

  matrix.forEach((arr, index, thatArr) => {
    arr.forEach((bool, i, thisArr) => {
      if (bool === true) {
        if (typeof thisArr[i + 1] === "boolean") obj[index][i + 1]++;
        if (typeof thisArr[i - 1] === "boolean") obj[index][i - 1]++;
        if (typeof thatArr[index - 1] === "object") {
          if (typeof thatArr[index - 1][i] === "boolean") obj[index - 1][i]++;
          if (typeof thatArr[index - 1][i - 1] === "boolean")
            obj[index - 1][i - 1]++;
          if (typeof thatArr[index - 1][i + 1] === "boolean")
            obj[index - 1][i + 1]++;
        }
        if (typeof thatArr[index + 1] === "object") {
          if (typeof thatArr[index + 1][i] === "boolean") obj[index + 1][i]++;
          if (typeof thatArr[index + 1][i - 1] === "boolean")
            obj[index + 1][i - 1]++;
          if (typeof thatArr[index + 1][i + 1] === "boolean")
            obj[index + 1][i + 1]++;
        }
      }
    });
  });

  return Object.values(obj);
}

module.exports = {
  minesweeper,
};
