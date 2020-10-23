// Problem 279 Perfect Squares

// Approach 1 - uses dynamic programming, each index accounts for how many primes are needed to sum to its numeric value


const perfectSquares = n => {
  const tracker = Array(n + 1).fill(Infinity);
  tracker[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      tracker[i] = Math.min(tracker[i], tracker[i - j*j] + 1)
      // subtracts the largest prime number that fits within the number, and find its remainder's index, adds the number of primes that would make up that number plus 1, to account for the prime we just subtracted i by
    }
  }

  return tracker[n];
};

let n = 12;
console.log(perfectSquares(n));

/*
Solution 1:
Time Complexity: O(nlogn)
Space Complexity: O(n)
*/