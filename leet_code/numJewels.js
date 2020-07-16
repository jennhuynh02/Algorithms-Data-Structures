function numJewels(J,S) {
  let count = 0;
  const jewels = {}
  for (let j = 0; j < J.length; j++) {
    jewels[J[j]] = 0;
  }
  for (let i = 0; i < S.length; i++) {
    if (S[i] in jewels) {
      count += 1;
    }
  }
  return count;
}

let J = "aA";
let S = "aAAbbbb";

console.log(numJewels(J,S))