// Problem 226 Invert Binary Tree

// Approach 1

const invertTree = root => {
  if (!root) return root;
  const left = root.left;
  const right = root.right;

  root.left = invertTree(right);
  root.right = invertTree(left);
  return root;
};

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

console.log(invertTree(one))