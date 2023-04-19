function oddChecker(number) {

   let oddChecker = number % 3;

   let status; 

   if (oddChecker === 0) {
    status = "The number " + number + " is odd";

   }
   else {
    status = "The number " + number + " is not odd";
   }

   return status;

}

console.log(oddChecker(4));