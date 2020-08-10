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
// preferred if space is not the concern

function firstUnique2(s) {
  for (i = 0; i < s.length; i++) {  // O(n)
    // iterates through the length of the string
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {  // O(n + n)
      // if the first index of that character is the same as the last index of that character
      return i;  // O(1)
      // return that index
    }
  }
  return -1;  // O(1)
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// preferrd if space is the concern

let s = "leetcode";
let s1 = "loveleetcode";

console.log(firstUnique(s))
console.log(firstUnique(s1))
console.log(firstUnique2(s))
console.log(firstUnique2(s1))


