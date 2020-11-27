// Problem 162 Find Peak Element

// Approach 1

const findPeak = nums => {
  let highest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[highest] < nums[i]) highest = i;
    if (nums[i] > nums[i-1] && nums[i] > nums[i + 1]) return i;
  }
  return highest;
};

let nums = [1, 2]
console.log(findPeak(nums));

/*
Solution 1:
Time Complexity: O(n) - traverses through length of input
Space Complexity: O(n) - reassigns the highest number variable in the for loop
*/