// Problem 39 Combination Sums

// Approach 1

const combinationSum = (candidates, target) => {
  const result = [];

  function search(index, combo, remaining) {
    if (remaining === 0) return result.push(combo.slice());
    if (remaining < 0) return;
    if (index === candidates.length) return;

    combo.push(candidates[index]);
    console.log("push", combo, index)
    // Check to see if element at current index can be subtracted from remaining; recursion will attempt to keep subtracting the same element as much as possible
    search(index, combo, remaining - candidates[index]);
    combo.pop();
    console.log("pop ", combo, index)
    // Check to see if element at next index could be subtracted from remaining; recursion will attempt to check if element at next index would help sum to the target num
    search(index + 1, combo, remaining);
  }

  search(0, [], target);
  return result;
}

/*
Solution 1:
Time Complexity: O(2^n)
Space Complexity: O(2^n)
*/

let candidates = [2, 3, 6, 7];
let target = 7;

console.log(combinationSum(candidates,target))