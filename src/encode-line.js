const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strNew = "";
  let currCharCount = 0;
  let currChar = str.split("")[0];
  str.split("").forEach((char, i, array) => {
    if (currChar !== char && currCharCount > 0) {
      strNew = strNew + `${currCharCount > 1 ? currCharCount : ""}${currChar}`;
      currCharCount = 0;
    }
    if (currChar === char) currCharCount++;
    if (currChar !== char && currCharCount === 0) {
      currChar = char;
      currCharCount = 1;
    }
    if (i === array.length - 1) {
      strNew = strNew + `${currCharCount > 1 ? currCharCount : ""}${currChar}`;
    }
  });
  return strNew;
}

module.exports = {
  encodeLine,
};
