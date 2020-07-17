import math

def reverseString(S):
  half = math.ceil(len(S) / 2)
  
  indexes = len(S) - 1

  i = 0
  while i < half:
    temp = S[i]
    S[i] = S[indexes - i]
    S[indexes - i] = temp
    i += 1


  print(S)

S = ["h","e","l","l","o"]
S1 = ["a","c","c","o","u","n","t"]
reverseString(S)
reverseString(S1)