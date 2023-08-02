const valid = (s: string) => {
  if (s.length % 2 !== 0) return false;

  const parens = s.split('')
  const orderedParens = '()[]{}'
  const stack: string[] = []

  for (const paren of parens) {
    const idx = orderedParens.indexOf(paren)

    if (idx % 2 === 0) {
      stack.push(paren)
    } else {

      const endOfStack = stack[stack.length - 1]
      const openingBracket = orderedParens[idx - 1]

      if (endOfStack !== openingBracket) {
        return false;
      } else {
        stack.pop()
      }
    }
  }

  return stack.length === 0 ? true : false
}

/*
Solution 1:
Time Complexity: O(n)
Space Complexity: O(n)
*/

console.log(valid("()"))  // true
console.log(valid("()[]{}"))  // true
console.log(valid("(]"))  // false
console.log(valid("([}}])"))  // false
