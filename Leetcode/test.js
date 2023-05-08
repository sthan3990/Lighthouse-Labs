/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
         let ans = []
        let n = nums.length;

        // i < 2 because you are adding the 1,2,1 twice!
        for (let i = 0; i < 2; i++) {

          for (let j = 0; j < nums.length; j++) {

            ans.push(nums[j])

          }
        }

        return ans
     

};

getConcatenation([1,2,1]);