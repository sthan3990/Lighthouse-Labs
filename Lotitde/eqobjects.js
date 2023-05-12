/*
Goal 
Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
*/

const eqArrays = require('./eqarrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


module.exports = eqObjects;