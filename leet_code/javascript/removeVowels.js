const removeVowels = (S) => {
  const vowels = "aeiou"
  let newStr = ""
  for (let i = 0; i < S.length; i++) {
    if (!vowels.includes(S[i])) {
      newStr = newStr + S[i]
    }
  }
  return newStr
}

console.log(removeVowels("leetcodeisacommunityforcoders"))