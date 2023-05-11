/* 
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value. 
*/

const assertArraysEqual = require('./assertarraysequal.js');

const takeUntil = function(array, callback) {
  let results = [];

  for (let i = 0; i < array.length; i++) {

    if (callback(array[i])) {

      results = array.slice(0, i);

      return results;

    }

  }

  return results;
};



const data2 = [1, 2, 5, 7, 2];

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1,data2);


module.exports = takeUntil;