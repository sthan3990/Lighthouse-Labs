const { nextISSTimesForMyLocation } = require('./issPromised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((err) => {
    console.error(err);
  });

printPassTimes = (passTimes) => {
  for (let i = 0; i < passTimes.length; i++) {
    console.log(passTimes[i]);
  }

};