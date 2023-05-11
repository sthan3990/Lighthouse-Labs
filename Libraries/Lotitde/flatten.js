/*  Given an array with other arrays inside, it can flatten it into a single-level array.
*/


const assertArrayEqual = (array1, array2) => {

  for (let i = 0; i < array1.length; i++) {

    for (let j = 0; j < array2.length; j++) {
      console.log(`Value #1 ${array1[i]}`);
      console.log(`Value #2: ${array2[j]}`);

      if (array1[i] !== array2[j]) {
        console.log(`✅✅✅ Assertion Failed: ${array1[i]} != ${array2[j]}}`);
      } else {
        console.log(`✅✅✅ Assertion Passed: ${array1[i]} === ${array2[j]}}`);
      }
    }
  }
};

const flatten = (array1, newArray = []) => {

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      // use recurssion! 
      flatten(array1[i], newArray);
    }
    else {
      newArray.push(array1[i]);
    }
  }

  return newArray;
};

//assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]