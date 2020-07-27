def tribonnaci(n):
  sequence = [0,1,1]
  
  if n <= 2:
    return sequence[n]

  i = 3
  while i <= n:
    nextNum = sum(sequence)
    sequence[0] = sequence[1]
    sequence[1] = sequence[2]
    sequence[2] = nextNum
    i += 1

  return sequence[-1]

print(tribonnaci(4))
print(tribonnaci(25))
print(tribonnaci(1))