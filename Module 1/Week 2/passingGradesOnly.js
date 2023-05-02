const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

//This node script should print out passing grades to the console. Passing grades for this scenario can be those that are 70 or above.
const passingGrade = grades.filter(function(grade) {
  return grade >= 70;

});

console.log("Subset of even numbers:", passingGrade);
 
 