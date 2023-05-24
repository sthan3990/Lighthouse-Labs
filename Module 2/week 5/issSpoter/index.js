
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((error, ip) => {

  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

});

fetchCoordsByIP((error,coordinates) => {

  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coordinates:' , coordinates);

});


fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {

  console.log(passTimes);

  console.log(error);

});

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

