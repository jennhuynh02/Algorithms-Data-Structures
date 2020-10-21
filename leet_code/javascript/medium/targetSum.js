// Approach 494 Target Sum

// Approach 1

const targetSum = (nums, S) => {
  let count = 0;
  const recursion = (i, acc) => {
    if (i === nums.length) {
      if (acc === S) count++;
      return;
    }
    recursion(i + 1, acc + nums[i]);
    recursion(i + 1, acc - nums[i]);
  }
  recursion(0, 0);
  return count;
};

/*
Solution 1:
Time Complexity: O(2^n) - Calling recursion twice within itself, n maps to either a positive or negative integer
Space Complexity: O(n) - at most n stack frames to reach the base case of each recursive path
*/

let nums = [1, 1, 1, 1, 1];
let S = 3;
console.log(targetSum(nums, S));