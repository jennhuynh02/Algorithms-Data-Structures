// Problem 9

const isPalindrome = (num) => {
  const numStr = num.toString()
  const strLength = numStr.length

  for (let i = 0; i < strLength / 2; i++) {
    const a = numStr[i]
    const b = numStr[(strLength - 1) - i]

    if (a !== b) {
      return false;
    }
  }

  return true;
}

// Time Complexity: O(n)
// Space Complexity: O(n)


console.log(isPalindrome(1221)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false