function validWordSquare(words) {
  for (let i = 0; i < words.length; i++) { //O(n) number of strings
      for (let j = 0; j < words[i].length; j++) { // O(m) longest length of substrings
        if (words[j]) { // O(1)
          // checks if there is a row that exists for that column's index e.g. if we're at the 2nd index of a word, but there is no 2nd indexed row exiting in square input, this would indicate that there is an insufficient match of lengths rendering the input as in invalid square
          if (words[i][j] !== words[j][i]) return false; // O(1)
        } else {
          return false; // O(1)
        }
      }
  } 
  return true; // O(1)
}

let words1 = ["abcd", "bnrt", "crmy", "dtye"]
let words2 = ["abc", "b"]

console.log(validWordSquare(words1))
console.log(validWordSquare(words2))

// Time Complexity: O(n * m)
// Space Complexity: O(1)