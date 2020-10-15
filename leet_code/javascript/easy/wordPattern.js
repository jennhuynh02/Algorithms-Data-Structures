// Problem 290 Word Pattern

const wordPattern = (pattern, str) => {
  const words = str.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  let match = new Map();
  let exists = new Set();

  for (let i = 0; i < words.length; i++) {
    if (match[words[i]]) {
      if (match[words[i]] !== pattern[i]) return false;
    } else {
      if (exists.has(pattern[i])) return false;
      match[words[i]] = pattern[i];
      exists.add(pattern[i]);
    }
  };
  return true;
}

/*
Solution 1:

Approach:
1.  Split str into words.  
  - O(n)
2.  Check to see if words length is equal to pattern length; if not, return false.
  - O(1)
3.  Create a map, called match - string words will be the keys and the values will be the pattern letter AND create a set, called exists to keep track of pattern letters that have already been assigned to a key word.
  - O(1), space
4.  Loop through words array:
      (n)
  (a) check to see if word exists in match, AND if its pattern letter (value) is still the same as previously assigned; if not, return false because same words should have the same pattern letter assignment.
      (1)
  (b) else, if word does not exist in match, check to see if that pattern letter has already been assigned in the exists set; if so, return false because it means that word has already been matched with to another word, and could not possibly be a match with the current word.
    (c) if none of the above conditions are met, assign new word as a match to the new pattern letter AND then add that pattern letter to exists set to make sure that it will not be assigned to another word.
      (1), space
  - O(n), space


Time Complexity:  O(n)
Space Complexity:  O(n)
*/


let pattern = "abba";
let str = "dog cat cat dog";

console.log(wordPattern(pattern, str));