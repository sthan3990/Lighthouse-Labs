const whichSchool  = function (age) {
 
  console.log("\nValue Passed in: " + age);
 
  try 
  {
    if (age <= 0)
    {
      console.log("You are dead...");
    }
    else if (age <= 13)
    { 
      console.log("Being you are " + age + " you are in elementary school\n");
    }

    else if (age >= 13 && age <= 18)
    {
      console.log("Being you are " + age + " you are in secondary school\n");

    }
    else 
    {
      console.log("Since you are " + age + " you are in lighthouse lab");
    }
  }
  catch(err)
  {
    console.log(err)
  }
}
console.log("I am -5. Which school should I go to?");
console.log(whichSchool(-5));

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));

console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));

console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
