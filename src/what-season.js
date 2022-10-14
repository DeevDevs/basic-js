const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date = "empty") {
  let year = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];
  if (date === "empty") return "Unable to determine the time of year!";
  try {
    new Date(Date.prototype.valueOf.call(date));
  } catch (err) {
    throw new Error("Invalid date!");
  }
  if (date instanceof Date === false) throw new Error("Invalid date!");
  return year[date.getMonth()];
}

module.exports = {
  getSeason,
};
