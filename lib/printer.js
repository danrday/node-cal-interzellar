'use strict'

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

let emptyDayPadding = function (days) {
  let x = days.toString().length
  return x
}

let determineWidth = function (daysInMonth) {
  // console.log("daysInMonth", daysInMonth)
  let maxDayDigits = daysInMonth.toString().length
  // console.log("maxDayDigits", maxDayDigits)
  let lineWidth = (maxDayDigits * 7) + (6*leftPadding.length)
  return lineWidth
}

let dayOfMonth = 1

// let dayOfWeekIndex = firstDayOfMonth;

let printFirstLineCalendarDays = function (firstDayOfMonth, days) {

  let finalString = ""

  if (firstDayOfMonth === 0) {
    for (let i = 0; i < 7; i++) {
      finalString += leftPadding
      finalString += dayOfMonth.toString()
      dayOfMonth++
    }
  } else {
    //adds empty spaces before first day of the month
    let iterateEmptySpaces = (firstDayOfMonth+1) * emptyDayPadding(days)
    for (let i = 0; i < iterateEmptySpaces; i++) {
      finalString += leftPadding
    }
      //adds extra space of padding on first day before iterating
      finalString += leftPadding
      for (let i = 0; i < (7 - firstDayOfMonth); i++) {
        // console.log("YO")
        finalString += leftPadding
        finalString += leftPadding
        finalString += dayOfMonth.toString()
        dayOfMonth++
      }
    }
    return finalString

}

// let printFirstLineCalendarDays = function (firstDayOfMonth) {
//
//   let printedDayString = ""
//
//   for ( let i = firstDayOfMonth; i < 7; i++ ) {
//
//     dayOfMonth++
//
//     if (i === 0) {
//       printedDayString += leftPadding
//       printedDayString += dayOfMonth
//
//     }
//
//     else {
//       let offset = firstDayOfMonth
//       for (let x = 0; x <= offset; x++) {
//         printedDayString += leftPadding
//         for ( let y = 0; y <= emptyDayPadding; y++) {
//           printedDayString += leftPadding
//         }
//         printedDayString += leftPadding
//         printedDayString += dayOfMonth
//       }
//       if (i === 6) {
//         printedDayString += "\n"
//         return printedDayString
//         printRestOfLinesCalendarDays(days)
//         break;
//       }
//       console.log("pds", printedDayString)
//       console.log("dom", dayOfMonth)
//     }
//   }
// }


let printRestOfLinesCalendarDays = function (daysInMonth) {
  let printedDayString = ""
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 7; y++) {

        if (dayOfMonth > daysInMonth) {
          printedDayString += "\n"
          break;
        }

        if (y === 0) {
          if (dayOfMonth.toString().length === 2) {
            printedDayString += dayOfMonth.toString()
            dayOfMonth++
          } else {
          printedDayString += leftPadding
          printedDayString += dayOfMonth.toString()
          dayOfMonth++
          }
        }
        else {
          if (dayOfMonth.toString().length === 2) {
            printedDayString += leftPadding
            printedDayString += dayOfMonth.toString()
            dayOfMonth++
          }
          else if (dayOfMonth.toString().length ===1) {
            printedDayString += leftPadding + leftPadding
            printedDayString += dayOfMonth.toString()
            dayOfMonth++
          }
        }



        if (y === 6) {
          printedDayString += "\n"
          dayOfMonth++
        }
      }
    }
    return printedDayString
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

module.exports = { getMonthInfo, centerHeading, printYearAndMonth, determineWidth, printFirstLineCalendarDays, printRestOfLinesCalendarDays }
