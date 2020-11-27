// Problem 138:  Copy List with Random Pointer

// Approach 1 Recursive

const copyRandomLinkedList = (head) => {
  //  Initialize a visited map to keep track of nodes that have already been copied.  This will prevent being caught in a cyclic loop.
  const visited = new Map();

  //  Create a helper function that copies a linked list, starting at the head node - which is passed in as the argument.
  const copyList = (node) => {
    //  If this node does not exist, we will return null.
    if (!node) return null;

    //  If this node has already been visited, we will return its copy from the visisted hash map.
    if (visited.has(node)) return visited.get(node);
  
    //  Create a copy of the current node
    const newNode = new Node(node.val);

    //  Mark the node as visited by adding the original node as the key and the new node as the value.
    visited.set(node, newNode)

    /*  Set the new node's next and random  pointer to a recursive call on the original node's next/random pointer.
    This call should return: 
    - null if pointer does not point to a node,
    - a copy of the pointed node if it has been already been visited and created,
    - otherwise, would create a new node and then any nodes it points to
    */
    newNode.next = copyList(node.next);
    newNode.random = copyList(node.random);

    //  Return the new node after it has been created
    return newNode;
  };

  //  Call the copyList function on the original list head's node that was passed in.
  return copyList(head);
};

/*
Solution 1:
Time Complexity: O(n) - # of nodes copied
Space Complexity: O(n) - # of visited nodes + recursion stack
*/

