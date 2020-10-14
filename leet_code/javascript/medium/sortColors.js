// Problem 75 Sort Colors

// Approach 1

const sortColors = nums => {
  let [left, index, right] = [0, 0, nums.length - 1];

  while (index <= right) {
    if (nums[index] === 0) {
      [ nums[left], nums[index] ] = [ nums[index], nums[left] ];
      left++;
      index++
    } else if (nums[index] === 2) {
      [ nums[right], nums[index]] = [ nums[index], nums[right] ];
      right--;
    } else {
      index++;
    }
  };

  return nums;
};

let nums = [2, 0, 1];
console.log(sortColors(nums))

/*
Solution 1:
Time Complexity: O(n) - One pass sort
Space Complexity: O(1) - Swapping elements within the same array, no additional space is allocated 
*/