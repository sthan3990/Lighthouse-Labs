const conditionalSum = function(values, condition) {
  let runningTotal = 0;

  // 0 = odd, 1 = even 
  let modOperator = 0;

  if (condition == "even") {
    modOperator = 2;
  }
  else if (condition == "odd") {
    modOperator = 3;
  }

  for (let i = 0; i < values.length; i++)
  {
    if (values[i] % modOperator == 0) {
      runningTotal = runningTotal + values[i];
    }
  }

  return runningTotal;
  // Your code here

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));