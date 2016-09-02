"use strict"

// function modYear() {
//   if(currMonth == 1)
//     {
//       currMonth = 13;
//       currYear--;
//     }
//     if (currMonth == 2)
//     {
//       currMonth = 14;
//       currYear--;
//     }
//   }
//
//   let q = currDay;
//   let m = currMonth;
//   let k = currYear % 100;
//   let j = currYear / 100;
//   let h = q + 13*(m+1)/5 + k + k/4 - k/100 + k/400;
//   h = h % 7;


  // function printDayOfWeek() {
  //   switch(Math.floor(h)) {
  //    case 0 : console.log("Saturday.\n"); break;
  //    case 1 : console.log("Sunday.\n"); break;
  //    case 2 : console.log("Monday. \n"); break;
  //    case 3 : console.log("Tuesday. \n"); break;
  //    case 4 : console.log("Wednesday. \n"); break;
  //    case 5 : console.log("Thurday. \n"); break;
  //    case 6 : console.log("Friday. \n"); break;
  //   }
  // }

  // module.exports = { modYear, printDayOfWeek }


  //class NOTES

  //mod month
  module.exports.m = (month) => month < 3 ? month + 12 : month
  //mod year
  module.exports.Y = (month, year) => month < 3 ? year - 1 : year




  module.exports.congruence = function (m, Y) {
    let h = (
    1
    + Math.floor((13 * (m + 1)) / 5)
    + Y
    + Math.floor(Y / 4)
    - Math.floor(Y / 100)
    + Math.floor(Y / 400)
    ) % 7

  return h
}

console.log("module.exports.congruence(3, 2016)", module.exports.congruence(3, 2016))

  //
  module.exports.getDay = function (arg) {
    let x = module.exports.m(arg.month)
    let y = module.exports.Y(arg.month, arg.year)
    return (module.exports.congruence(x, y) + 6) % 7
  }
