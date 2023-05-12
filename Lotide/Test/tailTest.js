const assertEqual = require('../assertequal');
const tail = require('../tail');
const assert = require('chai').assert;

assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse", "Labs");
assertEqual(tail([5]), 5);
assertEqual(tail([]), undefined);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it


describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  // assert.deepEqual, because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});