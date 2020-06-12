function generateTheString(n) {
  // let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = ""
  if (n % 2 === 1) {
    for (let i = 0; i < n; i++) {
      newStr = newStr + "a"
    }
  } else {
    let half = (n/2)
    if (half % 2 === 1) {
      for (let i = 0; i < half; i++) {
        newStr = newStr + "ab"
      }      
    } else {
      for (let i = 0; i < ((n/2) + 1); i++) {
        newStr = newStr + "a"
      }
      for (let i = 0; i < ((n/2) - 1); i++) {
        newStr = newStr + "b"
      }

    }
  }

  return newStr;
}

console.log(generateTheString(10))