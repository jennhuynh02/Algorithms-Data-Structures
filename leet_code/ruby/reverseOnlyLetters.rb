def reverseOnlyLetters(s)
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  indexes = []
  letters = []

  i = 0
  while i < s.length
    if alphabet.include?(s[i].downcase)
      indexes.push(i)
      letters.push(s[i])
    end
    i += 1
  end

  j = 0
  while j < s.length
    if indexes.include?(j)
      s[j] = letters.pop()
    end
    j += 1
  end

  return s
end

s = "ab-cd"
s1 = "a-bC-dEf-ghIj"
s2 = "Test1ng-Leet=code-Q!"

puts reverseOnlyLetters(s)
puts reverseOnlyLetters(s1)
puts reverseOnlyLetters(s2)