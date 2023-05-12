const assertObjectsEqual = require('../assertobjectequals');
const eqObjects = require('../eqobjects');

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true
