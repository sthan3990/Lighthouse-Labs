/* 

Input: actual, expected  
Output:  A series of success / failure messages printed to the console, letting us know if our functions are behaving as expected.
*/

// export => to re-use this function in other files
// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {

  // If the values match, it should print (console.log) the following: 
  //  Assertion Passed: [actual] === [expected] (but with the values filled in)

  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: Actual " + actual + " ==== " + " Expected " + expected);
  }

  // Otherwise it should print (console.log) the following: Assertion Failed: 
  // [actual] !== [expected] (but with the values filled in)
  else {
    console.log("🛑🛑🛑 Assertion Failed: Actual " + actual + " != " + " Expected " + expected);
  }
};

// turn this into a module
// remember         "sourceType": "module", inside ESLint config file!

module.exports = assertEqual;