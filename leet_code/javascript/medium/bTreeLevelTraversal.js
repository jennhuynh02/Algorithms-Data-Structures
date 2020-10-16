// Problem 102 Binary Tree Level Order Traversal

const levelOrder = root => {
  if (!root) return [];
  const result = [[root.val]];
  const queue = [root];
  let nextLevel = 1;  // keeps track of the last parent node from the previous level, helps to know what node is the last children on its level so it can be pushed with its siblings as a level array into the master array
  let nodes = 0;
  let subResult = [];
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
      nextLevel = nodes + subResult.length;
      if (subResult.length > 0) {
        result.push(subResult);
        subResult = [];
      }
    }
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