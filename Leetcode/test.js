// Generate a Random Short URL ID
// Output: string of 6 random alphanumeric characters
function generateRandomString() {
  let shortURL = ``;
  let letters = [
    "A",
    "B",
    "C"
  ];
  const numbers = [
    "1",
    "2",
    "3"
  ];

  for (let i = 0; i < 3; i++) {
    let index1 = Math.floor(Math.random() * letters.length);
    let index2 = Math.floor(Math.random() * numbers.length);

    console.log(`${index1} ${index2}`);
    shortURL = shortURL.concat(letters[index1],numbers[index2]);

  }
  console.log(shortURL);

  return shortURL;
};

generateRandomString();
