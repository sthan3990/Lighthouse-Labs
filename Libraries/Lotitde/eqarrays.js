// FUNCTION IMPLEMENTATION

// import the assertEqual function 
const assertEqual = require('./assertequal.js');

const eqArrays = (array1, array2) => {

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {

      if (array1[i] !== array2[j]) {
        return false;
      }
      else {
        return true;
      }
    }
  }
};


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

module.exports = eqArrays;