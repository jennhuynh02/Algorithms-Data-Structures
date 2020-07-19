def removeVowels(S):
  vowels = "aeiou"
  newStr = ""

  i = 0
  while i < len(S):
    if S[i] not in vowels:
      newStr = newStr + S[i]
    i += 1

  return newStr

S = "leetcodeisacommunityforcoders"
removeVowels(S)