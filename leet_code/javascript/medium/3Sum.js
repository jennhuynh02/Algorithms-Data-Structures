// Problem 15:  3Sum

// Approach 1:  Sort array, start at first index, add the most left and most right side of the remaining array, increment whichever side that would most likely result in a sum of 0.

const threeSum = nums => {
  nums.sort((a, b) => a - b);

  const results = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++
        left++;

        while (right > left && nums[right] === nums[right - 1]) right--;
        right--;

      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }

    // First condition of this while loop is necessary because if somehow the end is a falsey value, and it compared with an undefined, whichi is also a falsey value, it could end up in an infinite loop
    while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++
  }

  return results;  
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

/*
Solution 1:
Time Complexity: O(n^2) - While loop within for loop, which iterates through the remaining array for each iteration of the for loop
Space Complexity: O(n) - Space for each element of the array, as in merge sort
*/