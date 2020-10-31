// Problem 34  Find First and Last Position of Element in Sorted Array

// Approach 1

const findFirstAndLast = (nums, target) => {

  const modifiedBinarySerch = flag => {
    let [left, right, res] = [0, nums.length - 1, -1];

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        // if the number at this mid index matches the target, we will save it as the result
        res = mid;
        // if this flag is true, we will search furter through the left side of mid to see if the target may be further left
        if (flag) {
          right = mid - 1;
        }
        // else, we will keep searching the far most right side to see if the target may end further right
        else {
          left = mid + 1;
        }
      }
      else if (target > nums[mid]) {
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    }
    return res;
  }

  return [modifiedBinarySerch(true), modifiedBinarySerch(false)];
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(findFirstAndLast(nums, target));

/*
Solution 1:
Time Complexity: O(logn) - 
Space Complexity: O(logn) - 
*/