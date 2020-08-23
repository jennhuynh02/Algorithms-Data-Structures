//  Problem 796
const rotateString1 = (A, B) => {

  if (A === B) return true;  // O(1)

  let check = A.slice(1) + A[0];  // O(1), O(n)space

  for (let i = 0; i < A.length; i++) {  // O(n)
    if (check === B) {  // O(1)
      return true;  // O(1)
    } else {
      check = check.slice(1) + check[0];  // O(1), O(n)space
    }
  }

  return false;
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
*/

let A = "abcde";
let B = "cdeab";
console.log(rotateString2(A,B));