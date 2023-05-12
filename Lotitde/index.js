// This is so one single require can give us access to the entire library (collection) of lotide functions.

// index.js
const assertArraysEqual  = require('./assertarraysequal');
const assertEqual        = require('./assertequal');
const assertObjectsEqual = require('./assertobjectequals');
const countLetters       = require('./countletters');
const countOnly          = require('./countOnly');
const eqArrays           = require('./eqarrays');
const eqObjects          = require('./eqobjects');
const findKey            = require('./findkey');
const findKeyByValue     = require('./findkeybyvalue');
const head               = require('./head');
const letterPositions    = require('./letterposition');
const map                = require('./map');
const middle             = require('./middle');
const tail               = require('./tail');
const takeUntil          = require('./takeuntil');
const without            = require('./without');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without,
};