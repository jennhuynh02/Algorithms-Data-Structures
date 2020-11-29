//  Problem 337 House Robber III

//  Approach 1 Depfth First Search

const rob = root => {
  /* Helper function will recursively return an array with two numbers:
  - first, will indicate how much the robber can take by robbing the current house
  - second, will inidicate how much the robber can take if he doesn't rob the current house,
    but instead, robs from its two child nodes, which themselves should already have the amount
    the robber can take from it OR from its children nodes without it.
  */
  const dfs = node => {
    if (node === null) return [0,0];  // If no child node, return [withCurr = 0, withoutCurrent = 0]

    const [withPrevLeft, withoutPrevLeft] = dfs(node.left);
    const [withPrevRight, withoutPrevRight] = dfs(node.right);

    const withCurr = withoutPrevLeft + withoutPrevRight + node.val;
    /* Add the value of the current node to the max amounts each child node leads to, without taking from the child nodes themselves
    because if two directly linked nodes are robbed, the police will be alerted.
    */
    const withoutCurrent = Math.max(withPrevLeft, withoutPrevLeft) + Math.max(withPrevRight, withoutPrevRight);
    // Add the max value of the child left node and the max value of the child right node, without the current node

    return [withCurr, withoutCurrent];
  };

  const result = dfs(root);
  return Math.max(...result);  
  /* Return the max between: 
  - how much the robber can take if he decides start robbing at the root house
  - how much the robber can take if he decides to start robbing the children of the root house
  */
};


/*
Solution 1:
Time Complexity: O(N) - all nodes are visited
Space Complexity: O(N) - maximum depth of recursion equals the height of the tree, n in worst case, log n is best case if binary tree is full
*/