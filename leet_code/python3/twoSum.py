def twoSum(nums, target):
  possibles = {}
  for idx, num in enumerate(nums):
    if num in possibles:
      return [possibles[num], idx]
    possibles[target - num] = idx

# Time Complexity: O(n)
# Space Complexity: O(n)

nums = [2, 7, 11, 15]
target = 9


print (twoSum(nums, target))