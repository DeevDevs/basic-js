const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  final = 0;
  curr = 1;
  calculateDepth(arr, depth = 1) {
    let newDepth = depth + 1;
    let bool = arr.some((el) => el instanceof Array);
    if (bool) {
      return this.calculateDepth(arr.flat(), newDepth);
    } else return depth++;
  }
}

module.exports = {
  DepthCalculator,
};
