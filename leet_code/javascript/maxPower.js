function maxPower(s) {
  if (s.length === 0) return 0;
  
  let sPow = 1;
  let charCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      charCount += 1;
      if (i === s.length - 1 && charCount > sPow) {
        return charCount;
      }
    } else {
      if (sPow < charCount) {
        sPow = charCount;
      }
      charCount = 1;
    }    
  }

  return sPow
}

// let s = "abbcccddddeeeeedcba";
let s = "leetcode";
console.log(maxPower(s))