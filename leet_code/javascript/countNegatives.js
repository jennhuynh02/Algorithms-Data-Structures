function countNegatives(grid) {
  let negatives = 0;  // O(1), space

  for (let i = 0; i < grid.length; i++) {  // O(m)
    for (let j = 0; j < grid[i].length; j++) {  // O(n)
      if (grid[i][j] < 0) negatives += 1;  // O(1)
    }
  }

  return negatives;  // O(1)
};

/*
Time Complexity:  O(m*n)
Space Complexity:  O(1)
*/

// ES6 fat arrow function - automatically returns 
let countNegatives2 = grid =>
  grid
    .map(row => row.filter(x => x < 0)  // O(m * n) maps over each row, filter for only negative numbers
    .length)  // O(1) grabs the length of each row
    .reduce((a, b) => a + b);   // O(m) reduces all row lengths to sum


/*
Time Complexity:  O(m*n)
Space Complexity:  O(1)
*/

let grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];
console.log(countNegatives(grid));
console.log(countNegatives2(grid));