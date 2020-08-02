function commonChars (A) {
  common = []; // O(1), space
  firstWord = A[0].split(""); // O(m), space
  // Use first word to iterate through to check if all other words share common characters (choice of which word shouldn't matter)

  firstWord.forEach(char => { // O(m)
    // Iterates through each character of the first word
    if (A.every(word => word.includes(char))) { // O(nm)
      // Iterates through every word to check if every one of them includes that character of the first word
      A.map(word => word.replace(char, '')) // O(nm)
      // Iterates through every word to replace the common character that is indeed present in each word
      common.push(char);  // O(1), space
      // Pushes this common character into the common array to be returned as common chars result
    }
  });

  return common; // O(1)
}

// Time Complexity: O(nm^2)
// Space Complexity: O(m)

function commonChars2 (A) {
  let res = [...A[0]]; // O(m), space
  // Saving the first word into an array
  for (let i = 1; i < A.length; i++) { // O(n)
    // Iterates through all of the words 
    res = res.filter(c => {  // O(m)
      // Filters through each character of the first word
      const l = A[i].length; // O(1)
      // Saves the length of the current word
      A[i] = A[i].replace(c, ""); // O(m)
      // Replaces character matching first word with empty string to save space
      return l > A[i].length; // O(1)
      // Compares new length of word to its original size, if there are changes, this will return true and filter will keep this character in res later to be returned
    });
  }
  return res;  // O(1)
}

let A = ["bella", "label", "roller"];
let A1 = ["cool", "lock", "cook"];

// console.log(commonChars(A))
// console.log(commonChars(A1))

console.log(commonChars2(A))
// console.log(commonChars2(A1))



