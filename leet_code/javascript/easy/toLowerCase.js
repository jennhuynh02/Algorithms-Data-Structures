const toLowerCase = str => {
  let lowercased = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let lowLetters = {}
  let upperLetters = {}

  for (let i = 0; i < alphabet.length; i++) {
    lowLetters[i] = alphabet[i];
    upperLetters[alphabet[i].toUpperCase()] = i;
  }
  
  str.split('').forEach(letter => {
    if (letter in upperLetters) {
      let index = upperLetters[letter]
      lowercased = lowercased + lowLetters[index]
    } else {
      lowercased = lowercased + letter
    }
  })

  return lowercased
}

console.log(toLowerCase("Hello"))
console.log(toLowerCase("here"))
console.log(toLowerCase("LOVELY"))