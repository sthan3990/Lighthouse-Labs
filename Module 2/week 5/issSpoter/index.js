const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

printPassTimes = (passTimes) => {
  for (let i = 0; i < passTimes.length; i++) {
    console.log(passTimes[i]);
  }
};
