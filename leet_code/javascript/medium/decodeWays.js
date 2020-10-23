// Problem 91 Decode Ways

// Approach 1

const decodeWays = s => {
  if (s[0] === '0') return 0;
  let temp = 0;
  let count1 = 1;
  let count2 = 1;

  for (let i = 2; i <= s.length; i++) {
    if (s[i - 1] !== '0') temp += count1;
    if (s[i - 2] === '1' || s[i - 2] === '2' && Number(s[i - 1]) <= 6) temp += count2;
    count2 = count1;
    count1 = temp;
    temp = 0;
  }

  return count1;
};

let s = "22622";
console.log(decodeWays(s));

/*
Solution 1:
Time Complexity: O(n) - Iterate length of input once
Space Complexity: O(1) - Reassignments in for loop should not cost extra memory
*/