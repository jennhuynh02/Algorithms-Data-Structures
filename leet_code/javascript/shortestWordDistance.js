// Problem 243 Shortest Word Distance

const shortestWordDistance = (words, word1, word2) => {
  let index = -1, distance = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1 || words[i] === word2) {
      if (index !== -1 && words[index] !== words[i]) {
        distance = Math.min(i - index, distance);
      }
      index = i;
    }
  };

  return distance; 
};

/*
Solution 1:

Idea:
1.  Loops through words list, checks to see if the word matches w1 or w2, if so, it will reassign the index to reference that last matching word.
2.  Will check to see if the current word is different than the first found matching word, and if so, will calculate that distance (will keep the previous min distance if it is shorter).
3.  Iteration will continue, and check for this pattern, choosing the minimum distance between the two unique specified words.
Time Complexity:  O(n)
Space Complexity:  O(1)
*/


let words = ["practice", "makes", "perfect", "coding", "makes"];
let word1 = "coding"; 
let word2 = "practice";
console.log(shortestWordDistance(words, word1, word2));