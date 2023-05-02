
/* fix errors

var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  // error here, this is a string not a list!!
  return orignal.split('').reverseList().join('');
} */

var input = process.argv[2];

// input was non-empty string
if (input)
  console.log(reverse(input));

function reverse(original) {
  console.log(original);

  // Get all the characters from original 
  // reverse them 
  // join them back together 
  return original.split('').reverse().join('');
}