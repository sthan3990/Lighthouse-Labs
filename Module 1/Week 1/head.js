/* 
Goal:  
- Create a function head which returns the first item in the array 
- Compare the first item with the expected value
- Return a message (YES, NO) 
*/


const assertEqual = function(values, expected) {
  console.log(_head(values));

  if (actual === expected) {
    console.log("🛑🛑🛑 Assertion Passed: Actual " + actual + " ==== " + " Expected " + expected );
  }

  // Otherwise it should print (console.log) the following: Assertion Failed: 
  // [actual] !== [expected] (but with the values filled in)
  else {
    console.log("✅✅✅ Assertion Failed: Actual " + actual + " != " + " Expected " + expected );
  }
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
