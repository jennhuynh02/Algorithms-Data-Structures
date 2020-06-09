function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

console.log(selectionSort([2, 8, 5, 2, 6]))

// Time Complexity: O(n * n/2) = O(n * n) = Quadratic (same as BubbleSort but with less swaps)
// Space Completity: O(1) = amount of memory consumed by algo doesn't increase relative to the size of the input array - use same amount of memory and create same amount of variable regardless of size of input