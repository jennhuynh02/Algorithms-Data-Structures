def tribonacci(n)
  sequence = [0,1,1]

  if n <= 2
    return sequence[n]
  end

  i = 3
  while i <= n
    newNum = sequence.sum
    sequence[0] = sequence[1]
    sequence[1] = sequence[2]
    sequence[2] = newNum
    i += 1
  end

  return sequence[-1]
end

puts tribonacci(4)
puts tribonacci(25)
puts tribonacci(1)