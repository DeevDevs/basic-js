const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionInstances = [];
  if (options.hasOwnProperty("addition")) {
    if (options.additionRepeatTimes && options.additionRepeatTimes > 1) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        additionInstances.push(
          typeof options.addition === "string"
            ? options.addition
            : String(options.addition)
        );
      }
    } else
      additionInstances.push(
        typeof options.addition === "string"
          ? options.addition
          : String(options.addition)
      );
  }

  let unitedAdditionInstance;
  if (options.hasOwnProperty("additionSeparator")) {
    unitedAdditionInstance = additionInstances.join(
      `${
        typeof options.additionSeparator === "string"
          ? options.additionSeparator
          : String(options.additionSeparator)
      }`
    );
  } else unitedAdditionInstance = additionInstances.join("|");
  let mainStringInstances = [];
  if (options.repeatTimes && options.repeatTimes > 1) {
    for (let i = 0; i < options.repeatTimes; i++) {
      mainStringInstances.push(
        `${
          typeof str === "string" ? str : String(str)
        }${unitedAdditionInstance}`
      );
    }
  } else
    return `${
      typeof str === "string" ? str : String(str)
    }${unitedAdditionInstance}`;
  if (options.hasOwnProperty("separator")) {
    return mainStringInstances.join(
      `${
        typeof options.separator === "string"
          ? options.separator
          : String(options.separator)
      }`
    );
  } else return mainStringInstances.join("+");
}

module.exports = {
  repeater,
};
