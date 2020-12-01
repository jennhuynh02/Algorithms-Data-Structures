// Problem 94 Binary Tree Inorder Traversal
// Inorder: left, self, right

// Approach 1 Recursive

const inorderTraversalRecursive = node => {
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

// Approach 2 Iterative

const inorderTraversalIterative = node => {
  // Result array, which will hold values of the tree inorder
  const inorder = [];

  // Stack used to add in nodes that need to be visited after all of its left children has been visited
  const stack = [];

  // Continue this loop until stack is empty, then break of out this loop.
  while(true) {

    // If current node exists, 
    if (root !== null) {
      // push it into the stack and then
      stack.push(root);
      // reassign its left child as the current node.
      root = root.left; 
    } else {
      if (stack.length === 0) break;
      // If current node does not exist, pop off the top of the stack and reassign it as the current node
      root = stack.pop();
      // Push current node's value into inorder array now that left subtree has been visited
      inorder.push(root.val);
      // Visit current node's right child to push it and its left subtree into the stack
      root = root.right;
    }
  };
  
  // Return binary tree's values inorder array
  return inorder;
};

/*
Solution 1:
Time Complexity: O(n) - all nodes are visited
Space Complexity: O(n) - space for every node, which will either be exist in the stack or in the inorder array as the algorithm runs
*/
