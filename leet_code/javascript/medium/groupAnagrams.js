// Problem 49 Group Anagrams

// Approach 1

const groupAnagrams = strs => {
  const grouped = new Map();

  for (const anagram of strs) {
    const sorted = [...anagram].sort().join("");
    grouped.has(sorted) ? grouped.get(sorted).push(anagram) : grouped.set(sorted, [anagram]);
  }

  return Array.from(grouped.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

/*
Solution 1:
Time Complexity: O(nlogn) - sort is nlogn
Space Complexity: O(n)
*/