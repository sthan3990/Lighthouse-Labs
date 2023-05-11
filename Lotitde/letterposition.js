/*
Goal
We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found. 
*/

const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    let letter = sentence[i];

    // if the letter isn't a space 
    if (letter !== ` `) {

      // if the object exists, put the index (i) into the array 
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      }

      // if not, "initialize" a new array with the index 
      else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;

};


console.log(assertArrayEqual(letterPositions("hello").e, [0]));