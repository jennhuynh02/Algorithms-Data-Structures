// Problem 17:  Letter of Combinations of a Phone Number

// Approach 1

const letterCombo = digits => {
  const combinations = [];  // O(1), space

  const keys = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ]);  // O(1), space

  const combo = (prefix, index) => { // O(n, m)
    if (index >= digits.length) return combinations.push(prefix);  // O(1), space
    const letters = keys.get(digits[index]);  // O(1), space
    for (const char of letters) combo(prefix + char, index + 1);  // O(3 || 4) calls the recursion this many times e.i. 3^n, 4^m
  };

  if (digits.length > 0) combo('', 0);  // O(1)

  return combinations;  // O(1)
};

let digits = "677";
console.log(letterCombo(digits));

/*
Solution 1:
Time Complexity: O(3^n + 4^m), n is the number of digits in the input that maps to 3 letters, m maps to 4 letters
Space Complexity: O(3^n + 4^m)
*/