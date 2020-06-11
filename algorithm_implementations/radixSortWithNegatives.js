function getDigitFrom(num, place) {
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10
}

function getIntLength(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function getMaxLength(nums) {
    let max = 0;
    nums.forEach(el => {
        max = Math.max(max, getIntLength(el))
    })

    return max;
}


function radixSort(arr) {
    if (!Array.isArray(arr)) return null;

    let numBuckets = getMaxLength(arr);
    for (let k = 0; k < numBuckets; k++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}

function radixSortWithNegatives(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  var negatives = arr.filter(num => num < 0);
  var negativesSorted = [];
  if (negatives.length > 0) {
    negativesSorted = radixSort(negatives.map(el => Math.abs(el)))
      .reverse()
      .map(el => -el);
  }

  var positives = arr.filter(el => el >= 0);
  let maxDigits = getMaxLength(positives);

  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({length: 10}, () => []);

    for (let i = 0; i < positives.length; i++) {
      let digit = getDigitFrom(positives[i], k)
      buckets[digit].push(positives[i]);
    }
    positives = [].concat(...buckets);
  }

  return negativesSorted.concat(positives);
}

console.log(radixSortWithNegatives([-1,3,-5,100,34]))

function radixSortWithNegatives2(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  var negatives = arr.filter(num => num < 0);
  var negativesSorted = [];
  if (negatives.length > 0) {
    negativesSorted = radixSort(negatives.map(el => Math.abs(el)))
      .reverse()
      .map(el => -el);
  }

  var positives = arr.filter(el => el >= 0);
  let positivesSorted = radixSort(positives);

  return negativesSorted.concat(positivesSorted);
}

console.log(radixSortWithNegatives2([-1,3,-5,100,34]))

/* Time Complexity: O(n * k)
Fastest when k is relatively small because runtime is dependent on length of the largest integer
It is argued that when all numbers are unique, k may be larger than n and therefore time complexity is O(n * log(k)) aka O(n*n)

Space Complexity: O(n + k)
Amount of memory consumed increases relative to both the size of the input array and length of the longest integer

Notes:  Use this algo when you don't know the largest element in the list, if you do, use counting sort instead.

*/
