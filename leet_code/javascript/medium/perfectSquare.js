// Problem 279 Perfect Squares

// Approach 1

const perfectSquares = n => {
  const tracker = Array(n + 1).fill(Infinity);
  tracker[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      tracker[i] = Math.min(tracker[i], tracker[i - j*j] + 1)
    }
  }

  return tracker;
};

let n = 9;
console.log(perfectSquares(n));

/*
Solution 1:
Time Complexity: O(nlogn)
Space Complexity: O(n)
*/