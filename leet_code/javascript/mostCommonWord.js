//  Problem 819
const mostCommonWord= (paragraph, banned) => {
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

Concatenates A to itself, which should include all left shift patterns, and then checks if it includes B.
*/

let paragraph = "Bob. hIt, baLl";
let banned = ["bob", "hit"];
console.log(mostCommonWord(paragraph, banned));