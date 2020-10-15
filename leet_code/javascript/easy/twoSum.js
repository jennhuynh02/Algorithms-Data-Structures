function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i,j];
    }
  }
}
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function twoSum2(nums, target) {
  const opposites = {};
  // This hash will keep track of numbers that can fulfill two sum condition
  for (let i = 0; i < nums.length; i++) { // O(n)
    if (opposites[nums[i]] >= 0) { // O(1)
      // If this number is in the opposite hash, it fulfills the two sum condition
      return [opposites[nums[i]], i] 
    }
    opposites[target - nums[i]] = i
    // This assigns a number as a key that will fulfill the two sum condition to its index for reference later
  }
}
// Time Complexity: O(n)
// Space Complexity: O(n)

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target))
console.log(twoSum2(nums, target))
