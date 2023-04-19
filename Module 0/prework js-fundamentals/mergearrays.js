function merge(array1, array2) {

  let j = 0;
  let newArray = [];
  let newLength = array1.length + array2.length;

  
  for (let i = 0; i < newLength; i++) {

    newArray[i] = array1[i];

    // if we're done with the first array, 
    // use new pointer j to deal with 
    // second array 
    if (i >= array1.length) {
      newArray[i] = array2[j];
      j++;
    }
  }
  
  for (let k = 0; k < newArray.length; k++) {
    
    for (let l = 0; l < k; l++) 
    {
      // current Item is smaller than the next item
      // [item1,item2,item3,item4]
      // item1 < item 2
      if (newArray[k] < newArray[l])
      {
        // item1 "stored"
        let tempNumber = newArray[k];
        // item2 put in item1 place
        newArray[k] = newArray[l];

        // item1 put in item 2 place
        newArray[l] = tempNumber;

        // [item2,item1,item3,item4]

      }
    }
  }

  return newArray;
}
 