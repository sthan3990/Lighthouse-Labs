var nyc = {
  name: 'New York City',
  boroughs: [
    'Manhattan',
    'Queens',
    'Brooklyn',
    'The Bronx',
    'Staten Island'],
  population: 8491079,
  area_codes: [212, 347, 646, 718, 917, 929],
  position: { lat: 40.7127, lng: -74.0059 }
}

console.log(nyc.get('boroughs]'));



const myName = function(name) {

  // change this to turnery operator 
  if (name === `Alvin`){

    console.log(`hello`);
  }
  else{
    console.log(`goodbyte`)
  }
  name === 'Alvin' ? console.log(`Hello'`) : console.log(`Goodbyte`);
  
}

myName(`Alvin`);
