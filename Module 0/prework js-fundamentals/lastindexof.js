/*
Purpose:
When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.
*/

const lastIndexOf = function(arrayValues, findValue) {
  
  let indexofValue = -1;

  for (let i = 0; i < arrayValues.length; i++) {

    if (arrayValues[i] === findValue) {
      indexofValue = i;
    }

  }
  return indexofValue;
};

lastIndexOf([ 0, 1, 4, 1, 2 ], 1);