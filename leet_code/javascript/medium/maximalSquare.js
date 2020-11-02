// Problem 221 Maximal Square

// Approach 1

const maximalSquare = matrix => {
  if (matrix.length == 0) return 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let val = matrix[i][j];
      if (val == 1) {  // checks for square pattern if value is 1
        let left = Number((matrix[i - 1] || [])[j]) || 0;  // checks top
        let top = Number((matrix[i] || [])[j - 1]) || 0;  // checks left
        let topLeft = Number((matrix[i - 1] || [])[j - 1]) || 0; // checks top left
        let x = Math.min(left, top, topLeft) + 1;  // adds 1 to the minimum amount of squares that could be formed from top, left, or topLeft; must all be equal for max to be able to increase max square length
        matrix[i][j] = x;  // set value to square length that could be formed at the spot
        max = Math.max(max, x);  // stores length of square
      }
    }
  }
  return max * max;  // multiple length of square by itself to get area of spaces
};

let matrix = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0]
];

console.log(maximalSquare(matrix));

/*
Solution 1:
Time Complexity: O(n * m) - height times width 
Space Complexity: O(1) - changes elements in input array in-place
*/