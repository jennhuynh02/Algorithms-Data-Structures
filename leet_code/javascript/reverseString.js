
const reverseString = (s) => {
  let indexes = s.length - 1;  // O(1)
  let half = Math.floor(indexes / 2);  // O(1)
  for (let i = 0; i <= half; i++) {   // O(n)
    [s[i], s[indexes - i]] = [s[indexes - i], s[i]]    // O(1)
  }
  return s;   // O(1)
};

// Time Complexity: O(n)
// Space Complexity: O(1)

s1 = ["h","e","l","l","o"];

s2 = ["H","a","n","n","a","h"];

console.log(reverseString(s1));
console.log(reverseString(s2));
