const weather = {
  city: `Vancouver`,
  temp: [{
    min: 10,
    max: 15,
    current: 12,
  },
  {
    min: 11,
    max: 12,
    current: null
  },
  {
    min: 20,
    max: 30,
    current: 25
  }],
  detail: {
    area: 20,
    additionalInfo: {
    current: `cloudy`,
    }
  }
}

console.log(weather.city);
console.log(weather.detail.additionalInfo.current);
console.log(weather.temp[2].min);
