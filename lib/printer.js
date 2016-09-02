'use strict'
//
// module.exports.printDayOfWeek = function (day) {
//   switch((day) {
//    case 0 : console.log("Su "); break;
//    case 1 : console.log("Mo "); break;
//    case 2 : console.log("Tu "); break;
//    case 3 : console.log("We "); break;
//    case 4 : console.log("Th "); break;
//    case 5 : console.log("Fr "); break;
//    case 6 : console.log("Sa "); break;
//   }
// }
//
// module.exports.printDay(firstDayOfThisMonth, firstDayOfNextMonth) {
//
//
//   // if (day < 10 ) {
//   //   printedDay = " " + day
//   // }
//
// }


const { isLeapYear, returnDaysInMonth } = require('../lib/daysInMonth')
const { getDay, m, Y } = require('../lib/zeller')

let getMonthInfo = function (arg) {

  let { month, year }  = arg

  let days = returnDaysInMonth(arg)

  let dayStartIndex = getDay(arg)

  let blankEndDays = 7 - ((days + dayStartIndex) % 7)

  let monthString = printYearAndMonth(month, year, days)

  return {
    days,
    blankEndDays,
    dayStartIndex,
    month,
    monthString,
    year
  }

}





let monthWidth = null;
let leftPadding = " "
let emptyDayPadding = function (daysInMonth) {
  return daysInMonth.toString().length
}

let determineWidth = function (daysInMonth) {
  let maxDayDigits = daysInMonth.toString().length
  let lineWidth = (maxDayDigits * 7) + (6*leftPadding.length)
  return lineWidth
}


let dayOfMonth = 0

// let dayOfWeekIndex = firstDayOfMonth;


let printFirstLineCalendarDays = function (firstDayOfMonth) {

  for ( let i = firstDayOfMonth; i < 7; i++) {

    let printedDayString = ""
    dayOfMonth++

    if (firstDayOfMonth === 0) {
      printedDayString += leftPadding
      printedDayString += dayOfMonth
    }
    else {
      let offset = 6 - firstDayOfMonth
      for (let x = 0; x < offset; x ++) {
        printedDayString += leftPadding
        for ( let y = 0; y < emptyDayPadding; y++) {
          printedDayString += leftPadding
        }
      }
      if (i === 6) {
        printedDayString += "\n"
        printRemainingLines()
        break;
      }
    }
  }
}

let printRestOfLinesCalendarDays = function (daysInMonth) {
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 7; y++) {

        let printedDayString = ""

        if (y === 0) {
          printedDayString += leftPadding
          printedDayString += dayOfMonth
          dayOfMonth++
        }
        else {
          if (dayOfMonth.toString().length === 2) {
            printedDayString += leftPadding
            printedDayString += dayOfMonth
            dayOfMonth++
          }
          else if (dayOfMonth.toString().length ===1) {
            printedDayString += leftPadding + leftPadding
            printedDayString += dayOfMonth
            dayOfMonth++
          }
        }

        if (dayOfMonth > daysInMonth) {
          printedDayString += "\n"
          break;
        }

        if (y === 6) {
          printedDayString += "\n"
          dayOfMonth++
        }
      }
    }
}



// let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let centerHeading = function (monthYearString, daysInMonth) {

  let monthYearStringLength = monthYearString.length

  let width = determineWidth(daysInMonth);

  let leftHeaderPadding = Math.floor((width - monthYearStringLength) / 2)

  return leftHeaderPadding

}


let printYearAndMonth = function (month, year, daysInMonth) {

  let fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  let currMonth = fullMonths[month - 1]

  let currYear = year

  let monthYearString = currMonth + " " + currYear

  let leftHeaderPadding = centerHeading(monthYearString, daysInMonth)

  let printedString = "";

  for (let i = 0; i < leftHeaderPadding; i++) {
    printedString += " ";
  }

  printedString += monthYearString;

  return printedString

}

module.exports = { getMonthInfo, centerHeading, printYearAndMonth, determineWidth }
