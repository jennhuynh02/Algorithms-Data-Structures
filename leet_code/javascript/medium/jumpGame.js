// Problem 55 Jump Game

// Approach 1

const jumpGame = nums => {
  let max = 0;  // max will represent the furtherst step we can make
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;  // if the index, # of steps taken at this point, is greater than the max step that can be made, return false
    if (i + nums[i] >= nums.length - 1) return true;  // if the number of steps plus the number at the current step sums greater or equal to the length of the numbers, return true
    max = Math.max(max, i + nums[i]);  // set the max number to the sum of (num of steps + num at current step) if it's greaten than max
  }
};

let nums = [2, 3, 1, 1, 4];
console.log(jumpGame(nums));

/*
Solution 1:
Time Complexity: O(n)
Space Complexity: O(1)
*/