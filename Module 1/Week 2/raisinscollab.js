const raisinAlarm = function (cookie) {

  let arrayResponse = [];
  // Put your solution here
  for(const item of cookie) {
    if(item === "🍇") {
      return arrayResponse = "Raisin Alert";
    }
    else if(item === "🍫") {
      arrayResponse ="All good!";
    }
  }
  return arrayResponse;
};


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


// Expected Output: ["Raisin alert!", "Raisin alert!", "All good!"]
const raisinAlarmArray = function (cookies) {
  // Put your solution here

  let cookiesResponse = [];

  for (let i = 0; i < cookies.length; i++) {

    // item === "🍇" ? cookiesResponse.push(`Raisin Alert!`) :  cookiesResponse.push(`All Good!`);

    cookies[i].includes(`🍇`) ? cookiesResponse.push('Raisin Alert') : cookiesResponse.push(`All Good!`);

  //   // Use array helper function... 
  //   if (cookies[i].includes(`🍇`)) {
  //     cookiesResponse.push('Raisin Alert');
  //   }
  //   else if (!cookies[i].includes(`🍇`))
  //     cookiesResponse.push(`All Good!`);
  // }

  }
  return cookiesResponse;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);