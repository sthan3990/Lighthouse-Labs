function generateRandomString() {

  let strArray = [`BLAHBLAHBHAHA`, `ABACADA`, `Baooa9s`];

  let index = Math.floor(Math.random() * strArray.length);

  return strArray[index];
}

module.export = generateRandomString;

