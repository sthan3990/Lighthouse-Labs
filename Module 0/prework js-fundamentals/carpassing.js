/* This function should create a new object with a property called speed, and another property called time and add it to the cars array. We can retrieve the current time, for setting the time property, by using the Date.now() function, which is built into JavaScript! */

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const carPassing = function (cars, speed) {

  // add into the exisitng car array
  let newcarList = cars;

  var newCar = {
    time: Date.now(),
    speed: speed
  };

  newcarList.push(newCar);

  return newcarList;

}

const speed = 38

console.log(carPassing(cars, speed));


