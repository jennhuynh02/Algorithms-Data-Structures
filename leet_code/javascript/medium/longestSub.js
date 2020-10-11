// Problem 3:  Longest Substring Without Repeating Characters

// Approach 1

const longestSub1 = s => {
  if (s.length <= 1) return s.length;
  let longest = 0;
  const sub = new Set();

  for (let i = 0; i < s.length - 1; i++) {
    sub.add(s[i]);
    let check = true;
    let end = i + 1;
    while (check) {
      if (!sub.has(s[end]) && end !== s.length) {
        sub.add(s[end])
        end++
      } else {
        let size = end - i;
        if (size > longest) longest = size;
        check = false;
        sub.clear();
      }
    }
  }

  return longest;
};

/*
Solution 1:
Time Complexity: O(n^n) - Brute force solution checks for all possible unique strings for each char of n
Space Complexity: O(n) - Set may be full of n chars if all of n is unique in worst case.
*/

// Approach 2

const longestSub = s => {
  if (s.length === 0) return 0;
  const memory = new Map();
  let leftIndex = 0;
  let max = 0;

  for (let [rightIndex, char] of [...s].entries()) {
    if (memory.has(char)) {
      leftIndex = Math.max(leftIndex, memory.get(char) + 1);
    }

    memory.set(char, rightIndex);

    const currentLength = rightIndex + 1 - leftIndex;
    if (currentLength > max) max = currentLength;
  }

  return max;
};

/*
Solution 2:
Time Complexity: O(n) - uses sliding window technique in for loop for linear time
Space Complexity: O(n) - space for every n chars in memory
*/

let s1 = "abcabcbb";
let s2 = "bbbbb";
let s3 = "pwwkew";
let s4 = "au";
let s5 = "dvdf";
console.log(longestSub(s1))
console.log(longestSub(s2))
console.log(longestSub(s3))
console.log(longestSub(s4))
console.log(longestSub(s5))
