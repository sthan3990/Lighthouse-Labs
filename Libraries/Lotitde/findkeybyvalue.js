const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

function findKeyByValue(TVShows, tvKey){

  // Iterate through the object
   for (const key in TVShows){

    let keyValue = TVShows[key];

    if (tvKey === keyValue) {
      return `${key}`;
    }
     
   }

}

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));