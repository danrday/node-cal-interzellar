
module.exports.isLeapYear = function (year) {
  return ((year%4 === 0 && year % 100 !== 0) || (year% 400 === 0))
}

module.exports.returnDaysInMonth = function(args) {

  let checkIsLeapYear = module.exports.isLeapYear(args.year)

  let daysInMonth = [
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ]

    let length = daysInMonth[args.month - 1]
      if (args.month == 2 && checkIsLeapYear) {
        return 29
      } else {
        return length
        }

}
