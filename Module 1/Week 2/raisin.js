/* Write a function that identifies whether a supposedly 
* chocolate chip cookie also has raisins in it.  
* Function : raisinAlarm
* function must search through the array to see 
* whether or not a raisin is present.
* Input: An array of chocolate chips ("🍫") and a pesky raisin in the 
* array as well ("🍇"). 
* Output: array of responses from checking the cookie
* Pairing with @ 
*/
// const raisinAlarm = function (cookie) {
//   // Put your solution here
//   let arrayResponse = [];

//   try {
//     // iterate through cookie array
//     for (let i = 0; i < cookie.length; i++) {

//       // check if element in the cookie array is a raspberry
//       if (cookie[i] === "🍇") {
//         // add a response to the array
//         arrayResponse.push(`Raisin Alert! \n`);

//       }
//       // otherwise, it's a chocolate 
//       else {
//         // add a response to the array
//         arrayResponse.push(`All Good! \n`);
//       }
//     }
//   }
//   catch (error) {
//     console.log(`Encountered Error: ${error}`);
//   }
//   finally {
//     // return response array
//     return arrayResponse;
//   }

// };

// const raisinAlarm = function (cookie) {


const raisinAlarm = (cookies) => {

  let arrayResponse = [];

  for (let item of cookies) {

    item === "🍇" ? arrayResponse.push(`Raisin Alert! \n`) : arrayResponse.push(`All Good! \n`);

  }

  return arrayResponse;

};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
