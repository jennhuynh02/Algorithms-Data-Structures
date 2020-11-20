// Problem 384 Shuffle An Array

// Approach 1
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const unshuffled = this.nums.slice()
  const shuffled = [];

  while (unshuffled.length) {
    const random = Math.floor(Math.random() * unshuffled.length);
    [unshuffled[random], unshuffled[unshuffled.length - 1]] = [unshuffled[unshuffled.length - 1], unshuffled[random]]
    shuffled.push(unshuffled.pop());
  }

  return shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 */
let nums = [1, 3, 2];
var obj = new Solution(nums)
var param_1 = obj.reset()
var param_2 = obj.shuffle()
console.log(obj.shuffle())