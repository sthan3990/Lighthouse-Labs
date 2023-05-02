const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// The array of numbers should be the length of each name in the lighthouses.

// Pass a function to map
const map1 = lighthouses.map(findLength);

function findLength(name) {
  return name.length;
}
console.log(map1);


// Arrow Function
let map2 = lighthouses.map(name => {return name.length})

console.log(map2);
