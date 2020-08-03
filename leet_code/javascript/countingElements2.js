function countingElements(arr) {
  counter = 0; // O(1)
  const nums = {}; // O(1), space

  arr.forEach(n => {  // O(n)
    if (nums[n]) {
      nums[n] = (nums[n] += 1); // O(1)
    } else {
      nums[n] = 1; // O(1), space
    }
  });

  const keys = Object.keys(nums); // O(n)

  for (const key of keys) {  // O(n)
    if (nums[parseInt(key) + 1]) counter += nums[parseInt(key)]; // O(1)
  }

  return counter;  // O(1)
}

// Time Complexity: O(n)
// Space Complexity: O(n)

function countingElements2(arr) {
  count = 0; // O(1)

  const allNumbers = new Set(arr); // O(n), space
  
  arr.forEach (el => {  // O(n)
    if (allNumbers.has(el + 1)) count += 1;  // O(1)
  });

  return count; // O(1)
}

let arr = [1, 1, 3, 3, 5, 5, 7, 7];
console.log(countingElements2(arr));
let arr1 = [1, 3, 2, 3, 5, 0];
console.log(countingElements2(arr1));
let arr2 = [1, 1, 2];
console.log(countingElements2(arr2));
let arr3 = [1, 1, 2, 2];
console.log(countingElements2(arr3));