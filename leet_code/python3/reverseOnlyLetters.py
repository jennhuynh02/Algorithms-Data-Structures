def reverseOnlyLetters(S):
  alphabet = "abcdefghijklmnopqrstuvwxyz"  # O(1), space
  indexes = {}  # O(1), space
  letters = []  # O(1), space

  unsorted = list(S)  # O(n)

  i = 0  # O(1) 
  while i < len(unsorted):   # O(n)
    if unsorted[i].lower() in alphabet:  # O(1)
      indexes.append(i)   # O(1), space
      letters.append(unsorted[i])   # O(1), space
    i += 1

  j = 0   # O(1)
  while j < len(unsorted):   # O(n)
    if j in indexes:   # O(n)
      unsorted[j] = letters.pop()  # O(1)
    j += 1  # O(1)

  return ''.join(unsorted)  # O(n)

# Time Complexity: O(n^2)
# Space Complexity: O(n)


# def reverseOnlyLetters2(S):
#     letters = [c for c in S if c.isalpha()]   # O(n)  
#     ans = []   # O(1)
#     for c in S:
#         if c.isalpha():
#             ans.append(letters.pop())
#         else:
#             ans.append(c)
    # return "".join(ans)

# Time Complexity: O(n^2)
# Space Complexity: O(n)

s = "ab-cd"
s1 = "a-bC-dEf-ghIj"
s2 = "Test1ng-Leet=code-Q!"

print(reverseOnlyLetters2(s))
print(reverseOnlyLetters2(s1))
print(reverseOnlyLetters2(s2))