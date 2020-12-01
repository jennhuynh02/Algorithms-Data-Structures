// Problem 94 Binary Tree Inorder Traversal

// Approach 1 Recursive

// Inorder: left, self, right

const inorderTraversal = root => {
  // Initialize an array that will hold the values of the nodes in order
  const ordered = [];

  const traverse = node => {
    // A tree with no nodes is an empty tree, if there are no node, return (end of tree has been reached)
    if (node === null) return;

    // Traverse through all nodes in the left subtree
    traverse(root.left);
    // A node's value can be pushed into the ordered array once all of the nodes's values in its left subtree has been pushed in
    ordered.push(node.val);
    // Traverse through all nodes in the right subtree
    traverse(root.right);
  };

  // Call the helper function, passing in the tree, the root node
  traverse(root);

  // Return the array with the values of the binary tree nodes in order
  return ordered;
};

/*
Solution 1:
Time Complexity: O(n) - all nodes are visited
Space Complexity: O(n) - space for every node's value in the inorder array
*/