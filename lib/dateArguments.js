

let selectedMonth = null
let month = new Date()
let currMonth = month.getMonth() + 1

module.exports.getCurrentDate = function () {
  let currentDate = new Date().toString()
  let arrayDate = currentDate.split(' ')
  let currDay = parseInt(arrayDate[2])
  let currYear = parseInt(arrayDate[3])
  let returnedDateObj = { "month": currMonth, "year": currYear }
  return returnedDateObj
}

module.exports.yearRangeCheck = function (year) {
  if (year < 1753 || year > 9999 || isNaN(year) ) {
    let errorMessage = 'cal: year 0 not in range 1753..9999'
    return errorMessage
  } else {
    return false
  }
}

module.exports.monthRangeCheck = function (month) {
  if (typeof(month) === 'number') {
    if (month < 1 || month > 12) {
      let errorMessage = "cal: " + month + " is neither a month number (1..12) nor a name"
      return errorMessage
    } else {
      thisMonth = month
      return false
      }
  } else if (typeof(month) === 'string') {

    let allMonths = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

    for (let i = 0; i < allMonths.length; i++) {
      let n = month.toLowerCase().indexOf(allMonths[i]);
      if ( n === 0 ) {
        selectedMonth = i + 1
        return false
      } else {
        let errorMessage = `cal: is neither a month number (1..12) nor a name`
        return errorMessage
      }
    }

  } else {
    let errorMessage = `cal: is neither a month number (1..12) nor a name`
    return errorMessage
  }
}


module.exports.returnDateArguments = function (args) {

  switch (args.length) {
    case 1:
      let error = module.exports.yearRangeCheck(args[0])
      if ( error === false ) {
        return { "month": currMonth, "year": Number(args[0]) }
        break
      } else {
        return error
        break
        }
    case 2:
      let errorYear = module.exports.yearRangeCheck(args[1])
      let errorMonth = module.exports.monthRangeCheck(args[0])
      if (errorYear === false && errorMonth === false) {

        return { "month": selectedMonth, "year": Number(args[1]) }
        break
      } else if (errorMonth !== false) {
          return errorMonth
          break
        } else {
          return errorYear
          break
          }
    default:
      return module.exports.getCurrentDate()
    }
}

//for tests
module.exports.allMonths = [1,2,3,4,5,6,7,8,9,10,11,12]
module.exports.allYears = []

for (let i= 1752; i < 10000; i++) {
  module.exports.allYears.push(i)
}
