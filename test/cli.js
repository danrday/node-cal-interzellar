"use strict";

const { printMonthCal
} = require('../lib/cli')

describe('printMonthCal', () => {
  it('should be a function', () => {
      isFunction(printMonthCal)
  })
  it('should return the same output as cal for Jan 2016', (cb) => {
    exec('cal 1 2016', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(1, 2016), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for June 2016', (cb) => {
    exec('cal 6 2016', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(6, 2016), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for Sept 2016', (cb) => {
    exec('cal 9 2016', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(9, 2016), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for Feb 2016', (cb) => {
    exec('cal 2 2016', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(2, 2016), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for Feb 2014', (cb) => {
    exec('cal 2 2014', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(2, 2014), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for Feb 2015', (cb) => {
    exec('cal 2 2015', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(2, 2015), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for Nov 2014', (cb) => {
    exec('cal 11 2014', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(11, 2014), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for Feb 1900', (cb) => {
    exec('cal 2 1900', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(2, 1900), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for Feb 2000', (cb) => {
    exec('cal 2 2000', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(2, 2000), calStdout)
      cb()
    })
  })
  it('should return the same output as cal for Feb 1800', (cb) => {
    exec('cal 2 1800', (calErr, calStdout) => {
      if (calErr) console.log(calErr);
      strictEqual(printMonthCal(2, 1800), calStdout)
      cb()
    })
  })
})
