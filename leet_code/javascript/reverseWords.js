const reverseWords = s => {
  return s.split(" ").map(word => reverse(word)).join(" ");
  // O(n) space + O(n^2) space + O(n) 
}

// Helper function to reverse words
const reverse = word => {
  let max = word.length - 1; // O(1)
  let mid = Math.ceil(max / 2); // O(1)
  let reverseThis = word.split(""); // O(n) space 

  for (let i = 0; i < mid; i++) { // O(n)
    [reverseThis[i], reverseThis[max - i]] = [reverseThis[max - i], reverseThis[i]] // O(1)
  }
  return reverseThis.join(""); // O(n)
}

/*
Time Complexity:  O(n^2)
Space Complexity:  O(n^2)
*/

const reverseWords2 = s => {
  return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  // O(n) space + O(n) * O(n space + n + n + n space) + O(n) space  
}

/*
Time Complexity:  O(n^2)
Space Complexity:  O(n^2)
*/

let s = "Let's take LeetCode contest";
console.log(reverseWords(s));
console.log(reverseWords2(s));