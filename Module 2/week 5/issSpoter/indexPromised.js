const { nextISSTimesForMyLocation } = require('./issPromised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((err) => {
    console.error(err);
  });
/Users/steve/Desktop/TO_SORT/Lighthouse/Lighthouse-Labs/Module 2/week 5/issSpoter/issPromised.js
printPassTimes = (passTimes) => {
  for (let i = 0; i < passTimes.length; i++) {
    console.log(passTimes[i]);
  }

};