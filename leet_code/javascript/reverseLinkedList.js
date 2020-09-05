// Problem 206 Reverse Linked List

// Iterative
const reverseLinkedList = head => {
  let previous = null;
  while (head) {
    const next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  };
  return previous;
};

// Recursive
const reverseLinkedList2 = head => {
  const helper = (current, prev) => {
    if (current === null) return prev;
    let next = current.next;
    current.next = prev;
    return helper(next, current);
  };
  return helper(head, null);
};

/*
Main idea:
1.  Initialize previous of head to null
2.  Save the next node to a value called next
3.  Set the current node's next to the previous node
4.  Set the head to the next node, and repeats steps 2-4 until next head === null
*/