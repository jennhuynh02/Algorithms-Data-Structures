// Problem 1464 Maximum Product of Two Elements in an Array
const maxProduct = (nums) => {
  let sorted = nums.sort((a,b) => b - a);
  return (sorted[0] - 1) * (sorted[1] - 1);
}

/*
Solution 1:
Sorts nums array in descending order and then multiplies the two greatest values at the beginning of the array.
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
Traverses over all values of nums to find the two maximum numbers.  If the next value is greater than max1 or max2, it will first assign max2 the minimum between max1 and val, and then max2 the maximum between max1 and val to ensure that second maximum number does not get dropped in the process of reassigning max1.
Time Complexity:  O(n)
Space Complexity:  O(1)
*/

const maxProduct3 = (nums) => {
  let max = 0;
  for (let i = 0, j = nums.length - 1; i < j;) {
    max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
    nums[i] < nums[j] ? i++ : --j;
  }
  return max;
}

/*
Solution 3:
Traverses nums array from both ends, it moves on the side that is less than the max so that the max on either side is forsure being multiplied with other elements on the opposite side, and stores the value of the product in the max variable.
Time Complexity:  O(n)
Space Complexity:  O(1)
*/

let nums = [3, 4, 5, 2];
console.log(maxProduct3(nums))