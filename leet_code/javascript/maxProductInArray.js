// Problem 1464 Maximum Product of Two Elements in an Array
const maxProduct = (nums) => {
  let sorted = nums.sort((a,b) => b - a);
  return (sorted[0] - 1) * (sorted[1] - 1);
}

/*
Solution 1:
Time Complexity:  O(n)
Space Complexity:  O(n)
*/

const maxProduct2 = (nums) => {
  let max1 = 0, max2 = 0;

  for (const val of nums) {
    max2 = Math.max(max2, Math.min(max1, val));
    max1 = Math.max(max1, val);
  }

  return (max1 - 1) * (max2 - 1);
}

/*
Solution 2:
Time Complexity:  O(n)
Space Complexity:  O(1)
*/

const maxProduct3 = nums => {
  l
}

let nums = [3, 4, 5, 2];
console.log(maxProduct2(nums))