function assertArrayEqual(array1, array2) {

  for (let i = 0; i < array1.length; i++){

    for (let j = 0; j < array2.length; j++){
      console.log(`Value #1 ${array1[i]}`);

      console.log(`Value #2: ${array2[j]}`);

      if (array1[i] != array2[j]){
        console.log(`✅✅✅ Assertion Failed: ${array1[i]} != ${array2[j]}}`);
      }
      else {
        console.log(`✅✅✅ Assertion Passed: ${array1[i]} === ${array2[j]}}`);
      }
    }
  }
}

assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
