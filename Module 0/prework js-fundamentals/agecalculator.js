/* 
Goal: Write a function that determines someone's age, given their date of birth. 
Output: The ageCalculator function returns a string explaining how old the person is.
*/

function ageCalculator(name, yearOfBirth, currentYear) {

  let age = currentYear - yearOfBirth;

  return name + ' is ' + age + " years old.";
}

let outputString = ageCalculator("Ferdinand", 1988, 2015);
console.log(outputString);