function removeDuplicates(S, flagged = true) {
  if (!flagged) return S;
  flagged = false;
  let word = S.split('')
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i+1]) {
        word[i] = "";
        word[i+1] = "";
        flagged = true;
      }
    }

  return removeDuplicates(word.join(''), flagged);
}


S = "abbaca";
console.log(removeDuplicates(S));