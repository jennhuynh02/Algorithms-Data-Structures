// Problem 62 Unique Paths

// Approach 1 Dynamic Programming

const uniquePaths = (m, n) => {
  const dp = Array(m).fill(Array(n).fill(1));

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      // adds number from top and left to account for how many possible paths could reach the current destination
    }
  }

  return dp[m-1][n-1];
  // return number of paths that would reach this final destination
};

/*
Solution 1:
Time Complexity: O(m * n); - iterates through n elements for each m array
Space Complexity: O(m * n) - for dynamic programming array
*/

let m = 3;
let n = 7;
console.log(uniquePaths(m,n))