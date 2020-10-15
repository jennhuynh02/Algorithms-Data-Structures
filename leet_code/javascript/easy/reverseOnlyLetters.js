function reverseOnlyLetters(S) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const indexes = []
  const letters = []
  for (let i = 0; i < S.length; i++) {
    if (alphabet.includes(S[i].toLowerCase())) {
      indexes.push(i);
      letters.push(S[i])
    }
  }

  let unsorted = S.split('')
  for (let i = 0; i < unsorted.length; i++) {
    if (indexes.includes(i)) {
      unsorted[i] = letters.pop();
    }
  }

  return unsorted.join('');
}

let S = "ab-cd";
let S1 = "a-bC-dEf-ghIj";
let S2 = "Test1ng-Leet=code-Q!";

console.log(reverseOnlyLetters(S))
console.log(reverseOnlyLetters(S1))
console.log(reverseOnlyLetters(S2))