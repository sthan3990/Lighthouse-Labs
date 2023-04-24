// FUNCTION IMPLEMENTATION

function eqArrays(array1, array2) {

  for (let i = 0; i < array1.length; i++){

    for (let j = 0; j < array2.length; j++){


      if (array1[i] != array2[j]){
        return false;
      }
      else {
        return true;
      }
    }
  }
}

const assertEqual = function(actual, expected) {

  // If the values match, it should print (console.log) the following: 
  //  Assertion Passed: [actual] === [expected] (but with the values filled in)

  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: Actual ${actual} ====  Expected ${expected}`);
  }

  // Otherwise it should print (console.log) the following: Assertion Failed: 
  // [actual] !== [expected] (but with the values filled in)
  else {
    console.log(`✅✅✅ Assertion Failed: Actual ${actual} != Expected ${expected}`);
  }

};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false