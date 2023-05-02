/*
For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
*/

const letterPositions = function(sentence) {

  const results = {};

  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

       // if letters contains this word, incrememnt the counter
        // check if a array for this letter exists
        if (!results[char] && char != ` `){

          results[char] = [i];

        }

        // 
        else if (results[char] && char != ` `){

          results[char].push(i);

        }
  }

  return results;
};

letterPositions(`lighthouse in the house`);
