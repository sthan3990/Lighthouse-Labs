const sumLargestNumbers = function (data) {
  let sumNumbers = 0;

  // sort the data array 
  for (let k = 0; k < data.length; k++) {
    
    for (let l = 0; l < k; l++) 
    {
  
      // sort from smallest to largest
       if (data[k] < data[l])
      {
        // item1 "stored"
        let tempNumber = data[k];

        // item2 put in item1 place
        data[k] = data[l];

        // item1 put in item 2 place
        data[l] = tempNumber;

        // [item2,item1,item3,item4]

      }
    }
  }
 
  
  sumNumbers = data[data.length-2] + data[data.length-1];

  return sumNumbers;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));