function rotate(nums, k) {
  if (nums.length < k) k = k % nums.length;

  let tail = nums.slice(nums.length - k);
  for (let i = nums.length - k - 1; i >= 0; i--) {
    nums[i+k] = nums[i];
  }

  for (let j = 0; j < tail.length; j++) {
    nums[j] = tail[j];
  }

  return nums;
}

// let nums = [-1, -100, 3, 99];
// let k = 2;
let nums = [1, 2];
let k = 3;

console.log(rotate(nums,k))