// Problem 56 Merge Intervals

// Approach 1, 
const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 1; i < intervals.length; i++) {
    let [x, y] = intervals[i];
    let [, prevY] = intervals[i - 1];

    if (x <= prevY) {
      intervals[i - 1][1] = Math.max(y, prevY);
      intervals.splice(i, 1)
      i--
    }
  }

  return intervals
}

const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals1)); // Output: [[1,6],[8,10],[15,18]]