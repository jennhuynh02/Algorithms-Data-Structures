function binarySearch(nums, target, lo = 0, hi = nums.length - 1) {
  if (lo === hi) {
    if (nums[lo] === target) return lo;
    return -1;
  };

  let mid = Math.floor((lo + hi) / 2);

  if (target < nums[mid]) {
    return binarySearch(nums, target, lo, mid);
  } else if (target > nums[mid]) {
    return binarySearch(nums, target, mid + 1, hi);
  } else {
    return mid;
  }
}

let nums = [-1,0,3,5,9,12];
let target = 9;
let nums2 = [-1, 0, 3, 5, 9, 12];
let target2 = 2;
let nums3 = [5];
// let nums3 = [2, 5];
let target3 = 5;

// console.log(binarySearch(nums, target));
// console.log(binarySearch(nums2, target2));
console.log(binarySearch(nums3, target3));