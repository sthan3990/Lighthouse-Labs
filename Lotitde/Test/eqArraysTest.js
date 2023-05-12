const eqArrays = require('../eqarrays');
const assertEqual = require('../assertequal');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
