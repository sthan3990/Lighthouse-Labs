/* Goal 
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*/

const bestTVShowsByGenre = {
  sciFi: `The Expanse`,
  comedy: `Brooklyn Nine-Nine`,
  drama: `The Wire`
};

const findKeyByValue = (TVShows, tvKey) => {
  // Iterate through the object
  for (let key in TVShows) {

    let keyValue = TVShows[key];

    if (tvKey === keyValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
