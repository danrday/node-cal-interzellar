"use strict";

const { assert: { isFunction, deepEqual, oneOf } } = require('chai')

const { returnDateArguments, allYears, allMonths } = require('../lib/dateArguments')


describe('dateArguments', () => {
  describe('getCurrentDate', () => {
    it('should be a function', () => {
      isFunction(getCurrentDate())
    })
    it('should return the current month and year', () => {
      const expected = { month: 9, year: 2016 }
      deepEqual(getCurrentDate(), expected)
    })
  })
  describe('returnDateArguments', () => {
    it('should be a function', () => {
      isFunction(returnDateArguments())
    })
    it ('should return an object', () => {
      let x = returnDateArguments()
      isObj(x)
    })
    it ('should handle no arguments', () => {
      const args = []
      const expected = { month: 9, year: 2016 }
      deepEqual(returnDateArguments(args), expected)
    })
    it ('single arg should be int between 1753 and 9999', () => {
      const args = 2016
      const expected = allYears
      oneOf(returnDateArguments(args).year, expected)
    })
    it ('throws error if single arg is not in range', () => {
      const arg = 0
      const expected = 'cal: year 0 not in range 1753..9999'
      deepEqual(returnDateArguments(arg), expected)
    })
    it ('throws error if single arg is NaN', () => {
      const arg = 'string'
      const expected = 'cal: year 0 not in range 1..9999'
      deepEqual(returnDateArguments(arg), expected)
    })
    it ('should handle 2 arguments', () => {
      const args = [january, 2016]
      const expected = { month: 1, year: 2016 }
      deepEqual(returnDateArguments(args), expected)
    })
    it ('when 2 arguments, first 3 letters of first arg should match first 3 letters of a month', () => {
      const args = [januaryYYY, 2016]
      const expected = 13
      oneOf(returnDateArguments(args).month, expected)
    })
    it ('when 2 arguments, if first arg is a number, first arg should be int between 1 & 12', () => {
      const args = [2, 2016]
      const expected = allMonths
      oneOf(returnDateArguments(args).month, expected)
    })
    it ('when 2 arguments, if first arg is a number, but not between 1 & 12 throw error', () => {
      const args = [13, 2016]
      const expected = 'cal: 13 is neither a month number (1..12) nor a name'
      deepEqual(returnDateArguments(args), expected)
    })
    it ('second argument should be integer between 1753 and 9999', () => {
      const args = [january, 2016]
      const expected = allYears
      oneOf(returnDateArguments(args).year, expected)
    })
    it ('throws error if second arg is not in range', () => {
      const args = [january, 0]
      const expected = 'cal: year 0 not in range 1753..9999'
      deepEqual(returnDateArguments(arg).year, expected)
    })
  })
})
