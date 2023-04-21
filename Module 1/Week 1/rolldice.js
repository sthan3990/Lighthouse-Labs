/* 
Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.
*/

function generateNumber() {
  let min = 1;
  let max = 6;
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive

}
function rollDice(numRolls) {
   
    for (let i = 0; i < numRolls; i++){
      console.log(generateNumber());
    }

  }

console.log(rollDice(3));

//console.log(rollDice(4));
 