function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currElement;
  }

  return arr;
}

console.log(insertionSort([2, 8, 5, 2, 6]));

// Time Complexity: O(n * n/2) = O(n * n) = quadratic
// Space Complexity: O(1) because amount of memory consumed by algo does not increase relative to the size of the input.