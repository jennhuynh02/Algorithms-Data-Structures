function commonChars (A) {
  common = []; // O(1), space
  firstWord = A[0].split(""); // O(m), space
  // Use first word to iterate through to check if all other words share common characters (choice of which word shouldn't matter)

  firstWord.forEach(char => { // O(m)
    // Iterates through each character of the first word
    if (A.every(word => word.includes(char))) { // O(nm)
      // Iterates through every word to check if every one of them includes that character of the first word
      A.map(word => word.replace(char, '')) // O(nm)
      // Iterates through every word to replace a character in each word
      common.push(char);  // O(1), space
      // Pushes this common character into common array to be return as common chars result
    }
  });

  return common; // O(1)
}

let A = ["bella", "label", "roller"];
let A1 = ["cool", "lock", "cook"];

console.log(commonChars(A))
console.log(commonChars(A1))

// Time Complexity: O(nm^2)
// Space Complexity: O(m)

