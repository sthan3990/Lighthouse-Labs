function without(sourceArray, removeArray) {
  let newArray = sourceArray;

  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < removeArray.length; j++) {
      if (sourceArray[i] === removeArray[j]) {
        newArray.splice(i, 1);
      }
    }
  }

  return newArray;
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
