// Problem 139 Word Break

// Approach 1 BFS

const wordBreak1 = (s, wordDict) => {
  const dictionary = new Set(wordDict);  // O(k), space
  const visited = new Set(); // O(1), space
  const queue = [0]; // O(1), space

  while (queue.length) {  // O(n)
    const start = queue.shift();  // O(n), space
    if (!visited.has(start)) {  // O(1)
      for (let end = start + 1; end <= s.length; end++) {  // O(n)
        if (dictionary.has(s.slice(start,end))) {  // O(n), space
          if (end === s.length) return true; // O(1)
          queue.push(end);  // O(1), space
        }
      }
      visited.add(start); // O(1), space
    }
  }
  return false;  // O(1)
};

/*
Solution 1:
Time Complexity: O(n^3 + k)
Space Complexity: O(n^2 + k)
*/

// Approach 2

const wordBreak = (s, wordDict) => {
  const dictionary = new Set(wordDict);
  const check = Array(s.length + 1).fill(false);
  check[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const word = s.slice(start, end);
      if (check[start] === true && dictionary.has(word)) {
        check[end] = true;
        break;
      }
    }
  }
  return check[s.length];
};


let s = "aaaaaaa";
let wordDict = ["aaaa", "aaa"];
console.log(wordBreak(s, wordDict));

/*
Solution 2:
Time Complexity: O(n^3 + k)
Space Complexity: O(n^3 + k)
*/