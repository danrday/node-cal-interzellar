"use strict";

const { assert: { isFunction,
                  deepEqual,
                  strictEqual,
                  isNumber,
                  isString
                } } = require('chai')
const { exec } = require('child_process')
const { getMonthInfo,
        centerHeading,
        printYearAndMonth,
        determineWidth
      } = require('../lib/printer')


describe('printer', () => {

  describe('centerHeading', () => {
    it('should be a function', () => {
        isFunction(centerHeading)
    })
    it('should return a number', () => {
      let centerHeadingVal = centerHeading("January 2016", 31);
      isNumber(centerHeadingVal, 'amount of left padding on header line');
    })
    it ('should return amount of left padding needed', () => {
      let monthYearString = "January 2016",
          daysInMonth = 31
      let expected = 4
      strictEqual(centerHeading(monthYearString, daysInMonth), expected)
    })
  })

  describe('printYearAndMonth', () => {
    it('should be a function', () => {
        isFunction(printYearAndMonth)
    })
    it('should return a String', () => {
      let printYearAndMonthVal = printYearAndMonth(2, 2016, 31);
      isString(printYearAndMonthVal, 'complete printed month header string');
    })
    it ('should return complete printed month header', () => {
      let month = 1,
          year = 2016,
          daysInMonth = 31
      let expected = "    January 2016"
      strictEqual(printYearAndMonth(month, year, daysInMonth), expected)
    })
  })

  describe('determineWidth', () => {
    it('should be a function', () => {
        isFunction(determineWidth)
    })
    it('should return a number', () => {
      let determineWidthVal = determineWidth(31);
      isNumber(determineWidthVal, 'width of calendar month');
    })
    it ('should return width of calendar month', () => {
      let daysInMonth = 31
      let expected = 20
      strictEqual(determineWidth(daysInMonth), expected)
    })
  })



  describe('getMonthInfo', () => {
    it('should be a function', () => {
      isFunction(getMonthInfo)
    })
    it('should take one argument', () => {
      const arg = { month: 1, year: 2016 }
      const expected = { days: 31, blankEndDays: 6, dayStartIndex: 5, month: 1, monthString: '    January 2016', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 6, year: 2016 }
      const expected = { days: 30, blankEndDays: 2, dayStartIndex: 3, month: 6, monthString: '     June 2016', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 9, year: 2016 }
      const expected = { days: 30, blankEndDays: 1, dayStartIndex: 4, month: 9, monthString: '   September 2016', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 2, year: 2016 }
      const expected = { days: 29, blankEndDays: 5, dayStartIndex: 1, month: 2, monthString: '   February 2016', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 2, year: 2014 }
      const expected = { days: 28, blankEndDays: 1, dayStartIndex: 6, month: 2, monthString: '   February 2014', year: 2014}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 2, year: 2015 }
      const expected = { days: 28, blankEndDays: 7, dayStartIndex: 0, month: 2, monthString: '   February 2015', year: 2015}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 1, year: 2016 }
      const expected = { days: 31, blankEndDays: 6, dayStartIndex: 5, month: 1, monthString: '    January 2016', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 11, year: 2014 }
      const expected = { days: 30, blankEndDays: 6, dayStartIndex: 6, month: 11, monthString: '   November 2014', year: 2014}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should handle non-leap century', () => {
      const arg = { month: 2, year: 1900 }
      const expected = { days: 28, blankEndDays: 3, dayStartIndex: 4, month: 2, monthString: '   February 1900', year: 1900}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should handle leap century', () => {
      const arg = { month: 2, year: 2000 }
      const expected = { days: 29, blankEndDays: 4, dayStartIndex: 2, month: 2, monthString: '   February 2000', year: 2000}
      deepEqual(getMonthInfo(arg), expected)
    })
  })
})
