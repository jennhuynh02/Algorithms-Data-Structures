const isPrefixOfWord = (sentence, searchWord) => {
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) { 
    if (words[i].slice(0,searchWord.length) === searchWord) {
      return i + 1;
      break
    }
  }
    return -1
}

console.log(isPrefixOfWord("i love eating burger", "burg"));