// Problem 22 Generate Parentheses

// Approach 1
const generateParentheses = n => {
  const result = [];

  const go = (str, close, open) => {
    if (str.length === n * 2) result.push(str);
    if (open > 0) go(str + '(', close + 1, open - 1);
    if (close > 0) go(str + ')', close - 1, open);
  }

  go("", 0, n);
  return result;
}

/*
Solution 1:
Time Complexity: O(2^n)
Space Complexity: O(2^n)
*/

let n1 = 3;
let n2 = 1;
console.log(generateParentheses(n1));
console.log(generateParentheses(n2));
