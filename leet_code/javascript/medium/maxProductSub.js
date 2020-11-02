// Problem 152 Maximum Product Subarray

// Approach 1
const maxProductSub = nums => {
  let max = nums[0], left = 0, right = 0;

  for (let i = 0; i < nums.length; i++) {
    left = (!left ? 1 : left) * nums[i];
    right = (!right ? 1 : right) * nums[nums.length - 1 - i];
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
Time Complexity: O(n)
Space Complexity: O(n)
*/