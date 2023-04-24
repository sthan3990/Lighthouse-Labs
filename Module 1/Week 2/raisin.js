/* Write a function that identifies whether a supposedly 
* chocolate chip cookie also has raisins in it.  
* Function : raisinAlarm
* function must search through the array to see 
* whether or not a raisin is present.
* Input: An array of chocolate chips ("🍫") and a pesky raisin in the 
* array as well ("🍇"). 
* Output: array of responses from checking the cookie
* Pairing with @kvirani
*/
const raisinAlarm = function (cookie) {
  // Put your solution here
  let arrayResponse = [];

  for (let i = 0; i < cookie.length; i++){
    if (cookie[i] === "🍇"){ 

      arrayResponse.push(`Raisin Alert! \n`);

    }
    else {
      arrayResponse.push(`All Good! \n`);
    }
  }

  return arrayResponse;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
