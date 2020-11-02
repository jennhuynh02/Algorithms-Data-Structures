// Problem 152 Maximum Product Subarray

// Approach 1
const maxProductSub = nums => {
  let max = nums[0], left = 0, right = 0;

  for (let i = 0; i < nums.length; i++) {
    left = (!left ? 1 : left) * nums[i];  // left pointer, if not less than or equal to 0, will multiply itself by the current number; else left will be 1 multiplied by current number
    right = (!right ? 1 : right) * nums[nums.length - 1 - i];  // if right is greater than 0, it will be multiplied by the current number; else it will become the current number
    max = Math.max(max, right, left);
  }
  return max;
};

let nums1 = [2,3,-2,4]
let nums2 = [-4,-3]

console.log(maxProductSub(nums1));
console.log(maxProductSub(nums2));

/*
Solution 1:
Time Complexity: O(n) - one pass
Space Complexity: O(1)
*/