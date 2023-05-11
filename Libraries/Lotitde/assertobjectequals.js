/*
Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
*/

// import modules
import { assertEqual } from "./assertequal.js"; 

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const eqObjects = function (object1, object2) {

  // extract keys and turn into array
  let obj1Array = Object.keys(object1);
  let obj2Array = Object.keys(object2);

  // TEST 1: If the objects are the same length 
  if (obj1Array.length !== obj2Array.length) {
    return false;
  }

  for (let key in object1) {
    let valObj1 = object1[key];
    let valObj2 = object2[key];

    // TEST 2 
    // If this isn't the array of values and  the two don't equal each other
    if (!Array.isArray(valObj1) && valObj1 !== valObj2) {
      return false;
    }
    // TEST 3 
    // If this is a array and eqArray returns false 
    else if (Array.isArray(valObj1) && !eqArrays(valObj1, valObj2)) {
      return false;
    }

  }

  return true;
};

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true


module.exports = assertObjectsEqual;