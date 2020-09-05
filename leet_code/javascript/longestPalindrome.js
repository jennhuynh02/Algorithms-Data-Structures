// Problem 409 Longest Palindrome

const longestPalindrome = s => {
  const tracker = new Set();
  for (let i = 0; i < s.length; i++) {
    if (tracker.has(s[i])) {
      tracker.delete(s[i])
    } else {
      tracker.add(s[i])
    }
  }

  if (tracker.size) {
    return s.length - (tracker.size - 1);
  } else {
    return s.length;
  } 
};

/*
Solution 1:

Approach:
1.  Initialize a const tracker to an empty hash set to keep track of what characters has a duplicate counterpart that could assist in forming the longest palindrome
2.  Iterate through each char of the string, if it does not currently exist in the tracker, we will add it to the set, else, we will delete it from the tracker because it means that there was a duplicate of that char that could help assemble the longest palindrome
3.  If the tracker has characters remaining (characters that do not have a duplicate counterpart to form the longest palindrome) - which would result in a truthy value, we will return the difference of the string's length and the size of the tracker - 1; subtract -1 from tracker because palindromes may have one unique character in the middle
4.  If the tracker size is 0, it will be considered a falsey value; therefore, we would return the length of the string following the else statement in our if condition

Time Complexity:  O(n)
Space Complexity:  O(n) - worst case scenario if s contains all unique characters
*/

let s = "abccccdd";
console.log(longestPalindrome(s));