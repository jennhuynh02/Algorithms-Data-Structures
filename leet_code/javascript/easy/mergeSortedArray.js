//  Problem 88 Merge Sorted Array

//  Approach 1

const merge = (nums1, m, nums2, n)=> {
  let one = m - 1;
  let two = n - 1;
  let position = nums1.length - 1;
  while (two >= 0) {
    if (nums1[one] > nums2[two]) {
      nums1[position] = nums1[one];
      one--;
    } else {
      nums1[position] = nums2[two];
      two--;
    }
    position--;
  }
  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
let nums2 = [2, 5, 6], n = 3;
console.log(merge(nums1, m, nums2, n));