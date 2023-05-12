/* 
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value. 
*/

const takeUntil = function(array, callback) {
  let results = [];

  for (let i = 0; i < array.length; i++) {

    if (callback(array[i])) {

      results = array.slice(0, i);

      return results;

    }

  }

  return results;
};



module.exports = takeUntil;