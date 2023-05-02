function power (num1, exp){
  

  //base case 
  if (exp === 1) {
    return 0;
  }
  else {
    return num1 * power(num1, exp-1);
  }
}

console.log(power(2,5));