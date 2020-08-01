function validWordSquare(words) {
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (words[j]) {
          // checks if there is a row that exists for that column's index e.g. if we're at the 2nd index of a word, but there is no 2nd indexed row exiting in square input, this would indicate that there is an insufficient match of lengths rendering the input invalid as in invalid square
          if (words[i][j] !== words[j][i]) return false;
        } else {
          return false;
        }
      }
  } 
  return true;
}

let words1 = ["abcd", "bnrt", "crmy", "dtye"]
let words2 = ["abc", "b"]

console.log(validWordSquare(words1))
console.log(validWordSquare(words2))

// Time Complexity: O(n^2)
// Space Complexity: O(1)