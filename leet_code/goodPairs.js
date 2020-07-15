function goodPairs(nums) {
  let good = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for ( let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        good += 1;
      }
    }
  }

  return good;
}

let nums = [1, 2, 3, 1, 1, 3];
let nums1 = [1, 1, 1, 1];
let nums2 = [1, 2, 3];
console.log(goodPairs(nums));
console.log(goodPairs(nums1));
console.log(goodPairs(nums2));