"use strict";

const { argv: [, , ...args] } = process

const { returnDateArguments } = require('./dateArguments')
// const { returnDaysInMonth } = require('./returnDaysInMonth')
const { getMonthInfo, printYearAndMonth, printFirstLineCalendarDays, printRestOfLinesCalendarDays, determineWidth } = require('./printer')


let date = returnDateArguments(args)
console.log("date", date)

let monthInfo = getMonthInfo(date)
console.log("monthInfo", monthInfo)

console.log("determineWidth", determineWidth(monthInfo.days))

console.log("firstDayOfMonth", monthInfo.dayStartIndex)
//


let monthString = ""

monthString += printYearAndMonth(monthInfo.month, monthInfo.year, monthInfo.days)
monthString += "\n"
monthString += "Su Mo Tu We Th Fr Sa"
monthString += "\n"
monthString += printFirstLineCalendarDays(monthInfo.dayStartIndex, monthInfo.days)
monthString += "\n"
monthString += printRestOfLinesCalendarDays(monthInfo.days)
// monthString += "\n"
//
// console.log("printFirstLineCalendarDays(monthInfo.dayStartIndex):", printFirstLineCalendarDays(monthInfo.dayStartIndex))
// // console.log("monthInfo.DSI", monthInfo.dayStartIndex)
//
//
// console.log("getMonthInfo", getMonthInfo(days))
//
process.stdout.write(monthString)
