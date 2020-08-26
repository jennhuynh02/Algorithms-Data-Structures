//  Problem 819
const mostCommonWord1 = (paragraph, banned) => {
  const BANNED = new Set(banned);  // O(m), space
  const words = paragraph.split(/[\.," "!?;.']+/);  // O(n), space
  const count = {};  // O(1), space

  for (let i = 0; i < words.length; i++) {  // O(n)
    let word = words[i].toLowerCase();  // O(1), space
    if (BANNED.has(word)) {  // O(1)
      continue  // O(1)
    } else {
      count[word] ? count[word] = count[word] += 1 : count[word] = 1;  // O(1), space
    }
  }
  const keys = Object.keys(count);  // O(n), space
  const most = ["", 0];  // O(1), space
  for (let j = 0; j < keys.length; j++) {  // O(n)
    if (count[keys[j]] > most[1]) {  // O(1)
      most[0] = keys[j];  // O(1)
      most[1] = count[keys[j]];  // O(1)
    }
  }

  return most[0];  // O(1)
};

/*
Solution 1:
Time Complexity:  O(n+m)
Space Complexity:  O(n+m)
*/

const mostCommonWord2 = (paragraph, banned) => {
  const BANNED = new Set(banned);  // O(m), space
  const words = paragraph.toLowerCase().split(/\W+/);  // O(n), space
  const count = {};  // O(1), space

  for (const word of words) {  // O(n)
    if (!BANNED.has(word)) {  // O(1)
      count[word] ? count[word] = count[word] += 1 : count[word] = 1;  // O(1), space
    }
  }

  return Object.keys(count).reduce((max, val) => count[val] > count[max] ? val : max)  // O(n), space
};

/*
Solution 2:
Same strategy, just cleaning up unnecessary lines of code.
Time Complexity:  O(n+m)
Space Complexity:  O(n+m)
*/

const mostCommonWord3 = (paragraph, banned) => {

};

let paragraph =
  "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"];
console.log(mostCommonWord2(paragraph, banned));
