function firstUnique(s) {
  let count = {};  // O(1), space

  for (let i = 0; i < s.length; i++) {  // O(n)
    if (count[s[i]]) {  // O(1)
      count[s[i]] = count[s[i]] + 1;   // O(1)
    } else {
      count[s[i]] = 1;  // O(1), space
    }
  }

  for (let j = 0; j < s.length; j++) {  // O(n)
    if (count[s[j]] === 1) {  // O(1)
      return j;  // O(1)
    }
  }

  return -1;  // O(1)
}

// Time Complexity: O(n)
// Space Complexity: O(n)

let s = "leetcode";
let s1 = "loveleetcode";

console.log(firstUnique(s))
console.log(firstUnique(s1))


