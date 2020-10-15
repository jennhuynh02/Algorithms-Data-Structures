function uncommonWords(A, B) {
  const words = [... A.split(" "), ... B.split(" ")]
  const wordCount = {}
  for (let i = 0; i < words.length; i ++) {
    if (wordCount[words[i]] !== undefined) {
      wordCount[words[i]] = wordCount[words[i]] += 1;
    } else {
      wordCount[words[i]] = 0;
      wordCount[words[i]] = wordCount[words[i]] += 1;
    }
  }

  const wordBank = Object.keys(wordCount);
  const uncommon = [];

  for (let i = 0; i < wordBank.length; i++) {
    if (wordCount[wordBank[i]] === 1) {
      uncommon.push(wordBank[i])
    }
  }
  return uncommon;
}


let A = "this apple is sweet";
let B = "this apple is sour";
console.log(uncommonWords(A,B))