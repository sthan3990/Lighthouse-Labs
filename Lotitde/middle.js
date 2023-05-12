/* 
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary. 
*/

// For arrays with one or two elements, there is no middle. Return an empty array.

// For arrays with odd number of elements, an array containing a single middle element should be returned.

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

/* The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number. */
const round = (number) => {
  return Math.floor(number);
};

// ACTUAL FUNCTION
const middle = (array) => {
  let newArray = [];

  console.log(array.length);

  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return newArray;
  }

  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  else if (array.length % 2 === 0) {
    let index = round(array.length / 2);
    newArray.push(array[index]);
    newArray.push(array[index + 1]);
    return newArray;
  }

  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  else {
    let index = round(array.length / 2);
    newArray.push(array[index]);
    return newArray;
  }



};

module.exports = middle;