def reverseOnlyLetters(S):
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  indexes = []
  letters = []

  unsorted = list(S)

  i = 0
  while i < len(unsorted):
    if unsorted[i].lower() in alphabet:
      indexes.append(i)
      letters.append(unsorted[i])
    i += 1

  j = 0
  while j < len(unsorted):
    if j in indexes:
      unsorted[j] = letters.pop()
    j += 1

  return ''.join(unsorted)

s = "ab-cd"
s1 = "a-bC-dEf-ghIj"
s2 = "Test1ng-Leet=code-Q!"

print(reverseOnlyLetters(s))
print(reverseOnlyLetters(s1))
print(reverseOnlyLetters(s2))