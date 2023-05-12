// import the assertEqual function 
const assertEqual = require('../assertequal');
const findKeyByValue = require('../findkeybyvalue');

const bestTVShowsByGenre = {
  sciFi: `The Expanse`,
  comedy: `Brooklyn Nine-Nine`,
  drama: `The Wire`
};

assertEqual(findKeyByValue(bestTVShowsByGenre, `The Wire`), `drama`);
assertEqual(findKeyByValue(bestTVShowsByGenre, `That '70s Show`), undefined);