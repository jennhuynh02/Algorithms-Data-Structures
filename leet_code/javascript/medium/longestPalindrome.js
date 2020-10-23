// Problem 5: Longest Palindromic Substring

// Approach 1
const longestPal1 = s => {
  if (s.length <= 1) return s;
  const memory = new Map();
  let longest = s[0];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (memory[char]) {
      for (const index of memory[char]) {
        let string = s.slice(index, i+1);
        if (isPalindrome(string) && string.length > longest.length) longest = string;
      }
    }

    memory[char] ? memory[char].push(i) : memory[char] = [i];
  }

  return longest;
};

const isPalindrome = s => {
  const half = Math.floor(s.length / 2);
  for (let i = 0; i < half; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }

  return true;
}

/*
Solution 1:
Time Complexity: O(n^3) - 
Space Complexity: O(n^2) - 
*/

// Approach 2
const longestPal2 = s => {
  let longest = "";

  const check = (left, right) => {
    while (left >= 0 && s[left] === s[right]) {  // O(n)
      left--;
      right++;
    }
    left++;
    right--;

    if (longest.length < right-left+1) longest = s.slice(left, right+1);  // O(n), + space
  }

  for (let i = 0; i < s.length; i++) {  // O(n)
    check(i,i);
    check(i,i + 1);
  }

  return longest;
};

/*
Solution 2:
Time Complexity: O(n^3) -
Space Complexity: O(n^2) -
*/

// Approach 3 - remove the slice inside the check function, and store numbers (start,end) instead of every longest encounter of palindrome substring
const longestPal = s => {
  let [start, end] = [0, 0];

  const check = (left, right) => {
    while (left >= 0 && s[left] === s[right]) {  // O(n)
      left--;
      right++;
    }
    left++;
    right--;

    if (end - start + 1 < right - left + 1) [start, end] = [left, right];
  }

  for (let i = 0; i < s.length; i++) {  // O(n)
    check(i, i);
    check(i, i + 1);
  }

  return s.slice(start, end + 1);  
}

/*
Solution 3:
Time Complexity: O(n^2) -
Space Complexity: O(n) -
*/

let s = "babad";
console.log(longestPal(s));