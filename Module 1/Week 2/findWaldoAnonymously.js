
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function (names, found) {

  names.forEach((element, index) => {

    // if waldo found, execute callback function
    element === `Waldo` ? found(index) : `` ;
 
  });
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found him at ${index}`);
});