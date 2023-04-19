const numberOfVowels = function(data) {
  let vowelCounter = 0;

  for (let i = 0; i < data.length; i++) 
  {
    if (data[i] === "a" || data[i] === "e" || data[i] === "o" || data[i] === "u" || data[i] === "i") 
    {
      vowelCounter = vowelCounter + 1;
    }
  }

  return vowelCounter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
