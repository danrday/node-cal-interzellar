"use strict";

const { assert: { isFunction, deepEqual, strictEqual } } = require('chai')

const { returnDaysInMonth, isLeapYear } = require('../lib/daysInMonth')

describe('daysInMonth', () => {
  describe('returnDaysInMonth', () => {
    it('should be a function', () => {
      isFunction(returnDaysInMonth)
    })
    it('should accept one argument', () => {
      const args = { month: 1, year: 2016 }
      const expected = { daysInMonth: 30 }
      deepEqual(returnDaysInMonth(args), expected)
    })
  })
  describe('isLeapYear', () => {
    it('should be a function', () => {
      isFunction(isLeapYear)
    })
    it('should accept one argument', () => {
      const arg = 2016
      const expected = { daysInFeb: 29 }
      const arg2 = 1800
      const expected2 = { daysInFeb: 28 }
      deepEqual(isLeapYear(arg), expected)
      deepEqual(isLeapYear(arg2), expected2)
    })
  })
})
