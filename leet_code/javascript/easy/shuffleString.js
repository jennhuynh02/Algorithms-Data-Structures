// Problem 1528 Shuffle String

const shuffleString = (s, indices) => {
  let newStr = new Array(s.length);  //O(n), space

  for (let i = 0; i < indices.length; i++) {  //O(n)
    let idx = indices[i];  //O(1), space
    let char = s[i];  //O(1), space
    newStr[idx] = char;  //O(1)
  }

  return newStr.join("");  //O(n), space
}

/*
Solution 1:
Time Complexity:  O(n)
Space Complexity:  O(n)
*/

const shuffleString2 = (s, indices) => {
  return indices
    .map((el,i) => ({char: s[i], i: el}))
    .sort((a,b) => (a.i - b.i))
    .map(e => e.char).join("");
}

/*
Solution 2:
Time Complexity:  O(n)
Space Complexity:  O(n)
*/

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(shuffleString2(s,indices));