const instructorWithLongestName = function(instructors) {
  let instructorIndex = 0;
  let longest = 0;

  // Put your solution here
  for (let i = 0; i < instructors.length; i++) 
  {
    if (instructors[i].name.length > longest) 
    {
      longest = instructors[i].name.length;
      instructorIndex = i;
    }   
  }
    return instructors[instructorIndex];

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
