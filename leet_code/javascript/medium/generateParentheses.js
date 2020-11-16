// Problem 22 Generate Parentheses

// Approach 1 Backtracking
const generateParentheses = n => {
  const result = [];

  const go = (str, open, close) => {
    console.log(open, close, str)
    if (str.length === n * 2) result.push(str);
    if (open > 0) go(str + '(', open - 1, close + 1);
    if (close > 0) go(str + ')', open, close - 1);
  }

  go("", n, 0);
  return result;
}

/*
Solution 1:
Time Complexity: O(4^n / n√n)
Space Complexity: O(4^n / n√n)
*/

let n1 = 3;
let n2 = 2;
console.log(generateParentheses(n1));
console.log(generateParentheses(n2));
