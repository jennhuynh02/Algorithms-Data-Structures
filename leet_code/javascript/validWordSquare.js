function validWordSquare(words) {
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (words[j]) {
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