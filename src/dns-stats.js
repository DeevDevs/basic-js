const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  domains
    .map((str) => str.split(".").reverse())
    .forEach((arr) => {
      arr.forEach((_, index, array) => {
        let newStr = "";
        for (let i = index; i >= 0; i--) {
          newStr = `.${array[i]}${newStr}`;
        }
        if (obj[`${newStr}`]) obj[`${newStr}`]++;
        if (!obj[`${newStr}`]) obj[`${newStr}`] = 1;
      });
    });

  return obj;
}

module.exports = {
  getDNSStats,
};
