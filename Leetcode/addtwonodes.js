/* 
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
*/

var average = function(salary){
  
  let avgSalary = 0;

  let minSalary = Math.min(...salary);
  let maxSalary = Math.max(...salary);
  
  
    console.log(`Max Salary is ${maxSalary} and Min Salary is ${minSalary} ` );
    for (let i = 0; i < salary.length; i++){
    
     avgSalary += salary[i];
    }

    return (avgSalary - minSalary - maxSalary) / 2;

};


average([4000,3000,1000,2000]);
