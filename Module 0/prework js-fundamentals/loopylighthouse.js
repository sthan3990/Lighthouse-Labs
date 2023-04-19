/* 

We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

if the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

 */
const str1 = "Loopy" 
const str2 = "Lighthouse"

const loopy  = function (maxNumber) 
{

  for (let numValue = 100; numValue <= 200 ; numValue++)
  {
   
    // If the number is a multiple of both 3 and 4, print the string 
    // "LoopyLighthouse" instead of the number.
    if (numValue % 3 == 0 && numValue % 4 == 0)
    {
      console.log("multiple of 3 and 4: " + str1 + " " + str2 + "\n");
    }

    // if the number is a multiple of 3,
    else if (numValue % 3 === 0) 
    {
      console.log("multiple of 3: " + str1 + "\n");

    }

    // If the number is a multiple of 4, print the string "Lighthouse" 
    // instead of the number.
    else if (numValue % 4 === 0)
    {
      console.log("multiple of 4: " + str2 + "\n");
    }

    else
    {
      console.log("\n");
      console.log("Number Is..." + numValue);  
    }
  }
  
}

console.log(loopy(200));
