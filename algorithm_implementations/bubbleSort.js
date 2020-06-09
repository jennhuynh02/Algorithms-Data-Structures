function bubbleSort(arr) {
  swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([2, 8, 5, 2, 6]))

// Time Complexity: O(n * n) = quadratic, inner loop contributes to O(n) alone and outer loop contribute to O(n) in isolation because single iteration will bring one element to its final resting position (while loop until we bring all n elements into their final resting positions)
// Space Complexity: O(1) = constant, amount of memory consumed by algo does not increase relative to size of the input array, because we mutate array, in-place