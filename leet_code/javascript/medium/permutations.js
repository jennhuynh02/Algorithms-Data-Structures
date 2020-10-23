// Problem 46 Permutation

// Approach 1

const permutations = nums => {
  if (nums.length <= 1) return [nums];
  const all = [];

  const make = (sub, rest) => {
    if (rest.length === 0) return all.push(sub);
    for (let i = 0; i < rest.length; i++) {
      let newRest = rest.slice(0);
      newRest.splice(i,1);
      make(sub.concat(rest[i]), newRest);
    }
  };

  make([], nums);

  return all;
};

let nums = [1,2,3];
console.log(permutations(nums));

/*
Solution 1:
Time Complexity: O(n * n!)
Space Complexity: O(n * n!)
*/