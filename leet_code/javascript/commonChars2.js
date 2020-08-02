function commonChars (A) {
  common = []; // O(1), space
  firstWord = A[0].split(""); // O(m), space

  firstWord.forEach(char => { // O(m)
    if (A.every(word => word.includes(char))) { // O(nm)
      A.map(word => word.replace(char, '')) // O(nm)
      common.push(char);  // O(1), space
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

