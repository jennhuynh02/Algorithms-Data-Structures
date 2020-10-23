//  Problem 322 Coin Change

// Approach 1 Dynamic Programming

const coinChange = (coins, amount) => {
  const track = Array(amount + 1).fill(Infinity);
  track[0] = 0;

  for (let current = 1; current <= amount; current++) {
    for (const c of coins) {
      if (current - c >= 0) {
        track[current] = Math.min(track[current], track[current - c] + 1)
      }
    }
  }
  return track[amount] === Infinity ? -1 : track[amount];
};

/*
Solution 1:
Time Complexity: O(nk) - each amount is checked for its possible arrangment with every type of coin
Space Complexity: O(k) - dynamic programming array size is relevant to the amount input
*/

let coins = [1,2,5];
let amount = 3;

console.log(coinChange(coins,amount))