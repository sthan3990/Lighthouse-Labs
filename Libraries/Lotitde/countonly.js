const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    // inside the loop, 
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }

  }

  return results;
}

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);
