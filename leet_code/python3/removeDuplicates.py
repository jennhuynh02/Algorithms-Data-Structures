def removeDuplicates(S, flagged = True):
  print(S)
  if flagged == False: return S

  flagged = False
  word = list(S)
  i = 0
  while i < (len(S) - 1):
    if word[i] == word[i+1]:
      word[i] = ''
      word[i+1] = ''
      flagged = True
      break
    i += 1

  return removeDuplicates(''.join(word), flagged)

S = "abbaca"
removeDuplicates(S)