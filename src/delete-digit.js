const { NotImplementedError } = require("../extensions/index.js");

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
  let arr = [];
  let text = n.toString();
  for (let i = 0; i < text.length; i++) {
    arr.push(
      +text
        .split("")
        .filter((int, ind) => ind !== i)
        .join("")
    );
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
