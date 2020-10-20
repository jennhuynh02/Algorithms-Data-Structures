// Problem 102 Binary Tree Level Order Traversal

// Approach 1

const levelOrder1 = root => {
  if (!root) return [];
  const result = [[root.val]];
  const queue = [root]; // queue data structure
  let nextLevel = 1;  // keeps track of how many nodes are on the next level
  let nodes = 0; // keeps track of how many nodes we have iterated through
  let subResult = [];  // subResult will contain values of the children nodes
  while (queue.length) {
    nodes++;
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left)
      subResult.push(node.left.val)
    }
    if (node.right) {
      queue.push(node.right)
      subResult.push(node.right.val)
    }
    if (nodes === nextLevel) {
      nextLevel = nodes + subResult.length;  // we add subResult length to nodes count to indicate how many nodes there will be total on the next level
      if (subResult.length > 0) {
        result.push(subResult);
        subResult = [];
      }
    }
  }

  return result;
}

// Approach 2
const levelOrder = root => {
  if (!root) return [];
  const queue = [root], result = [];
  while (queue.length) {
    const size = queue.length, nextLevel = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      nextLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(nextLevel);
  }

  return result;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);

one.left = two;
two.right = three;
three.right = four;
four.right = five;

console.log(levelOrder(one))