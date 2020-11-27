// Problem 162 Find Peak Element

// Approach 1

const findPeak1 = nums => {
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

// Approach 2
const findPeak = nums => {
  if (nums[0] > nums[1] || nums.length === 1) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
  };
}

/*
Solution 2:
Time Complexity: O(n) - traverses through length of input
Space Complexity: O(1) - does not require any extra memory, algorithm just checks values of inputs, and will return one index number
*/