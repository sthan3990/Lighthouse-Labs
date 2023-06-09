// Overview: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 

const countLetters = (word) => {

  // create a empty object
  let letters = {};

  for (let i = 0; i < word.length; i++) {

    // each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.

    // if letters contains this word, incrememnt the counter
    if (letters[word[i]]) {
      letters[word[i]] += 1;
    }
    // if not, "initialize" it 
    else {
      letters[word[i]] = 1;
    }
  }

  console.log(letters);

  return letters;

};

countLetters(`lighthouse`);

module.exports = countLetters;
