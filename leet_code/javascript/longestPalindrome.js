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

Idea:
1.  Initialize a set
2.  Iterate through each char of the string, if it does not currently exist in the tracker, we will add it to the hash set, else, we will delete it from the tracker because it means that there was a duplicate of that char that could help assemble a palindrome
3.  If the tracker has characters remaining (characters that do not have a duplicate counterpart), we will return the difference of the string's length and the size of the tracker; subtract -1 from tracker because palindromes may have one unique character in the middle
4.  If the tracker size is 0, it will be considered a falsey value; therefore, we would return the length of the string following the else statement in our if condition
Time Complexity:  O(n)
Space Complexity:  O(n) - worst case scenario if s contains all unique characters
*/

let s = "abccccdd";
console.log(longestPalindrome(s));