const { NotImplementedError } = require("../extensions/index.js");

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
  if (arr instanceof Array !== true)
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;
  if (
    arr.indexOf("--discard-next") === -1 &&
    arr.indexOf("--discard-prev") === -1 &&
    arr.indexOf("--double-next") === -1 &&
    arr.indexOf("--double-prev") === -1
  )
    return arr;
  let newArr = arr.slice();
  function cleanUp(arrayToFix) {
    let argArray = arrayToFix.slice();
    let i = 0;
    while (
      (i < argArray.length - 1 &&
        argArray[i] !== "--discard-prev" &&
        argArray[i] !== "--discard-next" &&
        argArray[i] !== "--double-next" &&
        argArray[i] !== "--double-prev") ||
      (i < argArray.length - 1 && argArray[i] === "rtgoft")
    ) {
      i++;
    }
    if (i < argArray.length && argArray[i] === "--discard-next")
      return cleanUp(discardNext(argArray, i));
    if (i < argArray.length && argArray[i] === "--discard-prev")
      return cleanUp(discardPrev(arrayToFix, i));
    if (i < argArray.length && argArray[i] === "--double-next")
      return cleanUp(doubleNext(argArray, i));
    if (i < argArray.length && argArray[i] === "--double-prev")
      return cleanUp(doublePrev(argArray, i));
    if (i === argArray.length - 1) return argArray;
  }
  function discardNext(arrow, index) {
    let array = arrow.slice();
    if (!array[index + 1]) {
      array.splice(index, 1, "rtgoft");
      return array;
    } else {
      array.splice(index, 2, "rtgoft", "rtgoft");
      return array;
    }
  }
  function discardPrev(arrow, index) {
    let array = arrow.slice();
    if (!array[index - 1]) {
      array.splice(index, 1, "rtgoft");
      return array;
    }
    if (array[index - 1] === "rtgoft") {
      array.splice(index, 1, "rtgoft");
      return array;
    }
    array.splice(index - 1, 2, "rtgoft", "rtgoft");
    return array;
  }
  function doubleNext(arrow, index) {
    let array = arrow.slice();
    if (!array[index + 1]) {
      array.splice(index, 1, "rtgoft");
      return array;
    } else {
      array.splice(index, 1, array[index + 1]);
      return array;
    }
  }
  function doublePrev(arrow, index) {
    let array = arrow.slice();
    if (!array[index - 1]) {
      array.splice(index, 1, "rtgoft");
      return array;
    }
    if (array[index - 1] === "rtgoft") {
      array.splice(index, 1, "rtgoft");
      return array;
    }
    array.splice(index, 1, array[index - 1]);
    return array;
  }
  let finalArr = cleanUp(newArr);
  return finalArr === undefined
    ? finalArr
    : finalArr.filter((el) => el !== "rtgoft");
}

module.exports = {
  transform,
};
