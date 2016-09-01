"use strict";

const { assert: { isFunction, strictEqual } } = require('chai')

const { modifiedMonth, modifiedYear, getDay } = require('../lib/zeller')

describe('zellers', () => {
  describe('getDay', () => {
    it('should be a function', () => {
      isFunction(getDay)
    })
    it('should accept one argument', () => {
      const args = { month: 1, year: 2016 }
      const expected = { getDay: 5 }
      deepEqual(getDay(args), expected)
    })
    it('should return a sunday indexed day of the week', () => {
      strictEqual(getDay(2016, 8, 1), 1)
      strictEqual(getDay(2016, 9, 11), 0)
    })
  })
  describe('modifiedMonth', () => {
    it('should be a function', () => {
      isFunction(modifiedMonth)
    })
    it('should handle Jan', () => {
      strictEqual(modifiedMonth(1), 13)
    })
    it('should handle other months', () => {
      strictEqual(modifiedMonth(3), 3)
    })
  })
  describe('modifiedYear', () => {
    it('should be a function', () => {
      isFunction(getDay)
    })
    it('should handle January', () => {
      strictEqual(modifiedYear(2000, 1), 1999)
    })
    it('should handle February', () => {
      strictEqual(modifiedYear(2000, 2), 1999)
    })
    it('should handle other months', () => {
      strictEqual(modifiedYear(2000, 3), 2000)
    })
  })
})
