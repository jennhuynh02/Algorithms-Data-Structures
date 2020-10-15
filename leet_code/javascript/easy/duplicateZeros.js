function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; ++i) {  // O(n)
    // travels through length of the array
    if (arr[i] == 0) {  // O(1)
      // if element at index i is 0
      for (let j = arr.length - 1; j > i; j--) arr[j] = arr[j - 1]; // O(n)
      // start iterating at the last index, copy the previous index's value over up until where the 0 is (hence, two zeros and array has shifted over)
      i++;
      // increment the loop
    }
  }
  return arr;
}


// let arr = [1, 0, 2, 3, 0, 4, 5, 0];
// let arr = [1,0,2,3,0,4,5,0];
let arr = [8, 4, 5, 0, 0, 0, 0, 7];
let arr1 = [1, 2, 3];

console.log(duplicateZeros(arr));

// Time Complexity: O(n^2)
// Space Complexity: O(1)