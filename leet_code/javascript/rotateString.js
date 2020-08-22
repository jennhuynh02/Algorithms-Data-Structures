//  Problem 796
const rotateString = (A, B) => {

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
Time Complexity:  O(n)
Space Complexity:  O(n)
*/

let A = "";
let B = "";
console.log(rotateString(A,B));