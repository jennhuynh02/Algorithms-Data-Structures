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
const setMatrixZeroes2 = matrix => {
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

// Approach 3  Modify in place

const setMatrixZeroes = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;
  let fillStartCol = false;
  let fillStartRow = false;

  for (let j = 0; j < width; j++) {
    if (matrix[0][j] === 0) {
      fillStartRow = true;
    }
  }

  for (let j = 0; j < height; j++) {
    if (matrix[j][0] === 0) {
      fillStartCol = true;
    }
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < height; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < width; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  const start = fillStartCol ? 0 : 1;
  for (let j = start; j < width; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 0; i < height; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (fillStartRow) matrix[0].fill(0)

  return matrix;
}

/*
Solution 3:
Time Complexity: O(m * n) - iterates through each element to check for 0's
Space Complexity: O(1) - changing elements in place
*/

let matrix = [[-4, -2147483648, 6, -7, 0], [-8, 6, -8, -6, 0], [2147483647, 2, -9, -6, -10]]
console.log(setMatrixZeroes(matrix));