/*
when we transpose a matrix (or 2D array), each element has its row become its column, and its column become its row.
*/
const transpose = function (matrix) {
  // Replace this code with your solution

  let result = [];

  let rows = matrix.length;

  let columns = matrix[0].length;

  // initialize result 
  for (let j = 0; j < columns; j++) {
    result[j] = Array(rows);
  }

  // looping outer array elements
  for (let i = 0; i < matrix.length; i++) {

    // looping inner array elements
    for (let j = 0; j < columns; j++) {

      // each element has its row [row,column] become its column [column,row]
      result[j][i] = matrix[i][j];
    }

  }

  return result;
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
