/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

  let test = 3 + 2 + "7";
  
  let numbers = [];

  for (let i = 0; i < n; i++){
        // grab x values
        numbers.push(nums[i]);
        // grab y values
        numbers.push(nums[i+n]);
      }
  

  return numbers;
};

//shuffle([2,5,1,3,4,7],3);

shuffle([1,2,3,4,4,3,2,1],4);