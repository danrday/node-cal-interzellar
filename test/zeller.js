"use strict";

const { assert: { isFunction, strictEqual, deepEqual } } = require('chai')

const { getDay, m, Y } = require('../lib/zeller')

describe('zellers', () => {
  describe('getDay', () => {
    it('should be a function', () => {
      isFunction(getDay)
    })
    it('should accept one argument', () => {
      const args = { 'month': 1, 'year': 2016 }
      const expected = 5
      deepEqual(getDay(args), expected)
    })
    it('should return a sunday indexed day of the week', () => {
      strictEqual(getDay({ 'month': 1, 'year': 2016 }), 5)
    })
  })
  describe('modifiedMonth', () => {
    it('should be a function', () => {
      isFunction(m)
    })
    it('should handle Jan', () => {
      strictEqual(m(1), 13)
    })
    it('should handle other months', () => {
      strictEqual(m(3), 3)
    })
  })
  describe('modifiedYear', () => {
    it('should be a function', () => {
      isFunction(Y)
    })
    it('should handle January', () => {
      strictEqual(Y(1, 2000), 1999)
    })
    it('should handle February', () => {
      strictEqual(Y(2, 2000), 1999)
    })
    it('should handle other months', () => {
      strictEqual(Y(3, 2000), 2000)
    })
  })
})
