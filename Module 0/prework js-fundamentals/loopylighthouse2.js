/* 

Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

    range should be an array of 2 numbers representing the start and end values for the loop.
    multiples should be an array of 2 numbers representing the multiples you want to replace with words.
    words should be an array of 2 strings representing the words that will replace the multiples.

 */

// basically pass in three arrays ]

function loopyLighthouse(arrayRange, arrayMultiples, arrayWords) {
  for (let i = arrayRange[0]; i <= arrayRange[1]; i++) {

    if (i % arrayMultiples[0] === 0 && i % arrayMultiples[1] === 0) {
      console.log(arrayWords[0] + arrayWords[1]);
    }

    else if (i % arrayMultiples[0] === 0) {
      console.log(arrayWords[0]);
    }

    else if (i % arrayMultiples[1] === 0) {
      console.log(arrayWords[1]);
    }

    else {
      console.log(i);
    }
  }
}

// start the function and pass in the values in
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


// {
//   for (let i = arrayRange[0]; i <= arrayRange[1] ; i++)
//   {
//     if (i % arrayMultiples[0] === 0 && i % arrayMultiples[1] === 0)
//     {
//       console.log("This is a multiple of " + arrayMultiples[0] + " and " + arrayMultiples[1] + ": " + arrayWords[0] + arrayWords[1] + "\n");
//     }

//     else if (i % arrayMultiples[0] === 0)
//     {
//       console.log("This is a multiple of " + arrayMultiples[0] + ": " + arrayWords[0] +"\n");
//     }

//     else if (i % arrayMultiples[1] === 0)
//     {
//       console.log("This is a multiple of " + arrayMultiples[1] + ": " + arrayWords[1] +"\n");
//     }

//     else
//     {
//       console.log(i + "\n");
//     }
//   }
// }

