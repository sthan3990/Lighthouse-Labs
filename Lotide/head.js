/* 
Goal:  
- Create a function head which returns the first item in the array 
- Compare the first item with the expected value
- Return a message (YES, NO) 
*/


const assertEqual = require('./assertEqual');

function head(values){
  if (values != null){ 
    return values[0]
  }
  else {
    return "";
  }
}

module.exports = head;