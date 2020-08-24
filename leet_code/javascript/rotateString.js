//  Problem 796
const rotateString1 = (A, B) => {
  if (A === B) return true;  // O(1)

  for (let i = 0; i < A.length; i++) {  // O(n)
    A = A.slice(1) + A[0];  // O(1), O(n)space
    if (A === B) return true;  // O(1)
  }

  return false;  // O(1)
}

/*
Solution 1:
Time Complexity:  O(n)
Space Complexity:  O(n)
*/

const rotateString2 = (A, B) => {
  if (A.length != B.length) return false;  // O(1)

  A += A;  // O(1), O(n) space

  return A.includes(B);  // O(n)
}

/*
Solution 2:
Time Complexity:  O(n)
Space Complexity:  O(n)

Concatenates A to itself, which should include all left shift patterns, and then checks if it includes B.
*/

const rotateString3 = (A, B) => {
  if (A === B) return true;  // O(1)
  if (A.length !== B.length) return false;  // O(1)

  for (let i = 0; i < A.length; i++) {  // O(n)
    A += A[0];  // O(1), space
    A = A.replace(A[0], "");  // O(1), O(n) space
    if (A === B) return true;  // O(1)
  };
  
  return false;  // O(1)
}

/*
Solution 3:
Time Complexity:  O(n)
Space Complexity:  O(n)
Similar to solution 1, but with length constraint that could save time and memory if result is to be false due to difference in length.
*/

let A = "abcde";
let B = "cdeab";
console.log(rotateString1(A,B));