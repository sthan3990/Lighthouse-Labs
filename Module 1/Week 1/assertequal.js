/* 
Input: two  
Output:  A series of success / failure messages printed to the console, letting us know if our functions are behaving as expected.
*/
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  // If the values match, it should print (console.log) the following: 
  //  Assertion Passed: [actual] === [expected] (but with the values filled in)

  if (actual === expected) {
    console.log("🛑🛑🛑 Assertion Passed: Actual " + actual + " ==== " + " Expected " + expected );
  }

  // Otherwise it should print (console.log) the following: Assertion Failed: 
  // [actual] !== [expected] (but with the values filled in)
  else {
    console.log("✅✅✅ Assertion Failed: Actual " + actual + " != " + " Expected " + expected );
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
