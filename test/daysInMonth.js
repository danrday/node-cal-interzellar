"use strict";

const { assert: { isFunction, deepEqual, strictEqual } } = require('chai')

const { isLeapYear, returnDaysInMonth } = require('../lib/daysInMonth')

describe('daysInMonth', () => {
  describe('returnDaysInMonth', () => {
    it('should be a function', () => {
      isFunction(returnDaysInMonth)
    })
    it('should accept one argument', () => {
      const args = { 'month': 1, 'year': 2016 }
      const expected = 31
      deepEqual(returnDaysInMonth(args), expected)
    })
  })
  describe('isLeapYear', () => {
    it('should be a function', () => {
      isFunction(isLeapYear)
    })
    it('should find a leap year', () => {
      const arg = 1800
      const expected = true
      deepEqual(isLeapYear(arg), expected)
    })
    it('should find a non leap-year', () => {
      const arg = 2016
      const expected = false
      deepEqual(isLeapYear(arg), expected)
    })
  })
})
