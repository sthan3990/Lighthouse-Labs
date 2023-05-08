/**
 * @param {number[]} nums
 * @return {number}
 */


var singleNumber = function(nums) {
  
  const mySet1 = new Set();

  for (let i = 0; i < nums.length; i++){
    if (!mySet1.has(nums[i])){
      mySet1.add(nums[i]);
    }
    else {
      mySet1.delete(nums[i]);
    }
  }

  for (const item of mySet1) {
    return item;
  }


};

console.log(singleNumber([2,2,2,5,5,5,1,6,6,6]));