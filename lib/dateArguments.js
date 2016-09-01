


//array of allowed year values (1 - 9999)
module.exports.allYears = []

module.exports.allMonths = []

//creates array of allowed year values (1 - 9999)
let createAllYearsArray = function() {
  for (let i=1; i<10000; i++) {
    allYears.push(i)
  }
}

//creates array of allowed month values (3-14)
let createAllMonthsArray = function() {
  for (let i=3; i<15; i++) {
    allMonths.push(i)
  }
}
