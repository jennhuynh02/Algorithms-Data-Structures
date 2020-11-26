// Problem 138:  Copy List with Random Pointer

// Approach 1 Recursive

const copyRandomLinkedList = (head) => {
  const visited = new Map();

  const copyList = (node) => {
    if (!node) return null;
    if (visited.has(node)) return visited.get(node);
  
    const newNode = new Node(node.val);
    visited.set(node, newNode)
    newNode.next = copyList(node.next);
    newNode.random = copyList(node.random);
    return newNode;
  };

  return copyList(head);
};

/*
Solution 1:
Time Complexity: O(n) - # of nodes copied
Space Complexity: O(n) - # of visited nodes + recursion stack
*/

