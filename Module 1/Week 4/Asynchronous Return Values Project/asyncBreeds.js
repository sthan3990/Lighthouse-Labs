// Program: a small cat breed lookup application. It contains breed information and a function which can help us look up a specific breed's details.

import { readFile } from 'fs';

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
   
 readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    }
    else{ 
      console.log(error);
    }
    
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('cats', printOutCatBreed);
