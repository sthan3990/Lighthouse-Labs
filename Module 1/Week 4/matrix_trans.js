/*
Input: Array 
Output: Your function must return a new array with the columns and rows switched. 
*/

const transpose = function (matrix) {

  // array variables
  let newMatrix = [];

  let numRows = matrix.length;

  let numColumns = matrix[0].length;

  // COLUMNS RUN VERTICALLY
  for (let k = 0; k < numColumns; k++) {

    // create the row
    newMatrix[k] = [];

    // outer loop matrix array
    // ROWS RUN HORIZONTALLY
    for (let i = 0; i < numRows; i++) {
      newMatrix[k][i] = matrix[i][k];
    }
  }

  return newMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));






