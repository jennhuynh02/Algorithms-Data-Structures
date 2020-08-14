// a palindrome is a word that can be spelled the same backwards and forwards
// a permutation is a different arrangement of the entire string/array

// palindrome string characteristics: has even number of characters counts OR at most just one character with an odd count

// function palindromePermutation(s) {
//   count = new Map();  // O(1), space

//   for (let i = 0; i < s.length; i++) {  // O(n)
//     let char = s[i];  // O(1), space
//     count[char] ? count[char] = count[char] += 1 : count[char] = 1;  // O(1)
//   };

//   if (s.length % 2 === 0) {  // O(1)
//     return Object.values(count).every(num => num % 2 === 0);  // O(n), space
//   } else {
//     return Object.values(count).filter(num => num % 2 === 1).length === 1;  // O(n), space
//   };
// }

// Time Complexity: O(n)
// Space Complexity: O(n) - this worst case would take place in a case where all characters are unique

function palindromePermutation(s) {
  const set = new Set();  // O(1), space

  for (const c of s) {  // O(n)
    if (set.has(c)) {  // O(1)
      set.delete(c);  // O(1)
    } else {
      set.add(c);  // O(1), space
    }
  }

  return set.size <= 1;  // O(1)
};

// Time Complexity: O(n)
// Space Complexity: O(n) - this worst case would take place in a case where all characters are unique


let s = "aab";
console.log(palindromePermutation(s));