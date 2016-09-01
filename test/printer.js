"use strict";

const { assert: { isFunction, deepEqual, strictEqual } } = require('chai')

const { getMonthInfo } = require('../lib/printer')

describe('printer', () => {
  describe('getMonthInfo', () => {
    it('should be a function', () => {
      isFunction(getMonthInfo)
    })
    it('should take one argument', () => {
      const arg = { month: 1, year: 2016 }
      const expected = { days: 31, remainingSpaces: 5, dayStart: 3, month: 1, monthString: 'January', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 6, year: 2016 }
      const expected = { days: 30, remainingSpaces: 2, dayStart: 3, month: 6, monthString: 'June', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 9, year: 2016 }
      const expected = { days: 30, remainingSpaces: 1, dayStart: 4, month: 9, monthString: 'September', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 2, year: 2016 }
      const expected = { days: 29, remainingSpaces: 5, dayStart: 1, month: 2, monthString: 'February', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 2, year: 2014 }
      const expected = { days: 28, remainingSpaces: 1, dayStart: 6, month: 2, monthString: 'February', year: 2014}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 2, year: 2015 }
      const expected = { days: 28, remainingSpaces: 0, dayStart: 0, month: 2, monthString: 'February', year: 2015}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 1, year: 2016 }
      const expected = { days: 31, remainingSpaces: 6, dayStart: 5, month: 1, monthString: 'January', year: 2016}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should equal expected', () => {
      const arg = { month: 11, year: 2014 }
      const expected = { days: 30, remainingSpaces: 6, dayStart: 6, month: 11, monthString: 'November', year: 2014}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should handle non-leap century', () => {
      const arg = { month: 2, year: 1900 }
      const expected = { days: 28, remainingSpaces: 3, dayStart: 4, month: 2, monthString: 'February', year: 1900}
      deepEqual(getMonthInfo(arg), expected)
    })
    it('should handle non-leap century', () => {
      const arg = { month: 2, year: 2000 }
      const expected = { days: 29, remainingSpaces: 4, dayStart: 2, month: 2, monthString: 'February', year: 2000}
      deepEqual(getMonthInfo(arg), expected)
    })
  })
})
