def countingElements(arr):
  count = 0
  nums = set(arr)

  for x in arr:
    if (x + 1) in nums: count += 1

  return count

# Time Complexity: O(n)
# Space Complexity: O(n)

arr = [1,1,3,3,5,5,7,7]
print(countingElements(arr))