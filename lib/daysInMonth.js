
module.exports.isLeapYear = function (year) {
  let leapYear = ((year%4 === 0) && (year % 100 != 0) || (year% 400 == 0))
  if (leapYear === true) { return { 'daysInFeb': 29 } }
  else { return { 'daysInFeb': 28 } }
}
