const request = require('request-promise-native');

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */

const fetchMyIP = () => {

  console.log(`Fetch My IP`);

  return request('https://api.ipify.org?format=json');

};

/* 
 * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */

const fetchCoordsByIP = (body) => {

  const parsedBody = JSON.parse(body);

  const ip = parsedBody.ip;

  console.log(`Fetch Coordinates for ${ip}`);

  return request(`https://ipwho.is/${ip}`);

};

/* 
 * Makes a request to https://iss-flyover.herokuapp.com/ using the provided latitude and longitude coordinates to get the fly over times as an array of objects
 * Input: JSON string containing the latitude and longitude coordinates
 * Returns: Promise of request for fly over times
 */
const fetchISSFlyOverTimes = (body) => {

  const parsedBody = JSON.parse(body);

  const { latitude, longitude } = parsedBody;

  console.log(`Fetch Fly Over Times for Latitude: ${latitude} and Longitude: ${longitude}`);

  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);

};


/* 
 * Input: None
 * Returns: Promise for fly over data for users location
 */

nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};


module.exports = { nextISSTimesForMyLocation };
