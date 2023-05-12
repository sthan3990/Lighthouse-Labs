const assertArraysEqual = require('../assertarraysequal')
const assert = require('chai').assert;

assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([4,3,2,1],[1,2,3,4]);

// mocha and chai test code

// Add some Mocha and Chai Test code
describe("#head", () => {
  it("returns true", () => {
    assert.strictEqual(assertArraysEqual([1,2,3,4],[1,2,3,4]));
  });
  it("returns false", () => {
    assert.strictEqual(assertArraysEqual([4,3,2,1],[1,2,3,4])); 
  });
});