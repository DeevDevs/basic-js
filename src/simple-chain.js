const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//   },
//   addLink(value) {
//     throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//   },
// };

const chainMaker = {
  str: "",
  result: "",
  getLength() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  addLink(value) {
    if (this.str === "") {
      this.str = `( ${String(value)} )`;
    } else this.str = `${this.str}~~( ${String(value)} )`;
    return this;
  },
  removeLink(position) {
    let requiredArr = this.str.split("~~");
    if (
      typeof position !== "number" ||
      position - 1 < 0 ||
      position > requiredArr.length - 1
    ) {
      this.str = "";
      throw new Error(`You can\'t remove incorrect link!`);
      // return `You can\'t remove incorrect link!`;
    }
    this.str = this.str
      .split("~~")
      .filter((_, index) => index !== position - 1)
      .join("~~")
      .replaceAll(`{}`, `{ }`);
    return this;
  },
  reverseChain() {
    this.str = this.str.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    this.result = this.str;
    this.str = "";
    return this.result;
  },
};

module.exports = {
  chainMaker,
};
