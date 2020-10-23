// Problem 287 Find the Duplicate Number

// Approach 1 - Exploits array indexing property; sets integer at a specific index to be negative; if it is visited again (we check by seeing if there's a negative integer there) we return the duplicate number.

const findDuplicateNum = nums => {

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (nums[num-1] < 0) return num;
    nums[num - 1] *= -1;
  }

};

let nums = [1, 3, 4, 2, 2];
let nums1 = [3, 1, 3, 4, 2];
console.log(findDuplicateNum(nums));
console.log(findDuplicateNum(nums1));

/*
Solution 1:
Time Complexity: O(n)
Space Complexity: O(1) - modifies the input array in place, so no extra space is needed
*/