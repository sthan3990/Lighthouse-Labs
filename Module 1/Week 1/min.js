/*  finds the smallest value in a list of numbers. */

// Write code here that returns the smallest value in number
function min(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        let tempValue = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = tempValue;
      }
    }
  }
  ///console.log(`The smallest number is ${numbers[0]}`);
}

min([45, 10, -20, 0, 3, -20]);
