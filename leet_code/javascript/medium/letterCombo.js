// Problem 17:  Letter of Combinations of a Phone Number

// Approach 1

const letterCombo = digits => {
  const combinations = [];

  const keys = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ]);

  const combo = (prefix, index) => {
    if (index >= digits.length) return combinations.push(prefix);
    const letters = keys.get(digits[index]);
    for (const char of letters) combo(prefix + char, index + 1);
  };

  if (digits.length > 0) combo('', 0);

  return combinations;
};

let digits = "23";
console.log(letterCombo(digits));

/*
Solution 1:
Time Complexity: O(n^2)
Space Complexity: O(n^2)
*/