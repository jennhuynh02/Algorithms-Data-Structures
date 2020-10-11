// Problem 79:  Word Search

const wordSearch = (board, word) => {
  if (board.length === 0) return false;

  const height = board.length;
  const width = board[0].length;
  const dirs = [[-1,0], [0,1], [1,0], [0, -1]]; // west, north, east, south

  // helper function tries to find the word, takes in coordinates of the board and index of word (starting at 0) as the parameters,
  const run = (x, y, k) => {
    // if the letter on the board does not match the letter of the word, return false
    if (board[x][y] !== word[k]) return false;
    // if the index of the word matches the length of the word, return true because that means this run function has successfully executed until the end of the word has been reached/found
    if (k === word.length - 1) return true;


    // here, we know that the letter of the board matches the letter of the word, we will now mark it as visited
    board[x][y] = "*";

    // this loop will check the coordinates of the board in each direction until there's a match for the next character of the word
    for (const [horizontal, vertical] of dirs) {
      const newX = x + horizontal;
      const newY = y + vertical;
      // if the new coordinates are within range, meaning greater than 0 and less than board's height/width, we will run the helper function to check if its character matches the next character of the word
      if (newX >= 0 && newX < height && newY >= 0 && newY < width) {
        // helper function will run recursively until it hits the base case.  If the function returns true, entire algorithm will return true because word has been found
        if (run(newX, newY, k + 1)) return true;
      }
    }
    // as the function returns out of the recursion, we want to reset the visited coordinate back to its original character in preparation for the next trail to run 
    board[x][y] = word[k];

    // return false at the end of this trail if it never returns true
    return false;
  }

  // this will check every coordinate of the board to see if it is the start of the word by running our helper function on it
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // if helper function returns true, return true
      if (run(i, j, 0)) return true;
    }
  }

  // return false if helper function never return true
  return false;
};

/*
Solution 1:
Time Complexity: O(mn * 4^l) - n is the height of the board, and m is the width of the longest width - iterating through each element of the nested array and comparing it with the length of the word in all four directions
Space Complexity: O(mn + l) - space for each coordinate of the board plus each letter of the word that's being passed into the recursive stack frames
*/

let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

let word1 = "ABCCED";
let word2 = "SEE";
let word3 = "ABCB";

console.log(wordSearch(board, word1))
console.log(wordSearch(board, word2))
console.log(wordSearch(board, word3))

let board2 = [["a", "b"], ["c", "d"]];
let word4 = "abcd"

console.log(wordSearch(board2, word4))