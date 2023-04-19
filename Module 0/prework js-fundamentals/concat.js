function concat(array1, array2) {
  let j = 0;
  let newArray = [];
  let newLength = array1.length + array2.length

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

  console.log(newArray);

  return newArray;

}

console.log(concat([1, 2, 3], [4, 5, 6]));