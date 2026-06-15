// ─── 1. Problem ───────────────────────────────────────────────────────────────
/**
 * 1. Two Sum
 * Easy · https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice. You can return the answer in any order.
 *
 * Examples:
 *   Input:  nums = [2,7,11,15], target = 9  →  Output: [0,1]
 *   Input:  nums = [3,2,4], target = 6      →  Output: [1,2]
 *   Input:  nums = [3,3], target = 6         →  Output: [0,1]
 *
 * Constraints:
 *   2 <= nums.length <= 10^4
 *   -10^9 <= nums[i] <= 10^9
 *   -10^9 <= target <= 10^9
 *   Only one valid answer exists.
 */

// ─── 2. Solution ──────────────────────────────────────────────────────────────

// Original (LeetCode submission)
function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    const targetNum = target - currNum;

    if (hashMap.has(targetNum)) {
      const targetNumIdx = hashMap.get(targetNum) as number;
      return [targetNumIdx, i];
    } else {
      hashMap.set(currNum, i);
    }
  }

  return [];
}

// Cleaned up
function twoSumClean(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const targetNum = target - currNum;

    if (hashMap.has(targetNum)) {
      return [hashMap.get(targetNum)!, i];
    }

    hashMap.set(currNum, i);
  }

  return [];
}

// ─── 3. Complexity ────────────────────────────────────────────────────────────
// Time:  O(n)
// Space: O(n)
