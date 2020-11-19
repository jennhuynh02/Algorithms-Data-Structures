// Problem 73 Set Matrix Zeros

// Approach 1

const setMatrixZeroes1 = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  const row = new Set();
  const col = new Set();

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        row.add(i);
        col.add(j);
      }
    }
  }

  for (const num of row) {
    for (let k = 0; k < width; k++) {
      matrix[num][k] = 0;
    }
  }
  for (const num of col) {
    for (let k = 0; k < height; k++) {
      matrix[k][num] = 0;
    }
  }
  return matrix;
}

/*
Solution 1:
Time Complexity: O(m * n) - iterates through each element to check for 0's first
Space Complexity: O(m + n) - accounts for col, row indices where 0's are found
*/


// Approach 2
const setMatrixZeroes = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  const col = new Set();

  for (let i = 0; i < height; i++) {
    let row  = false;
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        col.add(j);
        row = true;
      }
    }
    if (row) matrix[i].fill(0);
  }

  for (const num of col) {
    for (let k = 0; k < height; k++) {
      matrix[k][num] = 0;
    }
  }
  return matrix;
}

/*
Solution 2:
Time Complexity: O(m * n) - iterates through each element to check for 0's first
Space Complexity: O(m) - set containing column indices that will need to be converted to 0's
*/

let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
console.log(setMatrixZeroes(matrix));