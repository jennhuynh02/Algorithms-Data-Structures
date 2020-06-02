const validPalindrome = (s) => {
  let letters = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  for (let i = 0; i < s.length; i++) {
    if ( Number.isInteger(parseInt(s[i]))) {
      letters.push(s[i])
    }
    if ( alphabet.includes(s[i].toLowerCase())) {
      letters.push(s[i].toLowerCase())
    }
  }
  let half = Math.ceil(letters.length/2);
  for (let i = 0; i < half; i++) {
    if (letters[i] !== letters[(letters.length - 1) - i]) {
      return false
    }
  }

  return true
}

let s = "0P";
// let s = "race a car";
console.log(validPalindrome(s))
// let s = "A man, a plan, a canal: Panama";