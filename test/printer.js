"use strict";

const { assert: { isFunction, deepEqual, strictEqual } } = require('chai')
const { exec } = require('child_process')
// const { getMonthInfo, 
//         printMonthCal,
//         centerHeading,
//         printYearAndMonth,
//         determineWidth
//       } = require('../lib/printer')


describe('printer', () => {

  describe('centerHeading', () => {  
    it('should be a function', () => {
        isFunction(centerHeading)
    })
    it('should return a number', () => {
      let centerHeadingVal = centerHeading("January 2016", 31);
      assert.isNumber(centerHeadingVal, 'amount of left padding on header line');
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
      assert.isString(printYearAndMonthVal, 'complete printed month header string');
    })
    it ('should return complete printed month header', () => {
      let month = 2,
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
      assert.isNumber(determineWidthVal, 'width of calendar month');
    })
    it ('should return width of calendar month', () => {
      let daysInMonth = 31
      let expected = 20
      strictEqual(determineWidth(daysInMonth), expected)
    })
  })
  
  describe('printMonthCal', () => {  
    it('should be a function', () => {
        isFunction(printMonthCal)
    })
    it('should return the same output as cal for Jan 2016', (cb) => {
      exec('cal 1 2016', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(1, 2016), calStdout)
        cb()
      })
    })
    it('should return the same output as cal for June 2016', (cb) => {
      exec('cal 6 2016', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(6, 2016), calStdout)
        cb()
      })
    })
    it('should return the same output as cal for Sept 2016', (cb) => {
      exec('cal 9 2016', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(9, 2016), calStdout)
        cb()
      })
    })  
    it('should return the same output as cal for Feb 2016', (cb) => {
      exec('cal 2 2016', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(2, 2016), calStdout)
        cb()
      })
    })
    it('should return the same output as cal for Feb 2014', (cb) => {
      exec('cal 2 2014', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(2, 2014), calStdout)
        cb()
      })
    })
    it('should return the same output as cal for Feb 2015', (cb) => {
      exec('cal 2 2015', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(2, 2015), calStdout)
        cb()
      })
    })
    it('should return the same output as cal for Nov 2014', (cb) => {
      exec('cal 11 2014', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(11, 2014), calStdout)
        cb()
      })
    })
    it('should return the same output as cal for Feb 1900', (cb) => {
      exec('cal 2 1900', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(2, 1900), calStdout)
        cb()
      })
    })
    it('should return the same output as cal for Feb 2000', (cb) => {
      exec('cal 2 2000', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(2, 2000), calStdout)
        cb()
      })
    })
    it('should return the same output as cal for Feb 1800', (cb) => {
      exec('cal 2 1800', (calErr, calStdout) => {
        if (calErr) console.log(calErr);
        assert.strictEqual(printMonthCal(2, 1800), calStdout)
        cb()
      })
    })
  })
  
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
