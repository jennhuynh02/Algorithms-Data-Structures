# Algorithms & Data Structures

Personal study repo covering core DSA concepts with implementations and LeetCode practice problems. Continuously updated.

## Topics

- **Sorting:** Merge Sort, Quick Sort, Counting Sort, Radix Sort
- **Data Structures:** Linked List, Stack, Queue
- **Algorithms:** Binary Search, Recursion, Memoization
- **Patterns (in progress):** Hashmaps, Two Pointers, Sliding Window, BFS/DFS, Backtracking, Heap/Priority Queue

## Languages

JavaScript/TypeScript · Python

## Study Resources

[Data Structure and Algorithm Patterns for LeetCode Interviews – FreeCodeCamp](https://www.youtube.com/watch?v=Z_c4byLrNBU)

---

# DSA Cheat Sheet

## Arrays

- Traverse a structure in order
- Access specific indices
- Compare elements from both ends
- Leverage sliding window, prefix sums to avoid extra work

## Strings

- String concatenation is **O(n²)** — append to an array instead
- Common problems: longest substring without repeating chars, anagram check, pattern matching substrings
- Almost never about brute force — default to sliding window / two pointer

## Sets

- **O(1)** lookup — best for uniqueness, existence, and fast membership checks
- Useful inside sliding window to track seen elements

## HashMaps

- **O(1)** lookup and insert
- Hashable types: numbers, strings, tuples
- Not hashable: lists, dicts (mutable)
- Enables linear passes instead of nested loops
- Classic use: Two Sum

## Two Pointers

Works on strings, lists, and linked lists.

| Direction | Use case |
|---|---|
| Same direction (slow/fast) | Find middle, detect cycle |
| Opposite direction (converging) | Palindromes, sorted arrays, avoid nested loops |

- Reduces iterations, tracks relationships between two positions, avoids extra space
- Common in: palindromes, reversals, merging sorted data, k-sized comparisons

## Sliding Window

| Type | Behavior |
|---|---|
| Fixed | Window size stays constant |
| Dynamic | Window shrinks/expands based on condition |

- Use when dealing with subarrays or substrings with a constraint

## Binary Search

- Array must be **monotonic** — transitions once, in one direction
- Ideal when array isn't sorted but you need to find what meets a condition
- Signal phrases: "find the first...", "minimum that satisfies...", "leftmost/rightmost..."

## Breadth First Search (BFS)

**Use when:** shortest path, level order traversal, distance/depth matters, find first match closest to root

```python
from collections import deque
queue = deque([start])
visited = set([start])

while queue:
    node = queue.popleft()
    for neighbor in node.neighbors:
        if neighbor not in visited:
            visited.add(neighbor)
            queue.append(neighbor)
```

- **Always log visited nodes on graphs** — add to visited *before* traversing to prevent cycles
- Works on: grids, adjacency lists, networks, graphs with cycles, state exploration
- Easier on trees (top to bottom, no cycle risk)

## Depth First Search (DFS)

**Use when:** explore all nodes, care about structure not distance, existence checks, max depth

- For trees: e.g. max depth of binary tree
- Goes deep before backtracking
- Doesn't need visited set on trees (only on graphs)

## Backtracking

**Use when:** all possible configurations, combinations, permutations, constraint satisfaction

- Recursive DFS that builds partial solutions and discards bad paths early
- If a path hits a dead end → undo last step → try next option
- Classic problems: sudoku, word search, permutations, combinations, frequency maps

```
build partial solution
  → if valid, go deeper
  → if dead end, undo and try next
```

## Control Flow Patterns

```python
for i in range(n):    # index-based
for val in arr:       # value-based
while start < end:    # two pointer / convergence

if / elif / else
break / continue
```

## Big O Quick Reference

| Complexity | Meaning |
|---|---|
| O(1) | Constant — hashmap lookup |
| O(n) | Linear — single pass |
| O(n log n) | Sorting |
| O(n²) | Nested loops — usually too slow, avoid |
