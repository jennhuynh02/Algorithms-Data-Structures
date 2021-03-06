// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins, memo = {}) {
  if (amount === 0) return 1;
  if (coins.length === 0) return 0;

  let key = `${amount}-${coins.join(',')}`;
  if (key in memo) return key[memo];

  let coinVal = coins[coins.length - 1];

  let total = 0;
  for (let quantity = 0; quantity <= (amount/coinVal); quantity ++) {
    total += change(amount - (quantity * coinVal), coins.slice(0, -1), memo);
  }
  memo[key] = total;
  return total;
}