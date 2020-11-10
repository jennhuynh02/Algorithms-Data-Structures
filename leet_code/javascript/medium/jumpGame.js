// Problem 55 Jump Game

// Approach 1

const jumpGame = nums => {
  let i = 0, max = 0
  for (let i = 0; i < nums.length; i++) {
    console.log(100, "if current idx",  i, "is greater than current max", max, "return false")
    if (i > max) return false;
    console.log(200, "if current idx", i, " plus num", nums[i], "is >= nums length - 1,", nums.length - 1, "return true")
    if (i + nums[i] >= nums.length - 1) return true;
    max = Math.max(max, i + nums[i]);
  }
};

let nums = [2, 3, 1, 1, 4];
console.log(jumpGame(nums));